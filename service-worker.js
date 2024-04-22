// Service Worker Installation
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/css/style.css',
        '/js/main.js',
        '/images/logo.png' 
      ]); 
    })
  );
});

// Service Worker Activation
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((cacheName) => {
          // Delete old caches if any
          return cacheName !== 'my-cache';
        }).map((cacheName) => {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

// Service Worker Fetch Event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
