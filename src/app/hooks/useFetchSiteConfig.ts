import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { useSiteConfigStore } from '../stores/siteConfigStore'

const fetchSiteConfig = async () => {
  const { data } = await axios.get(
    'https://r1q9p74z-3000.brs.devtunnels.ms/settings'
  )
  return data
}

export const useFetchSiteConfig = () => {
  const setConfig = useSiteConfigStore((state) => state.setConfig)

  const { data, error, isLoading } = useQuery('siteConfig', fetchSiteConfig)

  useEffect(() => {
    if (data) {
      setConfig(data)
    }
  }, [data, setConfig])

  return { isLoading, error }
}
