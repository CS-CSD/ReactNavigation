import React, { createContext, useContext, useState } from 'react';


type Product = {
  id: string;
  name: string;
  price: number;
  rating: string;
  image: any;
  quantity: number;
};


type CartContextType = {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  updateQuantity: (id: string, amount: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
};


const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider'); // ⚠ This error happens if CartProvider is missing!
  }
  return context;
};

// ✅ CartProvider Component
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === product.id);
      if (itemExists) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id: string, amount: number) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(0, item.quantity + amount) } : item
      ).filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id: string) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };

const clearCart = () => {
  console.log("clearCart() function called!"); // ✅ Debugging log
  setCartItems([]); // ✅ Clears the cart
  console.log("Cart state after clearing:", cartItems); // ❌ If cart is not empty, something is wrong
};


  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
