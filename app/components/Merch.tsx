import Image from 'next/image'
import { Button } from '@/components/ui/button'

const merchItems = [
  { name: 'Футболка DEAD Надежд', price: '$25', image: '/t-shirt-original.jpg' },
  { name: 'Футболка FX GALYA R', price: '$30', image: '/t-shirt-evil-galya.jpg' },
  { name: 'Футболка FX GALYA V', price: '$30', image: '/t-shirt-evil.jpg' },
]

export default function Merch() {
  return (
    <section id="merch" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-deademerald">Мерч</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {merchItems.map((item, index) => (
            <div key={index} className="bg-black p-4 rounded-lg text-center">
              <Image src={item.image} alt={item.name} width={200} height={200} className="rounded-lg mb-4 mx-auto" />
              <h6 className="text-xl mb-2 text-deadpink">{item.name}</h6>
              <p className="mb-4">{item.price}</p>
              <Button className="bg-deadpink hover:bg-deademerald text-white">
                Купить
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

