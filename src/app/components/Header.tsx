'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSiteConfigStore } from '../../stores/siteConfigStore'

const Header: React.FC = () => {
  const {
    primaryColor,
    fontFamily,
    logoSrc,
    logoAlt,
    navLinks,
    loginText,
    cartItemCount,
  } = useSiteConfigStore()

  return (
    <header className="bg-white py-2" style={{ fontFamily }}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image src={logoSrc} alt={logoAlt} width={180} height={60} />
          </Link>
        </div>

        {/* Right Section: Login, Cart, Search */}
        <div className="flex flex-col w-full">
          <div className="flex justify-end items-center space-x-6 mb-2">
            <Link
              href="/login"
              className="hover:text-[#34A853]"
              style={{ color: primaryColor }}
            >
              {loginText}
            </Link>
            <div className="relative">
              <Link
                href="/cart"
                className="hover:text-[#34A853]"
                style={{ color: primaryColor }}
              >
                <svg
                  className="w-6 h-6 inline-block"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l1.6 8.4a1 1 0 001 .6h5.8a1 1 0 001-.6L17 13M9 13V5a2 2 0 012-2h2a2 2 0 012 2v8m-5 0h6"
                  ></path>
                </svg>
                {cartItemCount > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-gray-800 bg-gray-100 rounded-full">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            </div>
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
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>

          {/* Navegación */}
          <div className="flex justify-end space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-black hover:text-gray-900 flex items-center"
              >
                {link.icon && (
                  <img
                    src={link.icon}
                    alt={link.label}
                    className="inline-block mr-2 w-5 h-5"
                  />
                )}
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
