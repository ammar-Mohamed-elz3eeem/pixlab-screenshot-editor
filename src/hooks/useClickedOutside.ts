import { type RefObject, useEffect } from 'react'

export function useOutsideAlerter(ref: RefObject<Element>, cb: () => void): void {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: Event): void {
      if (ref?.current && !ref.current.contains(event.target as Node)) {
        cb()
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}
