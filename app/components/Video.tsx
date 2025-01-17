"use client"
import React from 'react'

export default function Video() {
  const videos = [
    "https://www.youtube.com/embed/v65erv3SwH0",
    "https://www.youtube.com/embed/n---x-3NpfA",
    "https://www.youtube.com/embed/bgAV9yZJB38"
  ]

  return (
<section id="videos" className="py-20 bg-zinc-900">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold mb-12 text-center text-deadpink">Видеоклипы</h2>
    <div className="flex flex-col items-center gap-8">
      {videos.map((video, index) => (
        <div key={index} className="w-full max-w-4xl">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* 16:9 = 56.25% */}
            <iframe
              src={video}
              title={`YouTube video player ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  )
}
