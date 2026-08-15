class SoundEngine {
  constructor() {
    this.ctx = null; // lazy init AudioContext
    this.engineOsc = null;
    this.engineLfo = null;
  }
  
  init() {
    if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playHorn() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(800, this.ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(600, this.ctx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);
    osc.connect(gain).connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.25);
    
    // Second honk after short pause
    setTimeout(() => {
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = 'square';
      osc2.frequency.setValueAtTime(900, this.ctx.currentTime);
      osc2.frequency.linearRampToValueAtTime(650, this.ctx.currentTime + 0.3);
      gain2.gain.setValueAtTime(0.3, this.ctx.currentTime);
      gain2.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.35);
      osc2.connect(gain2).connect(this.ctx.destination);
      osc2.start();
      osc2.stop(this.ctx.currentTime + 0.4);
    }, 200);
  }

  playNotification() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1200, this.ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(800, this.ctx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.4, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.4);
    osc.connect(gain).connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.45);
    
    // Second ding
    setTimeout(() => {
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(1400, this.ctx.currentTime);
      osc2.frequency.linearRampToValueAtTime(1000, this.ctx.currentTime + 0.1);
      gain2.gain.setValueAtTime(0.3, this.ctx.currentTime);
      gain2.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);
      osc2.connect(gain2).connect(this.ctx.destination);
      osc2.start();
      osc2.stop(this.ctx.currentTime + 0.35);
    }, 200);
  }

  playEngineIdle() {
    this.init();
    if (this.engineOsc) return; // already playing
    
    this.engineOsc = this.ctx.createOscillator();
    this.engineGain = this.ctx.createGain();
    this.engineOsc.type = 'sawtooth';
    this.engineOsc.frequency.setValueAtTime(55, this.ctx.currentTime);
    this.engineGain.gain.setValueAtTime(0.05, this.ctx.currentTime);
    
    // Add slight frequency wobble
    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    lfo.frequency.setValueAtTime(3, this.ctx.currentTime);
    lfoGain.gain.setValueAtTime(5, this.ctx.currentTime);
    lfo.connect(lfoGain).connect(this.engineOsc.frequency);
    lfo.start();
    
    this.engineOsc.connect(this.engineGain).connect(this.ctx.destination);
    this.engineOsc.start();
    this.engineLfo = lfo;
  }

  stopEngine() {
    if (this.engineOsc) { 
      this.engineOsc.stop(); 
      this.engineLfo.stop(); 
      this.engineOsc = null; 
      this.engineLfo = null;
    }
  }
}

// Global player variable accessible to YouTube API
let player = null;
let isPlayerReady = false;
const soundEngine = new SoundEngine();

// Global callback for YouTube API
window.onYouTubeIframeAPIReady = function() {
  player = new YT.Player('youtube-player', {
    height: '100%', 
    width: '100%',
    playerVars: { 
      autoplay: 0, 
      controls: 1, 
      disablekb: 0, 
      fs: 0, 
      modestbranding: 1,
      rel: 0,
      enablejsapi: 1,
      playsinline: 1
    },
    events: { 
      onReady: function(event) {
        isPlayerReady = true;
        if (window.onPlayerReady) window.onPlayerReady(event);
      }, 
      onStateChange: function(event) {
        if (window.onPlayerStateChange) window.onPlayerStateChange(event);
      },
      onError: function(event) {
        if (window.onPlayerError) window.onPlayerError(event);
      }
    }
  });
};

// ==========================================
// DOUBLY LINKED LIST DATA STRUCTURE
// For O(1) Prev & Next Song Navigation
// ==========================================
class SongNode {
  constructor(song, index) {
    this.song = song;
    this.index = index;
    this.prev = null;
    this.next = null;
  }
}

class SongDoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.currentNode = null;
    this.length = 0;
  }

  // Populate Circular Doubly Linked List from songs array
  buildFromArray(songs) {
    this.head = null;
    this.tail = null;
    this.currentNode = null;
    this.length = 0;

    if (!songs || songs.length === 0) return;

    for (let i = 0; i < songs.length; i++) {
      const newNode = new SongNode(songs[i], i);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
      this.length++;
    }

    // Circular Doubly Linked List linking (tail <-> head)
    if (this.head && this.tail && this.length > 0) {
      this.tail.next = this.head;
      this.head.prev = this.tail;
    }
    this.currentNode = this.head;
  }

  // Move pointer forward (Next)
  getNextNode() {
    if (!this.currentNode) return null;
    this.currentNode = this.currentNode.next;
    return this.currentNode;
  }

  // Move pointer backward (Previous)
  getPrevNode() {
    if (!this.currentNode) return null;
    this.currentNode = this.currentNode.prev;
    return this.currentNode;
  }

  // Sync pointer by song index
  setCurrentByIndex(index) {
    if (!this.head) return null;
    let curr = this.head;
    for (let count = 0; count < this.length; count++) {
      if (curr.index === index) {
        this.currentNode = curr;
        return curr;
      }
      curr = curr.next;
    }
    // Fallback: if not found, default to head
    this.currentNode = this.head;
    return this.head;
  }

  getCurrentNode() {
    return this.currentNode;
  }
}

(function() {
  'use strict';
  
  // === STATE ===
  let currentSongIndex = 0;
  let isPlaying = false;
  let isShuffled = false;
  let isRepeating = false;
  let shuffledIndices = [];
  let playlist = [];
  const songList = new SongDoublyLinkedList(); // Doubly Linked List instance
  let isMuted = false;
  let statsInterval = null;
  let chaiInterval = null;
  let progressAnimationFrame = null;

  // Background Audio Keep-Alive for Mobile Phone Background Playback
  let bgAudio = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=');
  bgAudio.loop = true;

  function enableMobileBackgroundAudio() {
    if (bgAudio) {
      bgAudio.play().catch(e => {});
    }
  }

  function updateMediaSession(song) {
    if ('mediaSession' in navigator && song) {
      try {
        navigator.mediaSession.metadata = new MediaMetadata({
          title: song.title,
          artist: song.artist,
          album: `${song.movie} (${song.year})`,
          artwork: [
            { src: 'assets/icon-192.png', sizes: '192x192', type: 'image/png' },
            { src: 'assets/icon-512.png', sizes: '512x512', type: 'image/png' }
          ]
        });

        navigator.mediaSession.setActionHandler('play', () => { togglePlayPause(); });
        navigator.mediaSession.setActionHandler('pause', () => { togglePlayPause(); });
        navigator.mediaSession.setActionHandler('previoustrack', () => { playPrev(); });
        navigator.mediaSession.setActionHandler('nexttrack', () => { playNext(); });
      } catch(e) {}
    }
  }

  // Stats State
  let stats = {
    orders: 14,
    km: 84.5,
    earnings: 850
  };

  const restaurants = ['Sharma Ji Ka Dhaba', 'Pizza Palace', 'Biryani House', 'Chinese Corner', 'South Indian Express', 'Burger King', 'Chai Point', 'Dominos', 'McDonald\'s', 'Haldiram\'s', 'Bikanervala', 'Sagar Ratna', 'Cafe Coffee Day', 'Momo Junction', 'Tandoori Nights'];
  const foodItems = ['Butter Chicken', 'Paneer Tikka', 'Biryani', 'Naan x2', 'Dal Makhani', 'Gulab Jamun x2', 'Chole Bhature', 'Masala Dosa', 'Veg Thali', 'Chicken Roll', 'Samosa x4', 'Lassi', 'Raita', 'Fried Rice'];
  const riderNames = ['Raju', 'Suresh', 'Amit', 'Vikram', 'Rahul', 'Deepak', 'Karan', 'Arjun', 'Rohit', 'Sachin'];

  // === INIT ===
  function init() {
    playlist = [...SONGS]; // from songs.js (global const)
    songList.buildFromArray(playlist); // Initialize Doubly Linked List
    initPlaylistUI();
    attachEventListeners();
    registerPWA();
    updateStatsUI();
    loadYouTubeAPI();
  }
  
  function attachEventListeners() {
    // Hero Start
    document.getElementById('btn-start-ride').addEventListener('click', startRide);
    
    // Player Controls
    document.getElementById('btn-play').addEventListener('click', togglePlayPause);
    document.getElementById('btn-prev').addEventListener('click', () => playPrev());
    document.getElementById('btn-next').addEventListener('click', () => playNext());
    document.getElementById('btn-shuffle').addEventListener('click', toggleShuffle);
    document.getElementById('btn-repeat').addEventListener('click', toggleRepeat);
    document.getElementById('btn-mute').addEventListener('click', toggleMute);
    document.getElementById('volume-slider').addEventListener('input', changeVolume);
    
    // Progress Bar Interaction
    const progressBar = document.getElementById('progress-bar');
    let isDragging = false;
    
    progressBar.addEventListener('mousedown', (e) => {
      isDragging = true;
      seekToPosition(e);
    });
    document.addEventListener('mousemove', (e) => {
      if (isDragging) seekToPosition(e);
    });
    document.addEventListener('mouseup', () => {
      if (isDragging) isDragging = false;
    });
    // Touch support
    progressBar.addEventListener('touchstart', (e) => {
      isDragging = true;
      seekToPosition(e.touches[0]);
    });
    document.addEventListener('touchmove', (e) => {
      if (isDragging) {
        e.preventDefault();
        seekToPosition(e.touches[0]);
      }
    }, {passive: false});
    document.addEventListener('touchend', () => {
      if (isDragging) isDragging = false;
    });

    // Playlist Toggles & Filters
    document.getElementById('btn-playlist-toggle').addEventListener('click', togglePlaylistPanel);
    document.getElementById('playlist-search').addEventListener('input', filterPlaylist);
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', handleCategoryFilter);
    });

    // Action Buttons
    document.getElementById('btn-horn').addEventListener('click', triggerHorn);
    document.getElementById('btn-notification').addEventListener('click', triggerNotification);
    document.getElementById('btn-chai').addEventListener('click', triggerChaiBreak);
    document.getElementById('btn-skip-chai').addEventListener('click', skipChaiBreak);

    // Settings
    document.getElementById('toggle-daynight').addEventListener('change', toggleDayNightSetting);
    document.getElementById('toggle-rain').addEventListener('change', toggleRainSetting);
    document.getElementById('toggle-sway').addEventListener('change', toggleSwaySetting);
    document.getElementById('toggle-engine').addEventListener('change', toggleEngineSetting);

    // Receipt Generator
    document.getElementById('btn-generate-receipt').addEventListener('click', generateReceipt);
    document.getElementById('btn-download-receipt').addEventListener('click', downloadReceipt);

    // Keyboard Shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
  }

  function startRide() {
    enableMobileBackgroundAudio();
    
    const hero = document.getElementById('hero-section');
    const mainApp = document.getElementById('main-app');
    
    if (hero) {
      hero.classList.add('hidden-section');
      hero.style.display = 'none';
    }
    if (mainApp) {
      mainApp.classList.remove('hidden-section');
      mainApp.style.display = 'block';
      mainApp.style.opacity = '1';
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });

    try {
      startStatsSimulator();
    } catch(e) {}

    try {
      loadSong(currentSongIndex, true);
    } catch(e) {
      console.warn('Error playing song on start:', e);
    }
  }

  function loadYouTubeAPI() {
    if (window.YT && window.YT.Player) {
      if (typeof window.onYouTubeIframeAPIReady === 'function') {
        window.onYouTubeIframeAPIReady();
      }
      return;
    }
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(tag);
  }

  window.onPlayerReady = function(event) {
    if (playlist.length > 0) {
      loadSong(currentSongIndex, false);
    }
    const volSlider = document.getElementById('volume-slider');
    if (volSlider && event.target.setVolume) {
      event.target.setVolume(volSlider.value);
    }
  };

  let lastSwitchTime = 0;
  let songStartTime = 0;

  window.onPlayerStateChange = function(event) {
    if (event.data == YT.PlayerState.PLAYING) {
      isPlaying = true;
      songStartTime = Date.now(); // Record when song actually started playing
      updatePlayPauseUI();
      startProgressBar();
      enableMobileBackgroundAudio();
      if ('mediaSession' in navigator) {
        try { navigator.mediaSession.playbackState = 'playing'; } catch(e) {}
      }
    } else if (event.data == YT.PlayerState.PAUSED) {
      isPlaying = false;
      updatePlayPauseUI();
      stopProgressBar();
      if ('mediaSession' in navigator) {
        try { navigator.mediaSession.playbackState = 'paused'; } catch(e) {}
      }
    } else if (event.data == YT.PlayerState.ENDED) {
      isPlaying = false;
      updatePlayPauseUI();
      stopProgressBar();
      
      const playedSeconds = songStartTime > 0 ? (Date.now() - songStartTime) / 1000 : 0;
      
      // Only auto-play next song if current song genuinely played to the end (> 15 seconds)
      if (playedSeconds > 15) {
        if (isRepeating) {
          player.seekTo(0);
          player.playVideo();
        } else {
          playNext();
        }
      } else {
        console.log(`Ignored premature ENDED event (${playedSeconds.toFixed(1)}s)`);
      }
    }
  };

  let errorTimer = null;

  window.onPlayerError = function(event) {
    console.warn('YouTube Player Error code:', event.data);
    if (errorTimer) clearTimeout(errorTimer);
    errorTimer = setTimeout(() => {
      console.log('Skipping unplayable/restricted track to next song...');
      playNext(true);
    }, 500);
  };

  // === PLAYER FUNCTIONS ===
  function loadSong(index, play = false) {
    const song = playlist[index];
    if (!song) return;

    currentSongIndex = index;
    songStartTime = 0; // Reset song play start timer
    songList.setCurrentByIndex(index); // Sync Doubly Linked List active pointer

    // Instant UI Update (0ms latency feedback)
    document.getElementById('song-title').textContent = song.title;
    document.getElementById('song-artist').textContent = song.artist;
    document.getElementById('song-movie').textContent = `${song.movie} (${song.year})`;
    document.getElementById('current-time').textContent = '0:00';
    document.getElementById('progress-fill').style.width = '0%';
    document.getElementById('progress-handle').style.left = '0%';

    updatePlaylistActiveItem();
    updateMediaSession(song);

    if (player && typeof player.loadVideoById === 'function') {
      if (play) {
        try {
          player.loadVideoById(song.youtubeId);
        } catch(e) {
          try { player.loadVideoById({ videoId: song.youtubeId }); } catch(err) {}
        }
        isPlaying = true;
        updatePlayPauseUI();
      } else {
        try {
          player.cueVideoById(song.youtubeId);
        } catch(e) {
          try { player.cueVideoById({ videoId: song.youtubeId }); } catch(err) {}
        }
      }
    }
  }

  function togglePlayPause() {
    enableMobileBackgroundAudio();
    if (!player) {
      console.warn('Player not initialized yet');
      return;
    }
    
    try {
      const state = typeof player.getPlayerState === 'function' ? player.getPlayerState() : -1;
      if (state === YT.PlayerState.PLAYING) {
        player.pauseVideo();
      } else if (state === YT.PlayerState.PAUSED) {
        player.playVideo();
      } else {
        const song = playlist[currentSongIndex];
        if (song && typeof player.loadVideoById === 'function') {
          player.loadVideoById(song.youtubeId);
        }
      }
    } catch(err) {
      console.error(err);
    }
  }

  function updatePlayPauseUI() {
    const playIcon = document.getElementById('icon-play');
    const pauseIcon = document.getElementById('icon-pause');
    const disc = document.getElementById('player-disc');
    
    if (isPlaying) {
      playIcon.classList.add('hidden');
      pauseIcon.classList.remove('hidden');
      disc.classList.add('spinning');
    } else {
      playIcon.classList.remove('hidden');
      pauseIcon.classList.add('hidden');
      disc.classList.remove('spinning');
    }
  }

  function playNext(isErrorSkip = false) {
    if (playlist.length === 0) return;
    
    const now = Date.now();
    if (!isErrorSkip && (now - lastSwitchTime < 600)) {
      return;
    }
    lastSwitchTime = now;

    let nextIndex;
    if (isShuffled) {
      const currentShuffleIdx = shuffledIndices.indexOf(currentSongIndex);
      nextIndex = shuffledIndices[(currentShuffleIdx + 1) % shuffledIndices.length];
      songList.setCurrentByIndex(nextIndex);
    } else {
      // Traverse forward using Doubly Linked List (O(1))
      const nextNode = songList.getNextNode();
      nextIndex = nextNode ? nextNode.index : (currentSongIndex + 1) % playlist.length;
    }
    loadSong(nextIndex, true);
  }

  function playPrev() {
    if (playlist.length === 0) return;

    // STRICT DEBOUNCE: Block ANY track change within 1000ms
    const now = Date.now();
    if (now - lastSwitchTime < 1000) {
      return;
    }
    lastSwitchTime = now;

    let prevIndex;
    if (isShuffled) {
      const currentShuffleIdx = shuffledIndices.indexOf(currentSongIndex);
      prevIndex = shuffledIndices[(currentShuffleIdx - 1 + shuffledIndices.length) % shuffledIndices.length];
      songList.setCurrentByIndex(prevIndex);
    } else {
      // Traverse backward using Doubly Linked List (O(1))
      const prevNode = songList.getPrevNode();
      prevIndex = prevNode ? prevNode.index : (currentSongIndex - 1 + playlist.length) % playlist.length;
    }
    loadSong(prevIndex, true);
  }

  function toggleShuffle() {
    isShuffled = !isShuffled;
    const btn = document.getElementById('btn-shuffle');
    if (isShuffled) {
      btn.classList.add('active');
      // Create shuffled indices
      shuffledIndices = Array.from({length: playlist.length}, (_, i) => i);
      // Fisher-Yates shuffle
      for (let i = shuffledIndices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledIndices[i], shuffledIndices[j]] = [shuffledIndices[j], shuffledIndices[i]];
      }
    } else {
      btn.classList.remove('active');
    }
  }

  function toggleRepeat() {
    isRepeating = !isRepeating;
    const btn = document.getElementById('btn-repeat');
    if (isRepeating) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  }

  function toggleMute() {
    if (!player) return;
    isMuted = !isMuted;
    const volIcon = document.getElementById('icon-volume');
    const muteIcon = document.getElementById('icon-mute');
    
    if (isMuted) {
      player.mute();
      volIcon.classList.add('hidden');
      muteIcon.classList.remove('hidden');
    } else {
      player.unMute();
      volIcon.classList.remove('hidden');
      muteIcon.classList.add('hidden');
    }
  }

  function changeVolume(e) {
    if (!player) return;
    const vol = e.target.value;
    player.setVolume(vol);
    if (vol > 0 && isMuted) {
      toggleMute();
    }
  }

  function formatTime(seconds) {
    if (isNaN(seconds) || seconds === null) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }

  let progressInterval = null;

  function updateProgressBar() {
    if (!player || !isPlaying) return;
    
    try {
      if (typeof player.getCurrentTime === 'function') {
        const currentTime = player.getCurrentTime() || 0;
        const duration = (typeof player.getDuration === 'function' ? player.getDuration() : 0) || 0;
        
        document.getElementById('current-time').textContent = formatTime(currentTime);
        if (duration > 0) {
          document.getElementById('total-time').textContent = formatTime(duration);
          const percent = (currentTime / duration) * 100;
          document.getElementById('progress-fill').style.width = `${percent}%`;
          document.getElementById('progress-handle').style.left = `${percent}%`;
        }
      }
    } catch (e) {
      // ignore
    }
  }

  function startProgressBar() {
    stopProgressBar();
    updateProgressBar();
    progressInterval = setInterval(updateProgressBar, 250);
  }

  function stopProgressBar() {
    if (progressInterval) {
      clearInterval(progressInterval);
      progressInterval = null;
    }
  }

  function seekToPosition(e) {
    if (!player || !player.getDuration) return;
    const duration = player.getDuration();
    if (!duration) return;
    
    const progressBar = document.getElementById('progress-bar');
    const rect = progressBar.getBoundingClientRect();
    let clientX = e.clientX;
    if (clientX === undefined && e.touches) {
      clientX = e.touches[0].clientX;
    }
    
    let x = clientX - rect.left;
    x = Math.max(0, Math.min(x, rect.width));
    
    const percent = x / rect.width;
    const seekTime = percent * duration;
    
    document.getElementById('progress-fill').style.width = `${percent * 100}%`;
    document.getElementById('progress-handle').style.left = `${percent * 100}%`;
    document.getElementById('current-time').textContent = formatTime(seekTime);
    
    player.seekTo(seekTime, true);
  }

  // === PLAYLIST FUNCTIONS ===
  function initPlaylistUI() {
    renderPlaylist(playlist);
  }

  function renderPlaylist(songsToRender) {
    const list = document.getElementById('playlist-list');
    list.innerHTML = '';
    
    songsToRender.forEach((song, i) => {
      const originalIndex = playlist.indexOf(song); // keep track of original index for playing
      const li = document.createElement('li');
      li.className = 'playlist-item';
      li.dataset.index = originalIndex;
      if (originalIndex === currentSongIndex) {
        li.classList.add('active');
      }
      
      li.innerHTML = `
        <span class="playlist-item-number">${(i + 1).toString().padStart(2, '0')}</span>
        <div class="playlist-item-info">
          <span class="playlist-item-title">${song.title}</span>
          <span class="playlist-item-artist">${song.artist} — ${song.movie} (${song.year})</span>
        </div>
      `;
      
      li.addEventListener('click', () => {
        loadSong(originalIndex, true);
      });
      
      list.appendChild(li);
    });
    
    document.getElementById('playlist-count').textContent = `${songsToRender.length} songs`;
  }

  function updatePlaylistActiveItem() {
    document.querySelectorAll('.playlist-item').forEach(item => {
      if (parseInt(item.dataset.index) === currentSongIndex) {
        item.classList.add('active');
        item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        item.classList.remove('active');
      }
    });
  }

  function togglePlaylistPanel() {
    const panel = document.getElementById('playlist-panel');
    panel.classList.toggle('hidden');
  }

  function filterPlaylist(e) {
    const term = e.target.value.toLowerCase();
    const filtered = playlist.filter(song => 
      song.title.toLowerCase().includes(term) || 
      song.artist.toLowerCase().includes(term) || 
      song.movie.toLowerCase().includes(term)
    );
    renderPlaylist(filtered);
    songList.buildFromArray(filtered.length > 0 ? filtered : playlist);
    songList.setCurrentByIndex(currentSongIndex);
    
    // reset categories
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
  }

  function handleCategoryFilter(e) {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const category = btn.dataset.filter;
    document.getElementById('playlist-search').value = '';
    
    if (category === 'all') {
      renderPlaylist(playlist);
      songList.buildFromArray(playlist);
      songList.setCurrentByIndex(currentSongIndex);
    } else {
      const categoryIds = SONG_CATEGORIES[category] || [];
      const filtered = playlist.filter(song => categoryIds.includes(song.id));
      renderPlaylist(filtered);
      songList.buildFromArray(filtered.length > 0 ? filtered : playlist);
      songList.setCurrentByIndex(currentSongIndex);
    }
  }

  // === ACTION HANDLERS ===
  function triggerHorn() {
    soundEngine.playHorn();
    
    const btn = document.getElementById('btn-horn');
    btn.classList.add('vibrating');
    setTimeout(() => btn.classList.remove('vibrating'), 400);

    const text = document.getElementById('horn-text');
    text.classList.remove('hidden');
    text.style.animation = 'none';
    text.offsetHeight; // trigger reflow
    text.style.animation = 'floatUp 1.5s ease-out forwards';
    setTimeout(() => text.classList.add('hidden'), 1500);

    const ringsContainer = document.getElementById('horn-rings');
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        const ring = document.createElement('div');
        ring.className = 'pulse-ring';
        ringsContainer.appendChild(ring);
        setTimeout(() => ring.remove(), 1000);
      }, i * 150);
    }
  }

  function triggerNotification() {
    soundEngine.playNotification();
    
    const btn = document.getElementById('btn-notification');
    btn.classList.add('vibrating');
    setTimeout(() => btn.classList.remove('vibrating'), 400);

    const restaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
    const km = (Math.random() * 5 + 1).toFixed(1);
    const amount = Math.floor(Math.random() * 100) + 40;

    document.getElementById('notif-restaurant').textContent = restaurant;
    document.getElementById('notif-km').textContent = km;
    document.getElementById('notif-amount').textContent = amount;

    const popup = document.getElementById('notification-popup');
    popup.classList.remove('hidden');
    popup.style.animation = 'slideInRight 0.3s ease forwards';
    
    stats.orders++;
    updateStatsUI();

    setTimeout(() => {
      popup.style.animation = 'slideOutRight 0.3s ease forwards';
      setTimeout(() => popup.classList.add('hidden'), 300);
    }, 3000);
  }

  // === CHAI BREAK ===
  function triggerChaiBreak() {
    if (player && typeof player.pauseVideo === 'function') {
      player.pauseVideo();
    }
    
    const modal = document.getElementById('chai-break-modal');
    modal.classList.remove('hidden');
    
    let timeLeft = 300; // 5 minutes
    const timerDisplay = document.getElementById('chai-timer');
    const messageDisplay = document.getElementById('chai-message');
    const messages = ["Chai ho rahi hai...", "Biscuit dip karo 🍪", "Thoda aaram kar lo...", "Agle order ki taiyaari!"];
    
    updateChaiDisplay(timeLeft, timerDisplay);
    messageDisplay.textContent = messages[0];
    
    clearInterval(chaiInterval);
    chaiInterval = setInterval(() => {
      timeLeft--;
      updateChaiDisplay(timeLeft, timerDisplay);
      
      if (timeLeft % 30 === 0) {
        messageDisplay.textContent = messages[Math.floor((300-timeLeft)/30) % messages.length];
      }
      
      if (timeLeft <= 0) {
        skipChaiBreak();
      }
    }, 1000);
  }

  function updateChaiDisplay(seconds, display) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    display.textContent = `${m}:${s < 10 ? '0' : ''}${s}`;
  }

  function skipChaiBreak() {
    clearInterval(chaiInterval);
    document.getElementById('chai-break-modal').classList.add('hidden');
    if (player && typeof player.playVideo === 'function' && !isPlaying) {
       // if we were playing before, maybe resume? let user decide, or auto resume.
       // We'll just let them manually resume or auto play
       player.playVideo();
    }
  }

  // === RECEIPT GENERATOR ===
  function generateReceipt() {
    let restaurant = document.getElementById('receipt-restaurant-input').value.trim();
    let address = document.getElementById('receipt-address-input').value.trim();
    
    if (!restaurant) restaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
    if (!address) address = "Sector 14, Main Market, Plot 42";

    const orderId = Math.floor(100000 + Math.random() * 900000);
    const date = new Date().toLocaleString();
    const rider = riderNames[Math.floor(Math.random() * riderNames.length)];
    const eta = Math.floor(Math.random() * 30) + 15;
    const deliveryFee = Math.floor(Math.random() * 35) + 15;
    
    document.getElementById('receipt-order-id').textContent = orderId;
    document.getElementById('receipt-date').textContent = date;
    document.getElementById('receipt-from-name').textContent = restaurant;
    document.getElementById('receipt-to-address').textContent = address;
    document.getElementById('receipt-rider-name').textContent = rider;
    document.getElementById('receipt-eta').textContent = eta;
    
    const itemsCount = Math.floor(Math.random() * 3) + 2;
    const itemsContainer = document.getElementById('receipt-items');
    itemsContainer.innerHTML = '';
    
    let subtotal = 0;
    
    for (let i = 0; i < itemsCount; i++) {
      const item = foodItems[Math.floor(Math.random() * foodItems.length)];
      const price = Math.floor(Math.random() * 200) + 50;
      subtotal += price;
      
      const row = document.createElement('div');
      row.className = 'receipt-item-row';
      row.innerHTML = `<span>${item}</span><span>₹${price}</span>`;
      itemsContainer.appendChild(row);
    }
    
    const total = subtotal + deliveryFee;
    
    document.getElementById('receipt-delivery-fee').textContent = `₹${deliveryFee}`;
    document.getElementById('receipt-total-amount').textContent = `₹${total}`;
    
    document.getElementById('receipt-output').classList.remove('hidden');
  }

  function downloadReceipt() {
    const card = document.getElementById('receipt-card');
    
    // Since html2canvas is not guaranteed to be loaded, we can draw to a canvas manually or use window.print
    // Simple approach: print
    window.print();
  }

  // === SETTINGS ===
  function toggleDayNightSetting(e) {
    if (e.target.checked) {
      document.body.classList.add('is-night');
      document.body.classList.remove('is-day');
    } else {
      document.body.classList.remove('is-night');
      document.body.classList.add('is-day');
    }
  }

  function toggleRainSetting(e) {
    if (e.target.checked) {
      document.body.classList.add('is-raining');
    } else {
      document.body.classList.remove('is-raining');
    }
  }

  function toggleSwaySetting(e) {
    // inverted logic: checked = enable sway, so not checked = disabled
    const bikeSwayer = document.getElementById('bike-sway');
    if (bikeSwayer) {
      if (e.target.checked) {
        bikeSwayer.classList.remove('sway-disabled');
      } else {
        bikeSwayer.classList.add('sway-disabled');
      }
    }
  }

  function toggleEngineSetting(e) {
    if (e.target.checked) {
      soundEngine.playEngineIdle();
    } else {
      soundEngine.stopEngine();
    }
  }

  // === STATS ===
  function startStatsSimulator() {
    statsInterval = setInterval(() => {
      // random chance to get an order
      if (Math.random() > 0.5) {
        stats.orders++;
        stats.km += (Math.random() * 2.3 + 1.2);
        stats.earnings += Math.floor(Math.random() * 40) + 25;
        updateStatsUI();
      }
    }, 45000); // every 45s
  }

  function updateStatsUI() {
    const ordersEl = document.getElementById('stat-orders');
    const kmEl = document.getElementById('stat-km');
    const earningsEl = document.getElementById('stat-earnings');
    
    if(ordersEl) animateValue(ordersEl, parseInt(ordersEl.textContent) || stats.orders, stats.orders, 1000);
    if(kmEl) animateValue(kmEl, parseFloat(kmEl.textContent) || stats.km, stats.km.toFixed(1), 1000, true);
    if(earningsEl) animateValue(earningsEl, parseInt(earningsEl.textContent.replace('₹','')) || stats.earnings, stats.earnings, 1000, false, '₹');
  }

  function animateValue(obj, start, end, duration, isFloat=false, prefix='') {
    if (obj) {
      obj.innerHTML = prefix + end;
    }
  }

  // === KEYBOARD SHORTCUTS ===
  function handleKeyboardShortcuts(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return; 
    
    switch(e.key.toLowerCase()) {
      case ' ': 
        e.preventDefault(); 
        togglePlayPause(); 
        break;
      case 'n': 
        playNext(); 
        break;
      case 'p': 
        playPrev(); 
        break;
      case 'h': 
        triggerHorn(); 
        break;
      case 'o': 
        triggerNotification(); 
        break;
      case 'c': 
        triggerChaiBreak(); 
        break;
      case 'd': 
        const toggle = document.getElementById('toggle-daynight');
        toggle.checked = !toggle.checked;
        toggle.dispatchEvent(new Event('change'));
        break;
      case 'l': 
        togglePlaylistPanel(); 
        break;
    }
  }

  // === PWA ===
  function registerPWA() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js').catch(err => {
        console.log('SW registration failed: ', err);
      });
    }
  }

  // Start
  document.addEventListener('DOMContentLoaded', init);

})();
