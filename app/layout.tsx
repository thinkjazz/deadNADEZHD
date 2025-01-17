import './globals.css'
import { Oswald } from 'next/font/google'

const oswald = Oswald({ subsets: ['cyrillic'] })

export const metadata = {
  title: 'DEAD Надежд Мкадышев - ЖАТВА',
  description: 'DEAD Надежд Мкадышев - ЖАТВА',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={oswald.className}>{children}</body>
    </html>
  )
}

