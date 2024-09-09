import { ReactNode } from 'react'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { fetchSiteConfig } from './lib/fetchSiteConfig'
import ReactQueryProvider from './ReactQueryProvider'
import ClientSideConfigUpdater from './components/ClientSideConfigUpdater'
import { headers } from 'next/headers'

const camelToKebab = (str: string) =>
  str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const requestHeaders = headers()
  const origin = requestHeaders.get('origin') || requestHeaders.get('host')

  if (!origin) {
    throw new Error('No host or origin header found')
  }

  console.log('Origin/Host detected on the server:', origin)

  const siteConfig = await fetchSiteConfig(`http://${origin}`)

  const cssVariables = Object.entries(siteConfig || {}).reduce(
    (acc, [key, value]) => {
      if (typeof value === 'string') {
        const cssVariable = `--${camelToKebab(key)}`
        acc[cssVariable] = value
      }
      return acc
    },
    {} as Record<string, string>
  )

  const cssVariablesString = Object.entries(cssVariables)
    .map(([key, value]) => `${key}: ${value};`)
    .join(' ')

  return (
    <html lang="en">
      <head>
        <style>{`:root { ${cssVariablesString} }`}</style>
      </head>
      <body className="min-h-screen flex flex-col">
        <ReactQueryProvider>
          <ClientSideConfigUpdater initialConfig={siteConfig} />
          <Content siteConfig={siteConfig}>{children}</Content>
        </ReactQueryProvider>
      </body>
    </html>
  )
}

const Content: React.FC<{ children: React.ReactNode; siteConfig: any }> = ({
  children,
  siteConfig,
}) => {
  const navLinks = siteConfig?.navLinks || []

  return (
    <>
      <Header navLinks={navLinks} />
      <main className="flex-1 container mx-auto px-6 py-4">{children}</main>
      <Footer />
    </>
  )
}
