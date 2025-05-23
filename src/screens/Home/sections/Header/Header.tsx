import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navigationItems = [
  { label: "Pricing", href: "/#pricing" },
  { label: "Team", href: "/team" },
  { label: "Resellers", href: "/resellers" },
  { label: "Playlists", href: "/playlists" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];

export const Header = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (href: string) => {
    if (href.startsWith('/#')) {
      return location.pathname === '/' && location.hash === href.substring(1);
    }
    return location.pathname === href;
  };

  return (
    <header className="fixed z-50 top-0 left-0 w-full bg-[#151517] h-[105px] px-4 sm:px-20 py-[30px]">
      <nav className="max-w-[1280px] mx-auto flex items-center justify-between">
        <Link to="/" className="block">
          <img
            className="w-[51px] md:w-[77px] h-[30px] md:h-[50px]"
            alt="Main Logo"
            src="/src/assets/main-logo.svg"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center md:gap-[35px] lg:gap-[70px]">
          {navigationItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className={`[font-family:'Maven_Pro',Helvetica] text-base transition-colors ${
                  isActive(item.href)
                    ? 'text-[#e56db1] font-semibold'
                    : 'text-[#989898] hover:text-[#e56db1]'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden bg-transparent border-none flex flex-col justify-center items-center w-10 h-10"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="relative w-[30px] h-[20px] cursor-pointer">
            <span className={`absolute top-0 left-0 w-[30px] h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'bar-1' : ''}`}></span>
            <span className={`absolute top-[9px] left-0 w-[30px] h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`absolute bottom-0 left-0 w-[30px] h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'bar-3' : ''}`}></span>
          </div>
        </button>

        {/* Mobile Navigation */}
        <div className={`fixed top-[105px] h-[calc(100vh-105px)] left-0 w-full bg-[#151517] transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <ul className="flex flex-col items-between justify-between h-[70%] px-4 sm:px-20 py-4">
            {navigationItems.map((item) => (
              <li key={item.label} className="w-full">
                <Link
                  to={item.href}
                  className={`block py-4 [font-family:'Maven_Pro',Helvetica] text-base transition-colors ${
                    isActive(item.href)
                      ? 'text-[#e56db1] font-semibold'
                      : 'text-[#989898] hover:text-[#e56db1]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};