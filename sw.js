
// Service Worker v5 — SEM CACHE, sempre busca versão nova
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  // Limpa todos os caches antigos
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

// Sem cache — sempre busca da rede
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() =>
      caches.match(event.request)
    )
  );
});
