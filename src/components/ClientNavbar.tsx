'use client'

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, Menu, Search, X } from 'lucide-react';
import Link from 'next/link';
import { navItems } from './Navbar';

const ClientNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const handleMouseEnter = (name: string) => {
    if (window.innerWidth >= 768) { // Only on desktop
      setActiveDropdown(name);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) { // Only on desktop
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Update parent nav element based on scroll state
  useEffect(() => {
    if (scrolled) {
      document.querySelector('nav')?.classList.remove('bg-[#6500AB]');
      document.querySelector('nav')?.classList.add('bg-black/60', 'backdrop-blur-lg', 'shadow-md');
    } else {
      document.querySelector('nav')?.classList.add('bg-[#6500AB]');
      document.querySelector('nav')?.classList.remove('bg-black/60', 'backdrop-blur-lg', 'shadow-md');
    }
  }, [scrolled]);

  return (
    <>
      {/* Desktop navigation */}
      <div className="hidden md:flex md:items-center md:space-x-6">
        {navItems.map((item) => (
          <div 
            key={item.name} 
            className="relative group"
            onMouseEnter={() => item.subItems && handleMouseEnter(item.name)}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => item.subItems && toggleDropdown(item.name)}
              className={cn(
                'px-3 py-2 rounded-md text-sm font-medium text-white hover:text-purple-ultralight transition-colors',
                'focus:outline-none flex items-center gap-1',
                activeDropdown === item.name && 'text-white'
              )}
            >
              {item.name}
              {item.subItems && <ChevronDown size={16} className={cn(
                'transition-transform',
                activeDropdown === item.name && 'rotate-180'
              )} />}
            </button>
            
            {item.subItems && (
              <div
                className={cn(
                  'absolute left-0 mt-2 w-64 rounded-lg shadow-lg',
                  'bg-white border border-gray-200',
                  'transition-all duration-200 ease-in-out transform origin-top-left',
                  activeDropdown === item.name ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
                )}
              >
                <div className="py-2">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-purple-ultralight/10 hover:text-purple"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
        
        {/* Search icon */}
        <button className="text-white hover:text-purple-ultralight transition-colors p-2">
          <Search size={20} />
        </button>
      </div>

      {/* Mobile menu button */}
      <div className="flex items-center md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-purple-ultralight focus:outline-none"
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden transition-all duration-300 ease-in-out overflow-hidden absolute left-0 right-0 top-20',
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className={cn(
          'glass px-2 pt-2 pb-3 space-y-1 sm:px-3',
          scrolled ? 'bg-black/60 backdrop-blur-lg' : 'bg-[#6500AB]'
        )}>
          {navItems.map((item) => (
            <div key={item.name}>
              <button
                onClick={() => item.subItems && toggleDropdown(item.name)}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-purple-dark/40 flex justify-between items-center"
              >
                {item.name}
                {item.subItems && (
                  <ChevronDown size={16} className={cn(
                    'transition-transform',
                    activeDropdown === item.name && 'rotate-180'
                  )} />
                )}
              </button>
              
              {item.subItems && (
                <div
                  className={cn(
                    'pl-4 space-y-1 overflow-hidden transition-all duration-200',
                    activeDropdown === item.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  )}
                >
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-3 py-2 rounded-md text-sm text-white hover:bg-purple-dark/40"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          {/* Search in mobile menu */}
          <div className="px-3 py-2">
            <button className="flex items-center text-white hover:text-purple-ultralight">
              <Search size={18} className="mr-2" />
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientNavbar;