import React, { useState } from 'react';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const initialCart = [
  {
    id: 1,
    title: 'Classic Leather Watch',
    price: 129.99,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&auto=format&fit=crop&q=60',
  },
  {
    id: 2,
    title: 'Minimalist Sneakers',
    price: 89.5,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&auto=format&fit=crop&q=60',
  },
  {
    id: 3,
    title: 'Denim Jacket',
    price: 79.0,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=500&auto=format&fit=crop&q=60',
  },
];

const Cart = () => {
  const [cart, setCart] = useState(initialCart);

  const updateQuantity = (id, delta) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      })
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = cart.length > 0 ? 12.0 : 0;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <section>
        <div className="bg-stone-100 w-full py-16 text-center">
          <h1 className="text-5xl font-semibold py-4 text-amber-950">Cart</h1>
          <p className="text-lg font-medium text-amber-700/60">Home / Cart</p>
        </div>

        <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16">
          <div className="w-20 h-20 rounded-full bg-amber-50 flex items-center justify-center mb-6">
            <ShoppingBag className="w-10 h-10 text-amber-300" strokeWidth={1.5} />
          </div>
          <h2 className="text-2xl font-bold text-amber-950 mb-2">Your cart is empty</h2>
          <p className="text-amber-700/60 mb-8 text-center max-w-sm">
            Looks like you haven&apos;t added anything to your cart yet.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-amber-800 text-white px-8 py-3 rounded-full font-medium hover:bg-amber-900 transition-colors duration-200"
          >
            Go to Shop
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="bg-stone-100 w-full py-16 text-center">
        <h1 className="text-5xl font-semibold py-4 text-amber-950">Cart</h1>
        <p className="text-lg font-medium text-amber-700/60">Home / Cart</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Cart Items List */}
          <div className="flex-1 space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-5 p-5 rounded-2xl bg-white border border-amber-100 shadow-sm"
              >
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden bg-amber-50 shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-amber-950">
                      {item.title}
                    </h3>
                    <p className="text-amber-800/70 text-sm mt-0.5">
                      ${item.price.toFixed(2)} each
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 rounded-lg border border-amber-200 flex items-center justify-center text-amber-800 hover:bg-amber-50 transition-colors"
                      >
                        <Minus className="w-3.5 h-3.5" strokeWidth={1.5} />
                      </button>
                      <span className="text-sm font-semibold text-amber-950 w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 rounded-lg border border-amber-200 flex items-center justify-center text-amber-800 hover:bg-amber-50 transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
                      </button>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="text-lg font-bold text-amber-950">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 rounded-lg text-amber-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary Sidebar */}
          <div className="w-full lg:w-96 shrink-0">
            <div className="sticky top-8 p-6 rounded-2xl bg-white border border-amber-100 shadow-sm">
              <h2 className="text-xl font-bold text-amber-950 mb-6 flex items-center gap-2">
                <Package className="w-5 h-5 text-amber-700" strokeWidth={1.5} />
                Order Summary
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between text-amber-800/80">
                  <span>Subtotal</span>
                  <span className="font-medium text-amber-950">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-amber-800/80">
                  <span>Shipping</span>
                  <span className="font-medium text-amber-950">${shipping.toFixed(2)}</span>
                </div>
                <div className="h-px bg-amber-100" />
                <div className="flex justify-between text-base font-bold text-amber-950">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button className="mt-8 w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-amber-800 text-white font-semibold hover:bg-amber-900 active:scale-[0.98] transition-all duration-200 shadow-md shadow-amber-900/20">
                Proceed to Checkout
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </button>

              <Link
                to="/shop"
                className="mt-3 block w-full text-center py-3 text-amber-700 font-medium hover:text-amber-900 transition-colors text-sm"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;