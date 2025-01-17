'use client'

import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'

const img = [
  { name: 'logo', image: '/title_logo.png' },
  { name: 'harvest', image: '/harvest-light-red.png' },
  { name: 'title', image: '/title.png' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full z-50 bg-black bg-opacity-70 h-14">
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        <h1 className="text-2xl font-bold text-deadpink">

          <img src={img.find(item => item.name === 'logo')?.image} alt="logo" className="h-8 inline-block mr-2" />

        </h1>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink href ="#history">История Деда</NavLink>
          <NavLink href="#music">Релизы</NavLink>
          <NavLink href="#videos">Видео</NavLink>
          <NavLink href="#merch">Мерч</NavLink>
        </nav>
        <Button variant="default" size="lg" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu />
        </Button>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-black bg-opacity-90 py-4">
          <NavLink href="#history" onClick={() => setIsOpen(false)}>История Деда</NavLink>
          <NavLink href="#music" onClick={() => setIsOpen(false)}>Релизы</NavLink>
          <NavLink href="#videos" onClick={() => setIsOpen(false)}>Видео</NavLink>
          <NavLink href="#merch" onClick={() => setIsOpen(false)}>Мерч</NavLink>
        </nav>
      )}
    </header>
  )
}
function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  if (typeof children === 'string' && children.includes('История Деда')) {
    return (
      <a href={href} className="block px-4 py-2 text-deadpink hover:text-pink-400 transition-colors" onClick={onClick}>
        <div className="md:flex md:flex-col md:items-center">
          <span className="md:text-center">История Деда </span>

        </div>
      </a>
    );
  }

  // Добавляем проверку для пункта "МЕРЧ"
  if (typeof children === 'string' && children.toUpperCase() === 'МЕРЧ') {
    return (
      <a href={href} className="block px-4 py-2 text-deademerald hover:text-deadpink transition-colors" onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} className="block px-4 py-2 text-deadpink hover:text-deademerald transition-colors" onClick={onClick}>
    {children}
  </a>
  );
}