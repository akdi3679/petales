"use client";

import { useState, useEffect } from "react";
import { products } from "@/data/products";

export interface CartItem {
  id: string;
  quantity: number;
}

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("maison-cart");
    if (saved) setItems(JSON.parse(saved));
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("maison-cart", JSON.stringify(items));
    }
  }, [items, isLoaded]);

  const addItem = (productId: string) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === productId);
      if (existing) {
        return prev.map(i => i.id === productId ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { id: productId, quantity: 1 }];
    });
  };

  const removeItem = (productId: string) => {
    setItems(prev => prev.filter(i => i.id !== productId));
  };

  const clearCart = () => setItems([]);

  const count = items.reduce((acc, item) => acc + item.quantity, 0);
  
  const details = items.map(item => {
    const product = products.find(p => p.id === item.id);
    return product ? { ...product, quantity: item.quantity } : null;
  }).filter(Boolean) as (typeof products[0] & { quantity: number })[];

  // Assuming price is a number. If it's a string like "45 ", we'd need to parse it. 
  // For now, assuming numeric or handling gracefully.
  const total = details.reduce((acc, item) => {
    const priceNum = typeof item.price === 'number' ? item.price : parseFloat(String(item.price).replace(/[^\d.]/g, '')) || 0;
    return acc + (priceNum * item.quantity);
  }, 0);

  return { items, details, count, addItem, removeItem, clearCart, total, isLoaded };
}