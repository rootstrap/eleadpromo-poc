'use client'

import React, { useEffect } from 'react'
import './globals.css'
import Header from './components/Header'
import { useSiteConfigStore } from '../stores/siteConfigStore'

const App: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const setConfig = useSiteConfigStore((state) => state.setConfig)

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch(
          'https://r1q9p74z-3000.brs.devtunnels.ms/settings'
        )
        const data = await response.json()

        setConfig({
          primaryColor: data.primaryColor,
          secondaryColor: data.secondaryColor,
          fontFamily: data.fontFamily,
          fontSize: data.fontSize,
          logoSrc: data.logo,
          navLinks: data.navLinks,
        })
      } catch (error) {
        console.error('Error fetching site configuration:', error)
      }
    }

    fetchConfig()
  }, [setConfig])

  return (
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
}

export default App
