// ============================================
// Indian Delivery Boys — Service Worker
// Network-first: always get latest code
// ============================================

const CACHE_NAME = 'delivery-boys-v2';

// Install: skip waiting immediately
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Activate: delete ALL old caches and take control
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: ALWAYS network-first, fall back to cache only when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Cache a copy for offline use
        if (response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        return caches.match(event.request);
      })
  );
});
