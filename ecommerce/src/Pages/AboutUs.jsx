import React from "react";
import {
  Search,
  Heart,
  ShoppingCart,
  User,
  ArrowUpRight,
  Truck,
  CreditCard,
  Headphones,
} from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Top Bar */}
      <div className="bg-[#5a1f0f] text-white text-[11px] py-2 text-center tracking-tight">
        Support: (406) 555-0120 <span className="mx-4 opacity-40">|</span> Sign
        up and <span className="font-bold text-orange-400">GET 25% OFF</span>{" "}
        for your first order.{" "}
        <span className="underline cursor-pointer">Sign up now</span>
      </div>

      {/* Hero Header */}
      <div className="py-16 text-center">
        <h1 className="text-4xl font-bold mb-2">About Us</h1>
        <p className="text-sm text-gray-400">Home / About Us</p>
      </div>

      {/* Our Story Section */}
      <section className="max-w-5xl mx-auto px-6 text-center mb-20">
        <span className="text-[12px] font-bold uppercase tracking-widest text-slate-400">
          Our Story
        </span>
        <h2 className="text-4xl font-bold mt-4 mb-6 leading-tight">
          Crafted with Care: Fine <br /> Materials, Thoughtful Design
        </h2>
        <p className="text-slate-500 text-sm max-w-3xl mx-auto leading-relaxed mb-8">
          We began with a simple mission: to create clothing that feels as good as it looks. 
          By combining traditional craftsmanship with modern silhouettes, we ensure every piece 
          tells a story of quality and dedication.
        </p>
        <div className="mb-2">
          <span className="text-3xl italic font-serif text-[#5a1f0f]">
            Jenny Alexander
          </span>
        </div>
        <p className="text-[10px] font-bold uppercase tracking-tighter text-slate-400">
          Jenny Alexander • CEO
        </p>

        {/* Updated Story Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop"
            alt="Designer at work"
            className="rounded-sm w-full h-100 object-cover"
          />
          <div className="grid grid-rows-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?q=80&w=800&auto=format&fit=crop"
              alt="Studio Workspace"
              className="rounded-sm w-full h-48 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop"
              alt="Textile detail"
              className="rounded-sm w-full h-48 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#f3bc65] py-12 mb-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8 text-center text-slate-900">
          <div>
            <p className="text-2xl font-bold">25+</p>
            <p className="text-xs font-medium uppercase tracking-widest">Years</p>
          </div>
          <div>
            <p className="text-2xl font-bold">180+</p>
            <p className="text-xs font-medium uppercase tracking-widest">Stores</p>
          </div>
          <div>
            <p className="text-2xl font-bold">100k+</p>
            <p className="text-xs font-medium uppercase tracking-widest">Customers</p>
          </div>
          <div>
            <p className="text-2xl font-bold">35+</p>
            <p className="text-xs font-medium uppercase tracking-widest">Awards</p>
          </div>
          <div>
            <p className="text-2xl font-bold">98%</p>
            <p className="text-xs font-medium uppercase tracking-widest">Satisfied</p>
          </div>
        </div>
      </section>

      {/* Product Quality Section */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center mb-15">
        <img
          src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop"
          alt="Product Quality"
          className="rounded-sm w-full h-125 object-cover"
        />
        <div className="space-y-6">
          <span className="text-[12px] font-bold uppercase tracking-widest text-slate-400">
            Our Product Quality
          </span>
          <h2 className="text-4xl font-bold leading-tight">
            We Make Things Comfy, <br /> Pretty, and Fancy
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Our fabrics are sourced from sustainable mills and tested for durability, 
            ensuring that your favorite pieces stay in your wardrobe for years to come.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-4">
            <div className="space-y-2">
              <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center">
                🌱
              </div>
              <h4 className="font-bold">100% Cotton</h4>
              <p className="text-[11px] text-slate-400">
                Pure organic cotton for ultimate skin comfort.
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center">
                🧵
              </div>
              <h4 className="font-bold">Breathable Fabric</h4>
              <p className="text-[11px] text-slate-400">
                Advanced weaving techniques for better airflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Updated Team Section */}
      <section className="max-w-6xl mx-auto px-6 text-center mb-5">
        <span className="text-[12px] font-bold uppercase tracking-widest text-slate-400">
          Our Team
        </span>
        <h2 className="text-4xl font-bold mt-4 mb-16">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <TeamCard
            name="Sarah Jenkins"
            role="Creative Director"
            img="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
          />
          <TeamCard
            name="Bessie Cooper"
            role="Founder & CEO"
            img="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
          />
          <TeamCard
            name="Marcus Thorne"
            role="Lead Fashion Designer"
            img="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop"
          />
        </div>
      </section>

      {/* Shipping/Support Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10  px-20 py-10">
        {/* icon 1 */}
        <div className="flex items-center justify-center gap-4">
          {/* svg */}
          <div className="w-24 overflow-hidden p-3">
            <img
              src="/icons/1.png"
              alt="cart"
              className="w-full h-full object-cover"
            />
          </div>
          {/* info */}
          <div className="flex flex-col gap-y-2">
            <h3 className="font-semibold text-xl">Free Shipping</h3>
            <p className="text-gray-400 font-medium">
              Free shipping for order above $180
            </p>
          </div>
        </div>

        {/* icon 2 */}
        <div className="flex items-center justify-center gap-4">
          {/* svg */}
          <div className="w-24 overflow-hidden p-3">
            <img
              src="/icons/2.png"
              alt="cart"
              className="w-full h-full object-cover"
            />
          </div>
          {/* info */}
          <div className="flex flex-col gap-y-2">
            <h3 className="font-semibold text-xl">Flexible Payment</h3>
            <p className="text-gray-400 font-medium">Multiple secure payment options</p>
          </div>
        </div>

        {/* icon 3 */}
        <div className="flex items-center justify-center gap-4">
          {/* svg */}
          <div className="w-24 overflow-hidden p-3">
            <img
              src="/icons/3.png"
              alt="cart"
              className="w-full h-full object-cover"
            />
          </div>
          {/* info */}
          <div className="flex flex-col gap-y-2">
            <h3 className="font-semibold text-xl">24x7 Support</h3>
            <p className="text-gray-400 font-medium">
              We support online all days
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function TeamCard({ name, role, img }) {
  return (
    <div className="text-left group">
      <div className="relative overflow-hidden rounded-sm mb-4">
        <img
          src={img}
          alt={name}
          className="w-full h-100 object-cover grayscale transition duration-500 group-hover:grayscale-0"
        />
      </div>
      <h4 className="font-bold text-lg">{name}</h4>
      <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">
        {role}
      </p>
    </div>
  );
}