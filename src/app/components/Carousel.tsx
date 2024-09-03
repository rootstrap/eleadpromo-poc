import React from 'react'
import Image from 'next/image' // Importar el componente Image de Next.js

// Import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const Carousel = () => {
  const images = [
    '/carousel-1.png',
    '/carousel-2.png',
    '/carousel-3.png',
    '/carousel-4.png',
  ]

  return (
    <div className="w-full max-w-5xl mx-auto mb-10">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt={`Carousel Image ${index + 1}`}
              className="object-cover"
              width={1000} // Ajustar el ancho y alto según sea necesario
              height={400} // Ajustar el ancho y alto según sea necesario
              layout="responsive" // Usar layout responsive para adaptarse a diferentes tamaños de pantalla
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Carousel
