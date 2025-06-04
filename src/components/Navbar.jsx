import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const linkClass =
    'text-base font-medium text-gray-700 hover:text-green-600 transition px-3 py-2';
  const activeClass = 'border-b-2 border-green-500';

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex gap-6 items-center">
      <NavLink to="/" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ''}`}>Home</NavLink>
      <NavLink to="/dashboard" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ''}`}>Dashboard</NavLink>
      <NavLink to="/marketplace" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ''}`}>Marketplace</NavLink>
      <NavLink to="/about" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ''}`}>About</NavLink>
    </nav>
  );
}
