import { useEffect } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSiteConfig = async () => {
  const { data } = await axios.get(
    'https://ba27-167-58-78-14.ngrok-free.app/settings'
  )
  return data
}

export const useFetchSiteConfig = () => {
  const { data, error, isLoading } = useQuery('siteConfig', fetchSiteConfig)

  useEffect(() => {
    if (data) {
      // Inyectar las variables CSS globalmente
      document.documentElement.style.setProperty(
        '--primary-color',
        data.primaryColor
      )
      document.documentElement.style.setProperty(
        '--secondary-color',
        data.secondaryColor
      )
      document.documentElement.style.setProperty(
        '--font-family',
        data.fontFamily
      )
      document.documentElement.style.setProperty('--font-size', data.fontSize)
      document.documentElement.style.setProperty(
        '--logo-src',
        `url(${data.logoSrc})`
      )
    }
  }, [data])

  return { isLoading, error }
}
