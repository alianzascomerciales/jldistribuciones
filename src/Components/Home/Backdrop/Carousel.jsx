import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'

import { GrCaretPrevious, GrCaretNext } from 'react-icons/gr'
import Image from 'next/image'

const CarouselBackdrop = () => {
  const data = [
    { id: 1, imagen: '/img-empresas/logo01.webp', alt: 'Grupo Budeguer' },
    { id: 2, imagen: '/img-empresas/logo02.webp', alt: 'YPF' },
    { id: 3, imagen: '/img-empresas/logo03.webp', alt: 'Fargo' },
    { id: 4, imagen: '/img-empresas/logo04.webp', alt: 'Tradelli Branca' },
    { id: 5, imagen: '/img-empresas/logo05.webp', alt: 'Mexichem' },
    { id: 6, imagen: '/img-empresas/logo06.webp', alt: 'Danone' },
    { id: 7, imagen: '/img-empresas/logo07.webp', alt: 'Mondelez' },
    { id: 8, imagen: '/img-empresas/logo08.webp', alt: 'Molinos' },
    { id: 9, imagen: '/img-empresas/logo09.webp', alt: 'TOTAL' },
    { id: 10, imagen: '/img-empresas/logo10.webp', alt: 'Rotoplas' },
    { id: 11, imagen: '/img-empresas/logo11.webp', alt: 'Agroimpulso' },
    { id: 12, imagen: '/img-empresas/logo12.webp', alt: 'Grupo Autopartes' },
    { id: 13, imagen: '/img-empresas/logo13.webp', alt: 'CMZ Citrus' },
    { id: 14, imagen: '/img-empresas/logo14.webp', alt: 'Tassara' },
    { id: 15, imagen: '/img-empresas/logo15.webp', alt: 'SURFACTAN' },
  ]
  const swiperRef = useRef(null)
  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext()
    }
  }
  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev()
    }
  }
  return (
    <div className='d-flex justify-content-between'>
      <div className='prev-button alignVert' onClick={goPrev}>
        <GrCaretPrevious className='sizeIconSlider me-3' />
      </div>

      <Swiper
        ref={swiperRef}
        freeMode={true}
        slidesPerView={1}
        grabCursor={true}
        className={`mySwipper`}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          100: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          300: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          500: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {data?.map((d, i) => (
          <SwiperSlide key={i}>
            {/* <TarjetaNoticias data={d} /> */}
            <div className='cont-img-slider-backdrop'>
              <Image
                quality={100}
                src={d.imagen}
                alt={d.alt}
                priority
                className='img-slider-backdrop'
                fill
                style={{ objectFit: 'contain' }}
                // sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='next-button alignVert' onClick={goNext}>
        <GrCaretNext className='sizeIconSlider ms-3' />
      </div>
    </div>
  )
}

export default CarouselBackdrop
