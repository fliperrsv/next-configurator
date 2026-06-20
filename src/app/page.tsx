import { CartProvider } from '@/context/CartContext';
import Configurator from '@/components/Configurator';

export default function Home() {
  return (
    <CartProvider>
      <main className="min-h-screen py-12 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-light text-center mb-12">
          Конфигуратор товара
        </h1>
        <Configurator />
      </main>
    </CartProvider>
  );
}
