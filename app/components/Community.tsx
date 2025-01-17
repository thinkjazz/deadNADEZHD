"use client"
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Facebook, Instagram, Youtube,  } from 'lucide-react'
import { FaVk } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";
import { FaYandex } from "react-icons/fa6";
import { FaSoundcloud } from "react-icons/fa";
import { FaBandcamp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export default function Community() {
  const [showSocialLinks, setShowSocialLinks] = useState(false);

  return (
    <section id="community" className="py-20 bg-zinc-900 bg-[url('/community.jpg')] bg-cover bg-center">

      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-deadpink">Сообщество</h2>
        <div className="text-center">
          <p className="mb-8 text-gray-300 leading-relaxed">
            Присоединяйтесь к нашему сообществу, чтобы быть в курсе всех новостей и событий.
          </p>
          <Button
            asChild
            className="bg-deadpink hover:bg-deademerald text-white"
            onClick={() => setShowSocialLinks(true)}
          >
            <a href="#"
              onClick={(e) => e.preventDefault()}
              rel="noopener noreferrer">
              Присоединиться к сообществу
            </a>
          </Button>
          {showSocialLinks && (
            <div className="mt-8 flex justify-center space-x-4">
              <SocialLink href="https://facebook.com" icon={<Facebook />} />
              <SocialLink href="https://x.com" icon={<FaXTwitter />} />
              <SocialLink href="https://instagram.com" icon={<Instagram />} />
              <SocialLink href="https://www.youtube.com/@DEADNADEZHD" icon={<Youtube />} />
              <SocialLink href="https://t.me/deadNADEZHD" icon={<FaTelegram />} />
              <SocialLink href="https://vk.com" icon={<FaVk />} />
              <SocialLink href="https://discord.com" icon={<FaDiscord />} />
              <SocialLink href="https://tiktok.com" icon={<FaTiktok />} />
              <SocialLink href="https://open.spotify.com/artist/52Uv44sOUvftxYuihT93pP" icon={<FaSpotify />} />
              <SocialLink href="https://music.apple.com/ru/artist/dead-%D0%BD%D0%B0%D0%B4%D0%B5%D0%B6%D0%B4-%D0%BC%D0%BA%D0%B0%D0%B4%D1%8B%D1%88%D0%B5%D0%B2/1785139407" icon={<SiApplemusic />} />
              <SocialLink href="https://music.yandex.ru/artist/23435384" icon={<FaYandex />} />
              <SocialLink href="https://soundcloud.com" icon={<FaSoundcloud />} />
              <SocialLink href="https://bandcamp.com" icon={<FaBandcamp />} />
            </div>
          )}
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