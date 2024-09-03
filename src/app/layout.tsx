'use client'

import { QueryClient, QueryClientProvider } from 'react-query'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { ReactNode } from 'react'
import { useFetchSiteConfig } from './hooks/useFetchSiteConfig'

const queryClient = new QueryClient()

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <QueryClientProvider client={queryClient}>
          <Content>{children}</Content>
        </QueryClientProvider>
      </body>
    </html>
  )
}

const Content: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoading, error, data } = useFetchSiteConfig()

  // if (isLoading) return <Message message="Loading site configurations..." />
  // if (error) return <Message message="Error loading site configurations" />

  const navLinks = data?.navLinks || []

  return (
    <>
      <Header navLinks={navLinks} />
      <main className="flex-1 container mx-auto px-6 py-4">{children}</main>
      <Footer />
    </>
  )
}

const Message: React.FC<{ message: string }> = ({ message }) => (
  <div className="flex-1 container mx-auto px-6 py-4 text-center">
    {message}
  </div>
)
