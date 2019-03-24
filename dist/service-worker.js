importScripts("precache-manifest.f1b2b81209403623b6bee24297afdfd5.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");


workbox.routing.registerRoute(/.*(?:fonts)\.gstatic.*$/, workbox.strategies.cacheFirst({
 cacheName: 'google-fonts'
}));
workbox.routing.registerRoute(/.*(?:predicthq)\.com.*$/, new workbox.strategies.NetworkFirst({
 cacheName: 'predictHQ',
 plugins: [
   new workbox.expiration.Plugin({
     maxEntries: 3
   }),
 ]
} 
));


workbox.routing.registerRoute( /jpg|svg|jpeg/, workbox.strategies.cacheFirst(
 {cacheName: 'photos'
 }));


workbox.precaching.precacheAndRoute(self.__precacheManifest);


