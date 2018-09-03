const restaurantReviewsCacheName = 'restaurantReviews-static-001';
const imgsCacheName = 'restaurantReviews-images-001'; 

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(restaurantReviewsCacheName).then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/restaurant.html',
                '/css/styles.css',
                '/data/restaurants.json',
                '/js/dbhelper.js',
                '/js/main.js',
                '/js/restaurant_info.js'
            ]);
        }).catch((err) => {
            console.log("Cache error while opening: " + err);
        })
    );
});

self.addEventListener('fetch', (event) => {
    let requestURL = new URL(event.request.url);

    if (requestURL.origin === location.origin) {
        if (requestURL.pathname === '/') {
            event.respondWith(caches.match('/'));
            return;
        }
        if (requestURL.pathname.startsWith('/images/')){
            event.respondWith(cachedImage(event.request));
            return;
        }
        if (requestURL.pathname.startsWith('/js/')){
            if (requestURL.pathname.includes('dbhelper.js')){
                event.respondWith(caches.match('/js/dbhelper.js'));
                return;
            }
            if (requestURL.pathname.includes('main.js')){
                event.respondWith(caches.match('/js/main.js'));
                return;
            }
            if (requestURL.pathname.includes('restaurant_info.js')){
                event.respondWith(caches.match('/js/restaurant_info.js'));
                return;
            }
        }
        if (requestURL.pathname === '/restaurant.html'){
            event.respondWith(caches.match('/restaurant.html'));
            return;
        }
    }

    event.respondWith(
        caches.match(event.request).then((response) =>{
            return response || fetch(event.request);
        })
    );
});

cachedImage = (request) => {
    return caches.open(imgsCacheName).then((cache) => {
        return cache.match(request.url).then((response) =>{
            if (response) return response;

            return fetch(request).then((networkResponse) => {
                cache.put(request.url, networkResponse.clone());
                return networkResponse;
            });
        });
    });
}