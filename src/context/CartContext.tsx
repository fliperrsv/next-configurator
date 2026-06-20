'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

type Option = {
  color: string;
  size: string;
  material: string;
};

type CartItem = Option & { price: number };

const CartContext = createContext<{
  item: CartItem;
  setOption: (key: keyof Option, value: string) => void;
} | null>(null);

const basePrice = 24990;
const modifiers: Record<string, Record<string, number>> = {
  color: { 'Серебристый': 0, 'Чёрный': 3000, 'Золотой': 8000 },
  size: { 'S': 0, 'M': 2000, 'L': 4500 },
  material: { 'Нейлон': 0, 'Кожа': 12000, 'Эко-кожа': 6000 },
};

export function CartProvider({ children }: { children: ReactNode }) {
  const [item, setItem] = useState<CartItem>({
    color: 'Серебристый',
    size: 'S',
    material: 'Нейлон',
    price: basePrice,
  });

  const setOption = (key: keyof Option, value: string) => {
    setItem(prev => {
      const newItem = { ...prev, [key]: value };
      const colorMod = modifiers.color[newItem.color] || 0;
      const sizeMod = modifiers.size[newItem.size] || 0;
      const matMod = modifiers.material[newItem.material] || 0;
      newItem.price = basePrice + colorMod + sizeMod + matMod;
      return newItem;
    });
  };

  return (
    <CartContext.Provider value={{ item, setOption }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be inside CartProvider');
  return context;
}
