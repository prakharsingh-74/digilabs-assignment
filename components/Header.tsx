// components/Header.tsx
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#2B63D9] py-4">
      <div className="container mx-auto flex h-12 items-center px-6">
        {/* Logo with reduced right margin */}
        <Link href="/" className="flex items-center mr-8"> {/* Reduced from mr-10 */}
          <div className="relative h-8 w-32">
            <Image
              src="/images/Lookscout.png"
              alt="Lookscout Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Navigation moved closer */}
        <nav className="hidden md:flex items-center space-x-7 ml-3"> {/* Reduced space between items and left margin */}
          <Link href="/" className="text-sm font-medium text-white hover:text-gray-200 transition-colors">
            Home
          </Link>
          <Link href="/products" className="text-sm font-medium text-white hover:text-gray-200 transition-colors">
            Our Products
          </Link>
          <div className="flex items-center">
            <Link href="/resources" className="text-sm font-medium text-white hover:text-gray-200 transition-colors">
              Resources
            </Link>
            <ChevronDown className="w-4 h-4 ml-1 text-white" />
          </div>
          <Link href="/contacts" className="text-sm font-medium text-white hover:text-gray-200 transition-colors">
            Contacts
          </Link>
        </nav>

        {/* Auth Buttons pushed to right */}
        <div className="flex items-center space-x-4 ml-auto">
          <Link 
            href="/login" 
            className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-white hover:text-gray-200 transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="inline-flex items-center rounded-md bg-[#437EF7] px-4 py-2 text-sm font-medium text-white transition-colors"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;