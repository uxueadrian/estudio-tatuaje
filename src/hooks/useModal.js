import { useState, useEffect, useCallback } from "react"

export function useModal() {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => {
    setIsOpen(true)
    document.body.style.overflow = "hidden"
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
    document.body.style.overflow = ""
  }, [])

  useEffect(() => {
    return () => {
      document.body.style.overflow = ""
    }
  }, [])

  return { isOpen, open, close }
}
