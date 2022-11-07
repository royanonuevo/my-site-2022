const CACHE_NAME = 'v1'
const self = this

var CACHE_ASSETS = [
  '/videos/nagpatong-rock.jpg',
  '/videos/nagpatong-rock.mp4'
]
  
// Call install Event 
self.addEventListener('install', (e) => {
  // e.waitUntil(async () => {
  //   const cache = await caches.open(CACHE_NAME)
  //   await cache.addAll(CACHE_ASSETS)
  //   console.log('sw: caching files...')
  //   self.skipWaiting()
  // })
})

// self.addEventListener('fetch', (e) => {
//   e.respondWith(async () => {
//     const response = await caches.match(e.request)
//     return response? response : await fetch(e.request)
//   })
// })

// // Call Activate Event 
// self.addEventListener('activate', e => { 
//   // Clean up old caches by looping through all of the 
//   // caches and deleting any old caches or caches that 
//   // are not defined in the list 
//   e.waitUntil( 
//     caches.keys().then(cacheNames => { 
//       return Promise.all( 
//         cacheNames.map( cache => { 
//             if (cache !== CACHE_NAME) { 
//               return caches.delete(cache)
//             } 
//           } 
//         ) 
//       ) 
//     }) 
//   )
// })




// Call Activate Event 
self.addEventListener('activate', e => { 
  // Clean up old caches by looping through all of the 
  // caches and deleting any old caches or caches that 
  // are not defined in the list 
  e.waitUntil( 
    caches.keys().then(cacheNames => { 
      return Promise.all( 
        cacheNames.map( cache => { 
            if (cache !== CACHE_NAME) { 
              return caches.delete(cache)
            } 
          } 
        ) 
      ) 
    }) 
  )
})

// Call Fetch Event  
self.addEventListener('fetch', e => { 
  e.respondWith( 
    fetch(e.request) 
      .then(res => { 
        const resClone = res.clone()
        // Open cache 
        caches
          .open(CACHE_NAME) 
          .then(cache => { 
            // Add response to cache 
            cache.put(e.request, resClone)
          })

        return res
      })
      .catch(err => caches.match(e.request).then(res => res)) 
  ) 
})