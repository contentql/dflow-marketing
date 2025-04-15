import { useEffect, useState } from 'react'

const useColorScheme = () => {
  const [colorScheme, setColorScheme] = useState('')

  useEffect(() => {
    // Check if running in the browser
    if (typeof window === 'undefined') return

    // Function to update colorScheme state
    const updateColorScheme = () => {
      const htmlElement = document.documentElement
      const computedStyle = getComputedStyle(htmlElement)
      const newColorScheme = computedStyle.getPropertyValue('color-scheme').trim()
      setColorScheme(newColorScheme)
    }

    // Initial update
    updateColorScheme()

    // Create a MutationObserver to watch for changes in <html> attributes
    const observer = new MutationObserver(updateColorScheme)

    // Start observing the <html> element for attribute changes
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['style'],
    })

    // Clean up the observer on component unmount
    return () => {
      observer.disconnect()
    }
  }, []) // Empty dependency array ensures this effect runs only once

  return colorScheme
}

export default useColorScheme
