import { createContext, useContext, useState, useEffect } from "react";
const ShoppingCartContext = createContext({});

const initialCarItems = localStorage.getItem("shopping-cart") ? JSON.parse(localStorage.getItem("shopping-cart")) : [];

const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(initialCarItems);
  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const getItemsQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };
  const increaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseCartQuantity = (id) => {
    if (getItemsQuantity(id) === 1) {
      setCartItems((currItems) => currItems.filter((item) => item.id !== id));
    } else {
      setCartItems((currItems) => {
        if (currItems.find((item) => item.id === id) == null) {
          return currItems.filter((item) => item.id !== id);
        } else {
          return currItems.map((item) => {
            if (item.id === id) {
              return { ...item, quantity: (item.quantity > 0) ? item.quantity - 1 : 0 };
            } else {
              return item;
            }
          });
        }
      });
    }
  };
  const removeItemFromCart = (id) => {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));
  };
  const removeAllItemsFromCart = () => {
    setCartItems([]);
  };
  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        getItemsQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeItemFromCart,
        removeAllItemsFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
