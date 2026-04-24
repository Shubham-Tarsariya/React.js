import React, { useState } from 'react';
import { X, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const initialWishlist = [
  {
    id: 1,
    title: 'Classic Leather Watch',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&auto=format&fit=crop&q=60',
  },
  {
    id: 2,
    title: 'Minimalist Sneakers',
    price: 89.5,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&auto=format&fit=crop&q=60',
  },
  {
    id: 3,
    title: 'Denim Jacket',
    price: 79.0,
    image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=500&auto=format&fit=crop&q=60',
  },
  {
    id: 4,
    title: 'Leather Crossbody Bag',
    price: 149.0,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&auto=format&fit=crop&q=60',
  },
];

const Wishlist = () => {
  const [wishlist, setWishlist] = useState(initialWishlist);

  const removeItem = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  /* ─────────────── Empty State ─────────────── */
  if (wishlist.length === 0) {
    return (
      <section>
        {/* Title Bar */}
        <div className="bg-gray-200 w-full py-16 text-center">
          <h1 className="text-5xl font-semibold py-4">Wishlist</h1>
          <p className="text-lg font-medium text-gray-500">Home / Wishlist</p>
        </div>

        <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16">
          <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-6">
            <Heart className="w-10 h-10 text-gray-300" strokeWidth={1.5} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Your wishlist is empty
          </h2>
          <p className="text-gray-500 mb-8 text-center max-w-sm">
            Looks like you haven&apos;t added anything to your wishlist yet.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-200"
          >
            Go to Shop
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    );
  }

  /* ─────────────── Wishlist Grid ─────────────── */
  return (
    <section>
      {/* Title Bar */}
      <div className="bg-gray-200 w-full py-16 text-center">
        <h1 className="text-5xl font-semibold py-4">Wishlist</h1>
        <p className="text-lg font-medium text-gray-500">Home / Wishlist</p>
      </div>

      <div className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Item count */}
        <p className="text-gray-500 mb-6 text-sm">
          {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} in your wishlist
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group relative"
            >
              {/* Remove Button */}
              <button
                onClick={() => removeItem(item.id)}
                aria-label={`Remove ${item.title}`}
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-500 hover:text-red-500 hover:bg-white shadow-sm transition-all duration-200"
              >
                <X className="w-4 h-4" strokeWidth={1.5} />
              </button>

              {/* Image */}
              <div className="aspect-4/5 overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900 truncate">
                  {item.title}
                </h3>
                <p className="text-lg font-bold text-gray-900 mt-1">
                  ${item.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wishlist;