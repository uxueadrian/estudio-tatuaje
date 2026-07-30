import { useState, useEffect, useCallback, useRef } from "react"

export function useCarousel(items, { autoplayInterval = 4000 } = {}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef(null)

  const goTo = useCallback(
    (index) => {
      if (index < 0) {
        setCurrentIndex(items.length - 1)
      } else if (index >= items.length) {
        setCurrentIndex(0)
      } else {
        setCurrentIndex(index)
      }
    },
    [items.length]
  )

  const goNext = useCallback(() => {
    goTo(currentIndex + 1)
  }, [currentIndex, goTo])

  const goPrev = useCallback(() => {
    goTo(currentIndex - 1)
  }, [currentIndex, goTo])

  useEffect(() => {
    if (isPaused || items.length <= 1) return

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length)
    }, autoplayInterval)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPaused, items.length, autoplayInterval])

  const pause = useCallback(() => setIsPaused(true), [])
  const resume = useCallback(() => setIsPaused(false), [])

  return {
    currentIndex,
    goNext,
    goPrev,
    goTo,
    isPaused,
    pause,
    resume,
  }
}
