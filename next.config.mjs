// next.config.mjs
const config = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
        port: '', // Optional: You can specify a port if needed, leave it empty for default
        pathname: '/products/images/**', // Optional: Specify the path pattern
      },
      {
        protocol: 'https',
        hostname: 'loremflickr.com',
        port: '',
        pathname: '/**', // Adjust this to match the specific path pattern for loremflickr.com if needed
      },
    ],
  },
}

export default config
