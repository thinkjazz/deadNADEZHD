"use client"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function AboutGroup() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showPhilosophy, setShowPhilosophy] = useState(false)
  const images = [
    "/photo_mask.jpg",
    "/photo.jpg"
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section id="history" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-deadpink">О Группе</h2>

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h4 className="text-2xl font-bold mb-4 text-deademerald">История Деда Надежда</h4>
            <p className="mb-6 text-gray-300 leading-relaxed">
            Дед Надежд появились как музыкальный мем, который неожиданно обрел плоть и начал жить собственной жизнью. Dead Надежд Мкадышев – это метамодернистский ответ на происходящее в российской метал-сцене, где мы балансируем между искренностью и иронией, между серьезностью и абсурдом.
            </p>
            <p className="mb-8 text-gray-300 leading-relaxed">
              В каждой песне мы стремимся передать особую энергию и эмоции,
              создавая уникальное звучание на стыке различных направлений тяжелой музыки.
            </p>
            <Button
              className="bg-deadpink hover:bg-deademerald text-white"
              onClick={() => setShowPhilosophy(!showPhilosophy)}
            >
              Узнать больше
            </Button>

            {showPhilosophy && (
              <div>
                <h4 className="text-2xl font-bold mt-4 mb-4 text-deadpink"> Философия  Деда Надежда</h4>
              <p className="mt-8 text-gray-300 leading-relaxed">
                Мы верим в то, что современная метал-сцена нуждается в хорошей дозе самоиронии.
                Слишком много фальши, пафоса и пустых понтов – пора это менять.    </p>
                <p className="mb-8 text-gray-300 leading-relaxed">
                Dead Надежд Мкадышев – это музыкальная терапия для тех, кто устал от претенциозности и хочет честности, даже если эта честность завернута в абсурдный овощной слой.
                Наши тексты – это сплав социальной критики и агрессивной пропаганды здорового образа жизни. Мы не боимся быть непонятыми, потому что непонимание – это часть нашей концепции. Каждый найдет в наших песнях то, что ищет: кто-то услышит глубокую метафору, кто-то посмеется над абсурдом, а кто-то просто начинает есть больше овощей.
               </p></div>
            )}
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <div className="relative w-full h-[400px]">
              {images.map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`Фото группы ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                  className={`rounded-lg shadow-lg transition-opacity duration-500 object-cover ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>

            <div className="flex mt-4">
              <button onClick={prevSlide} className="px-4 py-2 bg-deadpink hover:bg-deademerald text-white rounded-l-lg"> Туда </button>
              <button onClick={nextSlide} className="px-4 py-2  bg-deadpink hover:bg-deademerald text-white rounded-r-lg"> Сюда </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}