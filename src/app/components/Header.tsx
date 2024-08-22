'use client'

import React from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  const cartItemCount = 0
  const navLinks = [
    { label: 'Shop', href: '/shop' },
    { label: 'More Product Options', href: '/more-product-options' },
    { label: 'Gift Codes', href: '/gift-codes' },
    { label: 'Return Policy', href: '/return-policy' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-white py-2 font-main">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex-shrink-0">
          <div className="logo"></div>{' '}
          {/* Usando la clase logo para el fondo de la imagen */}
        </Link>

        <div className="flex flex-col w-full">
          <div className="flex justify-end items-center space-x-6 mb-2">
            <Link
              href="/login"
              className="text-primary hover:text-primary-dark"
            >
              LOGIN
            </Link>
            <Link
              href="/cart"
              className="relative text-primary hover:text-primary-dark"
            >
              <svg
                className="w-6 h-6 inline-block"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l1.6 8.4a1 1 0 001 .6h5.8a1 1 0 001-.6L17 13M9 13V5a2 2 0 012-2h2a2 2 0 012 2v8m-5 0h6"
                />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 px-2 py-1 text-xs font-bold text-gray-800 bg-gray-100 rounded-full">
                  {cartItemCount}
                </span>
              )}
            </Link>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <input
                type="text"
                placeholder="Search by item# or Keyword"
                className="outline-none text-black"
              />
              <svg
                className="w-5 h-5 ml-2 text-gray-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          <nav className="flex justify-end space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-black hover:text-gray-900 flex items-center"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
