'use client';

import { Product } from '@/components/Product/Product.type';
import { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';

const CartContext = createContext<{
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
  getCartItems: () => CartItem[];
} | null>(null);

export type CartItem = {
  product: Product;
  quantity: number;
};

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);


  useEffect(() => {
    const storedCart = localStorage.getItem('CART_STORAGE');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('CART_STORAGE', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    if (cart.find((item) => item.product.id == product.id)) {
      const newCart = cart.map((item) => {
        if (item.product.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(newCart);
      return;
    }
    setCart([...cart, { product: product, quantity: 1 }]);
  };

  const removeFromCart = (product: Product) => {
    if (cart.find((item) => item.product.id == product.id)) {
      const newCart = cart
        .map((item) => {
          if (item.product.id === product.id) {
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return null;
            }
          }
          return item;
        })
        .filter((r) => r != null);
      setCart(newCart);
      return;
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartItems = () => {
    return cart;
  };

  return (
    <CartContext.Provider
      value={{ addToCart, removeFromCart, clearCart, getCartItems }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  return context;
}
