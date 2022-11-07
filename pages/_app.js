import { useEffect } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if("serviceWorker" in navigator) {
      // navigator.serviceWorker.register("/sw.js").then((registration) => {
      //     console.log("Service Worker registration successful with scope: ", registration.scope)
      //   }, (err) => {
      //     console.log("Service Worker registration failed: ", err)
      //   }
      // )
    }
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
