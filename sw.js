
const CACHE = 'staff-eventos-v1';
const FILES = [
  '/staff-eventos/',
  '/staff-eventos/index.html',
  '/staff-eventos/icon-192.png',
  '/staff-eventos/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
