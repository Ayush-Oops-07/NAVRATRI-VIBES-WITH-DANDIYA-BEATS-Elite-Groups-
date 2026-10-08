import { createContext, useContext, useState, useCallback } from 'react'

const BookingContext = createContext({
  isOpen: false,
  openBooking: () => {},
  closeBooking: () => {},
})

export const useBooking = () => useContext(BookingContext)

export function BookingProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const openBooking = useCallback(() => {
    setIsOpen(true)
  }, [])

  const closeBooking = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <BookingContext.Provider value={{ isOpen, openBooking, closeBooking }}>
      {children}
    </BookingContext.Provider>
  )
}
