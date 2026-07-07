"use client";

import Link from "next/link";
import { useState } from "react";

export default function HeroNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Properties", href: "/properties" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full py-6 px-8 absolute top-0 left-0 z-20">
      <div className="max-w-7xl mx-auto flex items-start justify-between">
        <Link
          href="/"
          className="text-2xl md:text-3xl font-black italic tracking-tight text-white"
        >
          ESTARA
        </Link>

        <div className="hidden md:flex flex-col items-end space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group relative text-base md:text-lg font-medium text-white overflow-hidden"
            >
              <span className="inline-block transform transition-transform duration-300 group-hover:-translate-y-full">
                {link.label}
              </span>
              <span className="absolute inset-0 inline-block transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                {link.label}
              </span>
            </Link>
          ))}
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-white"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4 px-8 pb-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
