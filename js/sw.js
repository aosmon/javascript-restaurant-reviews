var staticCacheName = 'rr-static-v1';

console.log("SW startup");

self.addEventListener('install', function(event) {
  console.log("SW installed");
  event.waitUntil(self.skipWaiting()); // Activate worker immediately
  
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/restaurant.html',
        '/js/main.js',
        '/js/dbhelper.js',
        '/js/restaurant_info.js',
        '/css/styles.css',
        '/data/restaurants.json'
      ]);
    }).catch(function(err){
      console.log(err);
    })
  );

});

self.addEventListener('activate', function(event) {
  console.log("SW activated");
});

self.addEventListener('fetch', function(event) {
  console.log("Caught a fetch!");
  event.respondWith(new Response("Hello world!"));
});

/*
self.addEventListener('install', function(event) {
  
  
  
  
  // TODO: cache /skeleton rather than the root page
  
    
});*/
/*
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith('wittr-') &&
                 cacheName != staticCacheName;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  // TODO: respond to requests for the root page with
  // the page skeleton from the cache

  var requestUrl = new URL(event.request.url);

  if(requestUrl.origin === location.origin){
  	if(requestUrl.pathname === '/'){
  		event.respondWith(caches.match('/skeleton'));
  		return;
  	}
  }

  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('message', function(event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});*/