
workbox.routing.registerRoute(/.*(?:fonts)\.gstatic.*$/, workbox.strategies.staleWhileRevalidate({
 cacheName: 'google-fonts'
}));
workbox.routing.registerRoute(/.*(?:predicthq)\.com.*$/, workbox.strategies.staleWhileRevalidate({
 cacheName: 'predictHQ',
 plugins: [
   new workbox.expiration.Plugin({
     maxEntries: 3,
     maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
   }),
 ]
} 
));


workbox.routing.registerRoute( /jpg|svg|jpeg/, workbox.strategies.cacheFirst(
 {cacheName: 'photos'
 }));


workbox.precaching.precacheAndRoute(self.__precacheManifest);

