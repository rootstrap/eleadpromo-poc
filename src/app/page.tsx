import { headers } from 'next/headers'
import axios from 'axios'
import ProductList from './components/ProductList'

export default async function Home() {
  const requestHeaders = headers()
  const origin = requestHeaders.get('origin') || requestHeaders.get('host')

  if (!origin) {
    throw new Error('No host or origin header found')
  }

  const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL
  const { data } = await axios.get(`${apiUrl}/products`, {
    headers: {
      Origin: origin,
    },
  })

  const products = Array.isArray(data) ? data : data.products || []

  return <ProductList products={products} origin={origin} />
}
