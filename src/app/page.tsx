'use client'

import Image from 'next/image'
import { useProducts } from './hooks/useProducts'

export default function Home() {
  const { data: products, isLoading, error } = useProducts()

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error loading products</p>

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="grid text-center w-full max-w-5xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products?.map((product: any) => (
          <div
            key={product.id}
            className="group rounded-lg border border-gray-200 p-5 transition-colors hover:border-gray-300 hover:bg-gray-100"
          >
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={100}
              height={100}
              className="mb-4"
            />
            <h2 className="mb-3 text-2xl font-semibold">{product.title}</h2>
            <p className="text-sm opacity-75">{product.description}</p>
            <p className="text-sm font-bold mt-2">${product.price}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
