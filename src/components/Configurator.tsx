'use client';
import { useCart } from '@/context/CartContext';
import { Check } from 'lucide-react';

const colors = [
  { name: 'Серебристый', hex: '#C0C0C0' },
  { name: 'Чёрный', hex: '#1A1A1A' },
  { name: 'Золотой', hex: '#D4AF37' },
];
const sizes = ['S', 'M', 'L'];
const materials = ['Нейлон', 'Кожа', 'Эко-кожа'];

export default function Configurator() {
  const { item, setOption } = useCart();

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Превью товара — динамический прямоугольник */}
      <div className="bg-stone-100 rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
        <div
          className="w-full h-64 rounded-xl border-2 border-dashed flex items-center justify-center text-2xl font-light transition-all duration-300"
          style={{
            backgroundColor:
              item.color === 'Серебристый'
                ? '#C0C0C0'
                : item.color === 'Чёрный'
                ? '#1A1A1A'
                : '#D4AF37',
            color: item.color === 'Чёрный' ? '#fff' : '#333',
          }}
        >
          {item.size} / {item.material}
        </div>
      </div>

      {/* Панель выбора опций */}
      <div className="space-y-8">
        <h2 className="text-3xl font-light">Сумка-трансформер</h2>
        <p className="text-stone-600">
          Выберите параметры, и товар изменится вместе с ценой.
        </p>

        {/* Цвет */}
        <div>
          <h3 className="text-sm uppercase tracking-wide mb-3">Цвет</h3>
          <div className="flex gap-3">
            {colors.map((c) => (
              <button
                key={c.name}
                onClick={() => setOption('color', c.name)}
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${
                  item.color === c.name
                    ? 'border-amber-800'
                    : 'border-transparent'
                }`}
                style={{ backgroundColor: c.hex }}
              >
                {item.color === c.name && (
                  <Check className="text-white" size={16} />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Размер */}
        <div>
          <h3 className="text-sm uppercase tracking-wide mb-3">Размер</h3>
          <div className="flex gap-3">
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => setOption('size', s)}
                className={`px-4 py-2 rounded-lg border ${
                  item.size === s
                    ? 'border-amber-800 bg-amber-50 text-amber-900'
                    : 'border-stone-300 text-stone-700'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Материал */}
        <div>
          <h3 className="text-sm uppercase tracking-wide mb-3">Материал</h3>
          <div className="flex gap-3">
            {materials.map((m) => (
              <button
                key={m}
                onClick={() => setOption('material', m)}
                className={`px-4 py-2 rounded-lg border ${
                  item.material === m
                    ? 'border-amber-800 bg-amber-50 text-amber-900'
                    : 'border-stone-300 text-stone-700'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Цена и кнопка */}
        <div className="flex items-center justify-between pt-4 border-t border-stone-200">
          <span className="text-2xl font-light">
            {item.price.toLocaleString()} ₽
          </span>
          <button className="bg-amber-800 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition">
            Заказать
          </button>
        </div>
      </div>
    </div>
  );
}
