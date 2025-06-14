"use client";

import { FC, useState } from "react";
import { FiGithub, FiTwitter, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full flex justify-between items-center px-6 py-4 md:px-12 md:py-6 bg-white shadow-sm sticky top-0 z-50">
      <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
        Prolific<span className="text-primary">Dev</span>
      </h1>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        <a href="#" className="text-gray-600 hover:text-primary transition">About</a>
        <a href="#" className="text-gray-600 hover:text-primary transition">Projects</a>
        <a href="#" className="text-gray-600 hover:text-primary transition">Pricing</a>
        <a href="#" className="text-gray-600 hover:text-primary transition">Contact</a>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <a href="#" className="text-gray-600 hover:text-primary transition">
          <FiGithub size={20} />
        </a>
        <a href="#" className="text-gray-600 hover:text-primary transition">
          <FiTwitter size={20} />
        </a>
        <a href="#" className="text-gray-600 hover:text-primary transition">
          <FiLinkedin size={20} />
        </a>

        <Link href="#contact">
          <button className="ml-4 px-4 py-2 bg-primary text-white text-sm rounded-full shadow hover:shadow-md transition-all">
            Book a Call
          </button>
        </Link>
      </div>

      {/* Hamburger Menu Button (Mobile) */}
      <button
        className="md:hidden text-gray-800 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col px-6 py-4 z-40 md:hidden">
          <a href="#" className="py-2 text-gray-700 hover:text-primary transition">About</a>
          <a href="#" className="py-2 text-gray-700 hover:text-primary transition">Projects</a>
          <a href="#" className="py-2 text-gray-700 hover:text-primary transition">Pricing</a>
          <a href="#" className="py-2 text-gray-700 hover:text-primary transition">Contact</a>

          <div className="flex gap-4 mt-4">
            <a href="#" className="text-gray-600 hover:text-primary transition">
              <FiGithub size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition">
              <FiTwitter size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition">
              <FiLinkedin size={20} />
            </a>
          </div>

          <Link href="#contact">
            <button className="mt-4 w-full px-4 py-2 bg-primary text-white text-sm rounded-full shadow hover:shadow-md transition-all">
              Book a Call
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
