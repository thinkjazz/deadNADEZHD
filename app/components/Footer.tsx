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

export default function Footer() {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4">
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
        <p className="text-center text-zinc-500">© 2025 DEAD Надежд Мкадышев. All rights reserved.</p>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-deadpink hover:text-deademerald transition-colors">
      {icon}
    </a>
  )
}

