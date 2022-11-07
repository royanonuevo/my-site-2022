const cacheName = 'v1'
const self = this
  
// Call install Event 
self.addEventListener('install', () => {})

// Call Activate Event 
self.addEventListener('activate', e => { 
  // Clean up old caches by looping through all of the 
  // caches and deleting any old caches or caches that 
  // are not defined in the list 
  e.waitUntil( 
    caches.keys().then(cacheNames => { 
      return Promise.all( 
        cacheNames.map( cache => { 
            if (cache !== cacheName) { 
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
          .open(cacheName) 
          .then(cache => { 
            // Add response to cache 
            cache.put(e.request, resClone)
          })

        return res
      })
      .catch(err => caches.match(e.request).then(res => res)) 
  ) 
})