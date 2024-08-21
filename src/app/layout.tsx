'use client'

import { QueryClient, QueryClientProvider } from 'react-query'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { useFetchSiteConfig } from './hooks/useFetchSiteConfig'

const queryClient = new QueryClient()

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Content>{children}</Content>
      </body>
    </html>
  </QueryClientProvider>
)

const Content: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoading, error } = useFetchSiteConfig()

  if (isLoading) return <Message message="Loading site configurations..." />
  if (error) return <Message message="Error loading site configurations" />

  return (
    <>
      <Header />
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

export default Layout
