'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { StaticImageData } from 'next/image';

interface CartItem {
  image: StaticImageData | string;
  productName: string; // Unique identifier
  quantity: number;
  price: number | string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (productName: string) => void;
  updateQuantity: (productName: string, type: 'increase' | 'decrease') => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        const parsedCart: CartItem[] = JSON.parse(savedCart);
        setItems(parsedCart);
      }
    } catch (error) {
      console.error('Error loading cart:', error);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem('cart', JSON.stringify(items));
    } catch (error) {
      console.error('Error saving cart:', error);
    }
  }, [items]);

  const addItem = (newItem: CartItem) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.productName === newItem.productName);
      if (existingItem) {
        return currentItems.map(item =>
          item.productName === newItem.productName
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...currentItems, newItem];
    });
  };

  const updateQuantity = (productName: string, type: 'increase' | 'decrease') => {
    setItems(currentItems =>
      currentItems
        .map(item => {
          if (item.productName === productName) {
            const newQuantity = type === 'increase' ? item.quantity + 1 : item.quantity - 1;
            if (newQuantity <= 0) return null;
            return { ...item, quantity: newQuantity };
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const removeItem = (productName: string) => {
    setItems(currentItems => currentItems.filter(item => item.productName !== productName));
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
