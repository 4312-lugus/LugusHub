const CACHE_NAME = "lugus-hub-v1";

const urlsToCache = [
  "./",
  "./ANTI.LUGUS.HUB-2SKIDS.html",
  "./12314edfsnret4yuu2iwqkdiorkw.html"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});