let cacheData = "app1";

this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((data) => {
            data.addAll([                
                "/" ,
               // "/launch",
               // "/mission",
                "/rocket",
                "/static/js/bundle.js",
                "/static/js/main.chunk.js",
                "/static/js/0.chunk.js",
               // "/static/js/1.chunk.js",
               // "/static/media/r2.d9b68806.png",
               // "/static/media/r1.34349b6b.png",
               // "/static/media/spacex.8ca66a70.png",
               // "/static/media/pic.e972f42d.png",
               // "/manifest.json",
              //  "/sockjs-node",
              //  "https://spacexdata.herokuapp.com/graphql",
              //  "https://spacexdata.herokuapp.com/graphql",
               // "/static/media/spaceship.0923fee6.png",
                "index.html"
              //  "https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg",
              //  "https://farm8.staticflickr.com/7615/16670240949_8d43db0e36_o.jpg",                                
               // "https://farm8.staticflickr.com/7585/16602893909_1181317089_o.jpg",
               // "/images/vid.mp4",
               // "/static/media/spaceship.0923fee6.png",

            ])
        }).catch((err) => {
            console.log('err', err);
        })
 )  
       
}) 

console.log("service worker registered")

this.addEventListener("fetch", (event) => {
    if (!navigator.onLine){
        event.respondWith(
            caches.match(event.request).then((result) => {
                console.log('results', result);
                if (result){
                    return result;
                }
            })
        )
    }
})