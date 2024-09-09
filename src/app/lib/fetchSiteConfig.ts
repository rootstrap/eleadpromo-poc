import axios from 'axios'

export const fetchSiteConfig = async (origin: string) => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL

    // Imprimir el valor de 'origin' en la consola
    console.log('Fetching site config with Origin:', origin)
    console.log('Fetching site config from:', `${apiUrl}/settings`)

    const { data } = await axios.get(`${apiUrl}/settings`, {
      headers: {
        'Content-Type': 'application/json',
        Origin: origin, // Enviar el encabezado Origin al backend
      },
    })

    return data
  } catch (error) {
    console.error('Error fetching site config:', error)
    throw new Error('Failed to fetch site configuration')
  }
}
