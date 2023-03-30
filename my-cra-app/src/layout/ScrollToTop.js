import { useEffect } from 'react'
import { useLocation } from 'react-router'

const ScrollToTop = (props) => {
  const location = useLocation()

  useEffect(() => {
    if (location.state?.tab) {
      if (document.getElementById('select')) {
        document.getElementById('select').scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }, [location])

  return props.children
}

export default ScrollToTop
