"use client"
import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-deadpink">Контакты</h2>
        <div className="text-center">
          <p className="mb-8 text-gray-300 leading-relaxed">
            Если у вас есть вопросы или предложения, свяжитесь с нами по электронной почте.
            lookreciuspin@gmail.com
            takeacutter@gmail.com

          </p>
          <a
            href="mailto:lookreciuspin@gmail.com"

            className="bg-deadpink hover:bg-pink-700 text-white px-4 py-2 rounded-md"
          >
            Написать нам
          </a>
        </div>
      </div>
    </section>
  )
}
