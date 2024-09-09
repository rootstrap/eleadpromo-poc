'use client'

import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { fetchSiteConfig } from '../lib/fetchSiteConfig'

// Función para convertir camelCase a kebab-case
const camelToKebab = (str: string) =>
  str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()

const updateCSSVariables = (data: Record<string, string>) => {
  for (const [key, value] of Object.entries(data)) {
    const cssVariable = `--${camelToKebab(key)}`

    let cssValue: string | null = null
    if (typeof value === 'string') {
      cssValue = key === 'logo' ? `url(${value})` : value
    }

    if (cssValue) {
      document.documentElement.style.setProperty(cssVariable, cssValue)
    }
  }
}

export default function ClientSideConfigUpdater({
  initialConfig,
}: {
  initialConfig: any
}) {
  // // // Usar React Query para obtener y revalidar las configuraciones cada 5 minutos
  // // const { data, error, isLoading } = useQuery('siteConfig', fetchSiteConfig, {
  // //   initialData: initialConfig,
  // //   staleTime: 0,
  // //   refetchInterval: 300000, // 5 minutos
  // //   refetchOnWindowFocus: true,
  // // });

  // // useEffect(() => {
  // //   if (data && typeof data === 'object') {
  // //     updateCSSVariables(data);
  // //   }
  // }, [data]);

  return null
}
