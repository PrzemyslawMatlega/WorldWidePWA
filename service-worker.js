importScripts("precache-manifest.70d20fa5cd5543bd7aa994588b0538ed.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");


workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new workbox.strategies.NetworkFirst({
    cacheName: 'google-fonts-stylesheets',
  })
);

workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new workbox.strategies.CacheFirst({
    cacheName: 'google-fonts-webfonts',

  })
);

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

