import { useQuery } from 'react-query'
import axios from 'axios'

const fetchProducts = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/products`
  )
  return data.products
}

export const useProducts = (): any => {
  return useQuery('products', fetchProducts)
}
