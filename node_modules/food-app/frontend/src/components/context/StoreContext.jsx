import { createContext, useMemo, useState } from 'react'
import { food_list } from '../../assets/assets'

export const StoreContext = createContext(null)
const StoreContextProvider = (props) => {
  const [cart, setCart] = useState({})

  const addToCart = (item) => {
    setCart((prev) => {
      const currentQty = prev[item._id] ? prev[item._id].quantity : 0
      return {
        ...prev,
        [item._id]: {
          item,
          quantity: currentQty + 1,
        },
      }
    })
  }

  const removeFromCart = (itemId) => {
    setCart((prev) => {
      if (!prev[itemId]) return prev
      const currentQty = prev[itemId].quantity
      if (currentQty <= 1) {
        const next = { ...prev }
        delete next[itemId]
        return next
      }
      return {
        ...prev,
        [itemId]: {
          ...prev[itemId],
          quantity: currentQty - 1,
        },
      }
    })
  }

  const removeAllFromCart = (itemId) => {
    setCart((prev) => {
      const next = { ...prev }
      delete next[itemId]
      return next
    })
  }

  const getQuantity = (itemId) => {
    return cart[itemId]?.quantity ?? 0
  }

  const contextValue = useMemo(
    () => ({
      food_list,
      cart,
      addToCart,
      removeFromCart,
      removeAllFromCart,
      getQuantity,
    }),
    [cart],
  )

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider;