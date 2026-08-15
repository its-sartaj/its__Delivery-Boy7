// ============================================
// Indian Delivery Boys — Service Worker v3
// Fixed: Zero interception of YouTube/External Streams
// ============================================

const CACHE_NAME = 'delivery-boys-v3';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(keys.map((k) => caches.delete(k)));
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // CRITICAL FIX: NEVER intercept cross-origin streams (YouTube, Google Video)
  // Intercepting video streams was freezing the browser!
  if (!event.request.url.startsWith(self.location.origin)) {
    return; // Let the browser handle external requests natively
  }

  // Network-first for local assets
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
