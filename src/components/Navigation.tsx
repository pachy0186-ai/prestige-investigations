'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import TopBar from './TopBar';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/faq', label: 'FAQ' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <TopBar />
      <nav className="bg-prestige-black sticky top-0 z-40 border-b border-white/10">
        <div className="container max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/prestige-logo.jpeg"
                alt="Prestige Executive Investigations LLC"
                width={60}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-prestige-gold transition-colors duration-200 font-medium relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-prestige-gold group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white hover:text-prestige-gold transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div 
            className="mobile-menu-overlay open"
            onClick={closeMenu}
          />
        )}

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <Image
                src="/images/prestige_banner.webp"
                alt="Prestige Executive Investigations LLC"
                width={150}
                height={30}
                className="h-6 w-auto"
              />
              <button
                onClick={closeMenu}
                className="text-white hover:text-prestige-gold transition-colors p-2"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="block text-white hover:text-prestige-gold transition-colors duration-200 font-medium py-3 text-lg border-b border-white/10"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <a 
                href="tel:786-556-3313"
                className="block text-prestige-gold font-semibold text-lg mb-2"
              >
                786-556-3313
              </a>
              <a 
                href="mailto:Prestigeinvestigations@outlook.com"
                className="block text-gray-300 text-sm"
              >
                Prestigeinvestigations@outlook.com
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
