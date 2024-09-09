import axios from 'axios'

export const fetchProducts = async (origin: string) => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL

    const { data } = await axios.get(`${apiUrl}/products`, {
      headers: {
        Origin: origin,
      },
    })

    if (Array.isArray(data)) {
      return data
    }

    return data.products || []
  } catch (error) {
    console.error('Error fetching products:', error)
    throw new Error('Failed to fetch products')
  }
}
