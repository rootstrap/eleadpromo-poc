import { useEffect } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

// Función para convertir camelCase a kebab-case
const camelToKebab = (str: string) =>
  str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()

const fetchSiteConfig = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL
  const { data } = await axios.get(`${apiUrl}/settings`)
  return data
}

export const useFetchSiteConfig = () => {
  const { data, error, isLoading } = useQuery('siteConfig', fetchSiteConfig, {
    staleTime: 0,
    refetchInterval: 300000, // 5 minutos
    refetchOnWindowFocus: true,
  })

  useEffect(() => {
    if (data && typeof data === 'object') {
      for (const [key, value] of Object.entries(data)) {
        const cssVariable = `--${camelToKebab(key)}`

        // Garantizar que value es un string antes de asignarlo a cssValue
        let cssValue: string | null = null

        if (typeof value === 'string') {
          cssValue = key === 'logoSrc' ? `url(${value})` : value
        }

        if (cssValue) {
          document.documentElement.style.setProperty(cssVariable, cssValue)
        }
      }
    }
  }, [data])

  return { isLoading, error }
}
