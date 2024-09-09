'use client'

import { useEffect } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const camelToKebab = (str: string) =>
  str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()

const fetchSiteConfig = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL
  const { data } = await axios.get(`${apiUrl}/settings`)
  return data
}

export default function ClientSideConfigUpdater({
  initialConfig,
}: {
  initialConfig: any
}) {
  const { data, error, isLoading } = useQuery('siteConfig', fetchSiteConfig, {
    staleTime: 0,
    refetchInterval: 300000,
    refetchOnWindowFocus: true,
    initialData: initialConfig,
  })

  useEffect(() => {
    const config = data || initialConfig
    if (config && typeof config === 'object') {
      for (const [key, value] of Object.entries(config)) {
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
  }, [data, initialConfig])

  if (isLoading) {
    console.log('Loading site configuration...')
  }

  if (error) {
    console.error('Error fetching site configuration:', error)
  }

  return null
}
