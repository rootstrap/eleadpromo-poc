// 'use client'

// import Image from 'next/image'
// import Link from 'next/link'
// import { useProducts } from './hooks/useProducts'
// import Carousel from './components/Carousel'
// import { useState } from 'react'

// export default function Home() {
//   const { data: products, isLoading, error } = useProducts()

//   const [currentPage, setCurrentPage] = useState(1)
//   const itemsPerPage = 8

//   if (isLoading) return <p>Loading...</p>
//   if (error) return <p>Error loading products</p>

//   const indexOfLastItem = currentPage * itemsPerPage
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage
//   const currentItems = products.slice(indexOfFirstItem, indexOfLastItem)

//   const totalPages = Math.ceil(products.length / itemsPerPage)

//   const goToNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1)
//     }
//   }

//   const goToPreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1)
//     }
//   }

//   return (
//     <div className="flex flex-col items-center justify-center p-24 min-h-screen">
//       <Carousel />

//       <h2 className="text-3xl font-semibold mb-6">New Favorites</h2>

//       <div className="grid text-center w-full max-w-5xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {currentItems?.map((product: any) => (
//           <Link href={`/product/${product.id}`} key={product.id}>
//             <div className="group rounded-lg border border-gray-200 p-5 transition-colors hover:border-gray-300 hover:bg-gray-100 cursor-pointer">
//               <Image
//                 src={product.images[0]}
//                 alt={product.title}
//                 width={200}
//                 height={200}
//                 className="mb-4"
//               />
//               <h2 className="mb-3 text-2xl font-semibold">{product.title}</h2>
//               <p className="text-sm opacity-75">{product.description}</p>
//               <p className="text-sm font-bold mt-2">${product.price}</p>
//             </div>
//           </Link>
//         ))}
//       </div>

//       <div className="flex justify-between mt-4">
//         <button
//           onClick={goToPreviousPage}
//           disabled={currentPage === 1}
//           className="px-4 py-2 bg-gray-300 rounded disabled:bg-gray-200"
//         >
//           Previous
//         </button>

//         <p className="mx-4">
//           Page {currentPage} of {totalPages}
//         </p>

//         <button
//           onClick={goToNextPage}
//           disabled={currentPage === totalPages}
//           className="px-4 py-2 bg-gray-300 rounded disabled:bg-gray-200"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   )
// }
export default function HelloWorld() {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  )
}
