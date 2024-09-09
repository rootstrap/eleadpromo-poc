import { ReactNode } from 'react'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { fetchSiteConfig } from './lib/fetchSiteConfig'
import ReactQueryProvider from './ReactQueryProvider'
import ClientSideConfigUpdater from './components/ClientSideConfigUpdater'
import { headers } from 'next/headers' // Importa la función headers

// Función para convertir camelCase a kebab-case en el servidor
const camelToKebab = (str: string) =>
  str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()

// Este es el layout del servidor
export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  // Obtener los encabezados del servidor
  const requestHeaders = headers()
  const origin = requestHeaders.get('origin') || requestHeaders.get('host')

  // Verificar que el 'origin' no sea null
  if (!origin) {
    throw new Error('No host or origin header found')
  }

  // Imprimir el origin para depuración en el servidor de Node.js
  console.log('Origin/Host detected on the server:', origin)

  // Obtener los datos del servidor usando el origin como parámetro
  const siteConfig = await fetchSiteConfig(`http://${origin}`)

  // Generar variables CSS en el servidor
  const cssVariables = Object.entries(siteConfig || {}).reduce(
    (acc, [key, value]) => {
      if (typeof value === 'string') {
        const cssValue = key === 'logo' ? `url(${value})` : value
        const cssVariable = `--${camelToKebab(key)}`
        acc[cssVariable] = cssValue
      }
      return acc
    },
    {} as Record<string, string>
  )

  return (
    <html lang="en">
      <head>
        {/* Aplicar estilos inline generados en el servidor */}
        <style>
          {Object.entries(cssVariables).map(
            ([key, value]) => `${key}: ${value};`
          )}
        </style>
      </head>
      <body className="min-h-screen flex flex-col">
        <ReactQueryProvider>
          {/* Este componente actualizará las configuraciones en el cliente usando React Query */}
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
