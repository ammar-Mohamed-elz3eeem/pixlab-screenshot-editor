import { useEffect } from 'react'
import useFabric from './useFabric'

export function useDeleteClickPressed(): void {
  const {
    canvas: { fabContext: canvas },
  } = useFabric()

  useEffect(() => {
    function handleKeyPress(event: KeyboardEvent): void {
      if (canvas) {
        if (event.key.toLowerCase() === 'delete') {
          canvas.getActiveObjects().forEach((obj) => {
            canvas.remove(obj)
          })
        }
      }
    }
    // Bind the event listener
    document.addEventListener('keyup', handleKeyPress)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('keyup', handleKeyPress)
    }
  }, [canvas])
}
