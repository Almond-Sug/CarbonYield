import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Marketplace', path: '/marketplace' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 px-6 py-5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition">
          <img
            src="/Logo_Clear.png"
            alt="CarbonYield Logo"
            className="w-9 h-9 object-contain"
          />
          <span className="text-xl sm:text-2xl font-bold text-green-700 tracking-tight font-dm-sans">
            CarbonYield
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-6 items-center">
          {navItems.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                `text-base sm:text-lg font-medium font-inter transition border-b-2 border-transparent hover:border-green-500 hover:text-green-600 pb-1 ${
                  isActive ? 'text-green-700 border-green-500' : 'text-gray-700'
                }`
              }
            >
              {name}
            </NavLink>
          ))}
          <Link
            to="/login"
            className="ml-4 text-sm sm:text-base font-semibold text-green-700 border border-green-600 rounded-md px-4 py-2 hover:bg-green-50 transition"
          >
            Log In
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-green-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pt-4 pb-6 space-y-4 bg-white shadow-md">
          {navItems.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block text-base font-medium font-inter transition border-l-4 pl-3 ${
                  isActive ? 'text-green-700 border-green-500' : 'text-gray-700 border-transparent hover:border-green-500 hover:text-green-600'
                }`
              }
            >
              {name}
            </NavLink>
          ))}
          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="inline-block mt-2 text-sm font-semibold text-green-700 border border-green-600 rounded-md px-4 py-2 hover:bg-green-50 transition"
          >
            Log In
          </Link>
        </div>
      )}
    </nav>
  );
}
