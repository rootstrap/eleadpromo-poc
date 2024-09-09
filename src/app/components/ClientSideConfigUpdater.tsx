'use client'

import { useFetchSiteConfig } from '../hooks/useFetchSiteConfig'

export default function ClientSideConfigUpdater({
  initialConfig,
}: {
  initialConfig: any
}) {
  // Usar el hook personalizado para obtener las configuraciones
  const { data, error, isLoading } = useFetchSiteConfig()

  // Verificar si los datos están disponibles, si no usa los iniciales
  if (isLoading) {
    console.log('Loading site configuration...')
  }

  if (error) {
    console.error('Error fetching site configuration:', error)
  }

  return null
}
