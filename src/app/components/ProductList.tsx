'use client'

import { useState } from 'react'
import ProductsContent from './ProductContent'

export default function ProductList({
  products,
  origin,
}: {
  products: any[]
  origin: string
}) {
  return <ProductsContent initialProducts={products} origin={origin} />
}
