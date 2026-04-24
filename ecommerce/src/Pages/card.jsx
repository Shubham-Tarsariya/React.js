import React from 'react';

// IMPORTANT: Capitalize the function name: Dashboard, not dashboard
function Music() {
  return (
    <div className="min-h-screen bg-[#F0F1E8] font-['Inter',sans-serif] text-[#1A1A1A] antialiased">
      
      {/* 1. Header Navigation */}
      <header className="p-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-[24px] px-8 py-5 flex items-center justify-between shadow-sm border border-black/5">
          
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tighter">N nitec.</span>
          </div>

          <div className="flex-1 max-w-lg px-8 relative">
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full bg-[#EBECE1] rounded-full py-4 px-6 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#A6A795]" 
            />
            <button className="absolute right-12 top-1/2 -translate-y-1/2 bg-[#1A1A1A] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
              🔍
            </button>
          </div>

          <div className="flex items-center gap-6">
            <button className="text-2xl">🛍️</button>
            <button className="text-2xl relative">
              ❤️
              <span className="absolute -top-1.5 -right-1.5 bg-[#A6A795] w-2.5 h-2.5 rounded-full"></span>
            </button>
            <div className="flex items-center gap-3 bg-white/50 px-5 py-3 rounded-full border border-black/5">
              <span className="font-semibold text-sm">Ryman Alex</span>
              <img src="https://avatar.vercel.sh/ryman" alt="Ryman Alex" className="w-10 h-10 rounded-full" />
            </div>
          </div>
        </div>
      </header>

      {/* 2. Main Grid Layout */}
      <main className="p-8 grid grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN (COL 1-8) */}
        <div className="col-span-8 flex flex-col gap-8">
          
          {/* Main Product Hero Card */}
          <div className="bg-white rounded-[40px] p-16 relative overflow-hidden flex shadow-lg border border-black/5">
            <div className="flex-1 relative z-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-8">
                  <span className="w-3 h-3 bg-[#A6A795] rounded"></span>
                  <span className="text-xs font-semibold text-gray-500 tracking-wider">Music is Classic</span>
                </div>
                <h1 className="text-7xl font-black leading-[1.05] tracking-tighter mb-10">
                  Sequoia Inspiring <br /> Musico.
                </h1>
                
                <div className="flex items-start gap-10 mb-12">
                  <div className="text-6xl font-extrabold text-[#EBECE1] mt-[-6px]">01</div>
                  <div className="flex-1 max-w-[280px]">
                    <h3 className="font-bold text-base mb-2">Clear Sounds</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Making your dream music come true stay with Sequios Sounds!
                    </p>
                  </div>
                </div>
              </div>

              <button className="bg-[#CEFF6F] text-[#1A1A1A] py-5 px-10 rounded-full font-bold flex items-center gap-4 group transition-all hover:scale-105 shadow-md">
                View All Products 
                <span className="w-10 h-10 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center text-xl group-hover:rotate-45 transition-transform duration-300">→</span>
              </button>
            </div>

            <div className="flex-1 relative">
              <img 
                src="https://i.pinimg.com/736x/59/13/c1/5913c1811d3b60541be81544362459b9.jpg" 
                alt="Sequoia Headphones" 
                className="absolute -right-32 top-1/2 -translate-y-1/2 w-[34rem] scale-x-[-1] drop-shadow-3xl"
              />
              {/* Floating dots decoration */}
              <span className="absolute top-[10%] left-[10%] w-4 h-4 bg-[#EBECE1] rounded-full opacity-60"></span>
              <span className="absolute bottom-[20%] right-[30%] w-3 h-3 bg-[#A6A795] rounded-full"></span>
              <span className="absolute top-[40%] right-[5%] w-2 h-2 bg-[#EBECE1] rounded-full"></span>
            </div>
            
            <div className="absolute bottom-8 left-[1/2] flex gap-3 text-gray-500">
               {/* Simplified follow us icons */}
               <span className="text-xs">Follow us on:</span> 
               <span>🐦</span> <span>🎵</span> <span>📸</span> <span>💼</span>
            </div>
          </div>

          {/* Bottom Small Cards Row */}
          <div className="grid grid-cols-12 gap-8">
            {/* More Products Card */}
            <div className="col-span-4 bg-white rounded-[32px] p-8 flex flex-col justify-between shadow-lg border border-black/5 relative">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-lg mb-1">More Products</h4>
                  <p className="text-sm text-gray-500">460 plus items.</p>
                </div>
                <button className="text-red-500">❤️</button>
              </div>
              <div className="flex gap-4 mt-8">
                <img src="https://i.pinimg.com/736x/5a/ff/f5/5afff5148402ed34d29ebe8069b70e54.jpg" alt="Small product 1" className="w-20 h-20 rounded-2xl object-cover bg-gray-100 p-2" />
                <img src="https://pngimg.com/uploads/earphones/earphones_PNG22.png" alt="Small product 2" className="w-20 h-20 rounded-2xl object-contain bg-gray-100 p-2" />
                <img src="https://i.pinimg.com/736x/fc/75/e8/fc75e88a9b4b96148d30c60bf4de9cb3.jpg" alt="Small product 3" className="w-20 h-20 rounded-2xl object-contain bg-gray-100 p-2" />
              </div>
            </div>

            {/* Downloads/Reviews Card */}
            <div className="col-span-4 bg-white rounded-[32px] p-8 flex flex-col items-center justify-between shadow-lg border border-black/5">
                <div className="flex -space-x-3 mb-6">
                    <img src="https://avatar.vercel.sh/alex" alt="user 1" className="w-12 h-12 rounded-full border-2 border-white ring-1 ring-black/5" />
                    <img src="https://avatar.vercel.sh/jane" alt="user 2" className="w-12 h-12 rounded-full border-2 border-white ring-1 ring-black/5" />
                    <img src="https://avatar.vercel.sh/mike" alt="user 3" className="w-12 h-12 rounded-full border-2 border-white ring-1 ring-black/5" />
                </div>
              <div className="bg-[#3B82F6] text-white py-8 px-10 rounded-[28px] text-center w-full mb-6">
                <h3 className="text-4xl font-extrabold mb-1">5m+</h3>
                <p className="text-xs font-medium uppercase tracking-wider">Downloads</p>
              </div>
              <div className="flex items-center gap-2 text-[#F59E0B] text-xl">
                 ⭐⭐⭐⭐ <span className="text-gray-900 text-sm font-semibold ml-1">4.6 reviews</span>
              </div>
            </div>

            {/* Popular/Listening Card */}
            <div className="col-span-4 bg-white rounded-[32px] p-8 flex flex-col items-start justify-between shadow-lg border border-black/5 relative">
              <button className="absolute top-8 right-8 text-2xl group-hover:rotate-45 transition-transform duration-300">↗</button>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-3 h-3 bg-red-400 rounded"></span>
                <span className="text-xs font-semibold text-gray-500 tracking-wider">Popular</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-8">Listening Has <br /> Been Released</h3>
              
              <div className="flex items-center justify-between w-full">
                <div className="flex -space-x-1">
                    <img src="https://i.pinimg.com/1200x/30/7a/29/307a29117b6dab92b19f30c45d27b37c.jpg" alt="Released item" className="w-14 h-14 rounded-full object-cover border-4 border-white shadow-md ring-1 ring-black/5" />
                </div>
                <div className="flex items-center gap-2 font-bold text-2xl">
                    ⭐ <span className="text-sm font-semibold text-gray-900">4.7</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (COL 9-12) */}
        <aside className="col-span-4 flex flex-col gap-8">
          
          {/* Colors Card */}
          <div className="bg-white rounded-[32px] p-8 shadow-lg border border-black/5">
            <h4 className="font-bold text-lg mb-6">Popular Colors</h4>
            <div className="flex gap-4">
              {['#3B82F6', '#FB923C', '#22C55E', '#EF4444', '#22D3EE'].map((color) => (
                <button 
                  key={color} 
                  style={{ backgroundColor: color }} 
                  className="w-10 h-10 rounded-full border-2 border-white shadow-inner transition hover:scale-110 active:scale-100 ring-2 ring-black/5"
                />
              ))}
            </div>
          </div>

          {/* New Gen Card */}
          <div className="bg-white rounded-[32px] p-10 flex items-center justify-between group cursor-pointer shadow-lg border border-black/5 relative overflow-hidden">
            <button className="absolute top-10 right-10 text-xl group-hover:rotate-45 transition-transform duration-300">↗</button>
            <div className="flex-1 max-w-[150px]">
              <p className="text-xs font-semibold text-gray-500 tracking-wider mb-2">New Gen</p>
              <h3 className="text-3xl font-black text-gray-900 leading-tight">X-Bud</h3>
            </div>
            <img 
              src="https://pngimg.com/uploads/earphones/earphones_PNG22.png" 
              alt="X-Bud Earphones" 
              className="w-24 drop-shadow-lg"
            />
          </div>

          {/* VR Headset Card */}
          <div className="bg-white rounded-[40px] p-8 shadow-lg border border-black/5 flex flex-col items-center group relative overflow-hidden h-[400px]">
             <button className="absolute top-8 right-8 text-2xl group-hover:rotate-45 transition-transform duration-300">↗</button>
             <img 
              src="https://i.pinimg.com/736x/f1/86/14/f1861450b9ac52381e9bbf95b340e81b.jpg" 
              alt="VR Headset" 
              className="w-60 object-contain flex-1 drop-shadow-xl"
             />
             <div className="w-full text-center mt-6">
               <h3 className="text-2xl font-bold tracking-tight mb-2">Light Grey Surface <br /> Headphone</h3>
               <p className="text-sm text-gray-500">Boosted with bass</p>
             </div>
          </div>
        </aside>

      </main>
    </div>
  );
}

export default Music; // Capitalized name