"use client"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { FaSpotify } from "react-icons/fa"
import { SiApplemusic } from "react-icons/si"
import { FaYandex } from "react-icons/fa6"
import { FaSoundcloud } from "react-icons/fa"

export default function LatestRelease() {
  const [showMusicLinks, setShowMusicLinks] = useState(false);

  return (
    <section id="music" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-deadpink">Последние релизы</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <Image src="/harvest2024.jpg" alt="Album Cover" width={300} height={300} className="rounded-lg shadow-lg" />
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">ЖАТВА</h3>
            <p className="mb-4">Наш дебютный альбом</p>
            <Button
              className="bg-deadpink hover:bg-deademerald text-white"
              onClick={(e) => {
                e.preventDefault();
                setShowMusicLinks(true);
              }}
            >
              Слушай сейчас
            </Button>
            {showMusicLinks && (
              <div className="mt-8 flex justify-center space-x-4">
                <SocialLink href="https://open.spotify.com/artist/52Uv44sOUvftxYuihT93pP" icon={<FaSpotify />} />
                <SocialLink href="https://music.apple.com/ru/artist/dead-%D0%BD%D0%B0%D0%B4%D0%B5%D0%B6%D0%B4-%D0%BC%D0%BA%D0%B0%D0%B4%D1%8B%D1%88%D0%B5%D0%B2/1785139407" icon={<SiApplemusic />} />
                <SocialLink href="https://music.yandex.ru/artist/23435384" icon={<FaYandex />} />
                <SocialLink href="https://soundcloud.com" icon={<FaSoundcloud />} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-deadpink hover:text-deademerald transition-colors">
      {icon}
    </a>
  )
}



