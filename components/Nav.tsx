'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-28 py-2">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <img 
                src="/vacc-logo.png" 
                alt="VACC Logo" 
                className="h-24 w-auto"
                onError={(e) => {
                  // Fallback to text if logo doesn't exist
                  e.currentTarget.style.display = 'none';
                  const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                  if (nextElement) {
                    nextElement.style.display = 'block';
                  }
                }}
              />
              <div style={{display: 'none'}}>
                <span className="text-2xl font-bold text-white">VACC</span>
                <span className="ml-2 text-sm text-white/80">One Welfare Social Workers</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-white/80 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link href="/vet-resources" className="text-white hover:text-white/80 px-3 py-2 text-sm font-medium">
              Veterinary Teams
            </Link>
            <Link href="/business-resources" className="text-white hover:text-white/80 px-3 py-2 text-sm font-medium">
              Business Owners
            </Link>
            <Link href="/companions" className="text-white hover:text-white/80 px-3 py-2 text-sm font-medium">
              Animal Companions
            </Link>
            <Link href="/evidence/pilot" className="text-white hover:text-white/80 px-3 py-2 text-sm font-medium">
              Evidence & Research
            </Link>
            <Link href="/register" className="bg-white text-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
              Get Involved
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-white/80 focus:outline-none focus:text-white/80"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/80 backdrop-blur-sm">
              <Link href="/" className="text-white hover:text-white/80 block px-3 py-2 text-base font-medium">
                Home
              </Link>
              <Link href="/vet-resources" className="text-white hover:text-white/80 block px-3 py-2 text-base font-medium">
                Veterinary Teams
              </Link>
              <Link href="/business-resources" className="text-white hover:text-white/80 block px-3 py-2 text-base font-medium">
                Business Owners
              </Link>
              <Link href="/companions" className="text-white hover:text-white/80 block px-3 py-2 text-base font-medium">
                Animal Companions
              </Link>
              <Link href="/evidence/pilot" className="text-white hover:text-white/80 block px-3 py-2 text-base font-medium">
                Evidence & Research
              </Link>
              <Link href="/register" className="bg-white text-blue-600 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">
                Get Involved
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
