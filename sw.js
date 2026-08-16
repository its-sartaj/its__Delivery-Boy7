// ============================================
// Indian Delivery Boys — Service Worker v4
// Fixed: Proper cache versioning, offline support
// ============================================

const CACHE_NAME = 'delivery-boys-v4';
const STATIC_ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './songs.js',
  './manifest.json',
  './assets/icon-192.png',
  './assets/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      // Only delete OLD caches, keep the current version
      return Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // CRITICAL: NEVER intercept cross-origin streams (YouTube, Google Video)
  // Intercepting video streams was freezing the browser!
  if (!event.request.url.startsWith(self.location.origin)) {
    return; // Let the browser handle external requests natively
  }

  // Network-first for local assets, fallback to cache for offline
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Cache successful responses for offline use
        if (response.ok) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
