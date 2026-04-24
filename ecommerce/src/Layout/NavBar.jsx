import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import NavBarIcons from "../Components/NavBarIcons";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <section>
        {/* desktop navbar */}
        <nav className="bg-white px-8 py-4 w-full h-auto hidden md:flex items-center justify-between">
          {/* logo */}
          <div className="flex justify-center items-center gap-x-2">
            <img src="/logo.png" alt="logo" className="w-10 object-cover" />
            <h1 className="font-bold text-xl">Shopping.</h1>
          </div>

          {/* links */}
          <ul className="flex items-center justify-center gap-x-4 text-lg font-normal">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/collection">Collection</a>
            </li>
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>

          {/* icons */}
          <NavBarIcons />
        </nav>

        {/* Mobile and Tablet */}
        <nav className="bg-white px-8 py-4 w-full h-auto md:hidden flex items-center justify-between">
          {/* logo */}
          <div className="flex justify-center items-center gap-x-2">
            <img src="/logo.png" alt="logo" className="w-10 object-cover" />
            <h1 className="font-bold text-xl">Shopping.</h1>
          </div>

          {/* icons */}
          <div className="flex items-center justify-center gap-x-6">
            <NavBarIcons />
            <Menu
              strokeWidth={1}
              className="active:scale-95 active:text-amber-600"
              onClick={() => {
                setShowMenu(true);
              }}
            />
          </div>
        </nav>

        {/* Side Bar / Panel */}
        {showMenu && (
          <section className="md:hidden relative flex justify-end">
            <div className="w-[70%] z-200 bg-white/30 backdrop-blur-sm h-screen fixed top-0 flex items-center justify-center">
              <div className="absolute top-2 right-4">
                <X
                  className="w-10 h-10"
                  strokeWidth={4}
                  onClick={() => {
                    setShowMenu(false);
                  }}
                />
              </div>

              {/* links */}
              <ul className="flex flex-col items-center justify-center gap-y-14 text-3xl font-semibold">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/collection">Collection</a>
                </li>
                <li>
                  <a href="/shop">Shop</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </section>
        )}
      </section>
    </>
  );
};

export default NavBar;
