'use client'

import React from 'react'
import './globals.css'
import Header from './components/Header'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang="en">
    <body className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-4">{children}</main>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-6">
          <p>© 2024 My E-Commerce. All rights reserved.</p>
        </div>
      </footer>
    </body>
  </html>
)

export default Layout
