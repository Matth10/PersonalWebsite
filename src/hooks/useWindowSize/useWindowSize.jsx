import React, { useEffect, useState } from "react"

export const useWindowSize = () => {
  const isClient = typeof window === "object"

  const getSize = () => ({
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined,
  })

  const [windowSize, setWindowSize] = useState(getSize())

  useEffect(() => {
    if (!isClient) {
      return false
    }

    function handleResize() {
      setWindowSize(getSize())
    }

    if (!windowSize.height || !windowSize.height) {
      handleResize()
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isClient])

  return windowSize
}
