'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: 'mailto:sylviavirtualassistant93@gmail.com' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50 px-8 md:px-24 py-5">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-900">Sylvia</div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-900 hover:text-blue-600 duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-900"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Items */}
        <div
          className={clsx(
            'md:hidden flex flex-col mt-4 gap-4 transition-all duration-300 ease-in-out',
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 overflow-hidden opacity-0'
          )}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-900 hover:text-blue-600 font-medium px-2 py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
