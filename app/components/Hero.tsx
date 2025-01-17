"use client"
import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const offset = window.pageYOffset
        parallaxRef.current.style.transform = `translateY(${offset * -0.5}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Фоновое изображение с параллакс эффектом */}
      <div ref={parallaxRef} className="absolute inset-0 z-0"
      style={{ willChange: 'transform',
        height: '190vh', // Увеличили высоту
        top: '-25vh'     // Сдвинули вверх для компенсации



       }}>
        <Image
          src="/parallax_bg.jpg"
          alt="Background"
          fill
          priority
          quality={100}
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Контент поверх фона */}
      <div className="relative z-10 text-center">
        <div className="relative h-32 md:h-48 mb-4">
        <h2 className="text-6xl md:text-8xl font-bold mb-4 text-white opacity-10 animate-pulse">
          ЖАТВА

        </h2>

        </div>
        <h4 className="text-2xl md:text-1xl mb-8 text-white">Первый в мире огородкор</h4>
        <Button size="lg" className="bg-deadpink hover:bg-deademerald text-white">
          <a href="#music">Слушать</a>
        </Button>
      </div>
    </section>
  )
}