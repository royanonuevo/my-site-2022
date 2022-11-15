import { useEffect, useState } from 'react'

const ScrollIndicator = () => {
  const [indicatorWidth, setIndicatorWidth] = useState('0%')

  useEffect(() => {
    const handleScroll = event => {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      var scrolled = (winScroll / height) * 100
      setIndicatorWidth(Math.ceil(scrolled) + '%');
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="fixed top-0 w-full z-10 ">
      <div className="bg-teal-700 h-[2px]" style={{width: indicatorWidth}}></div>
    </div>
  )
}

export default ScrollIndicator