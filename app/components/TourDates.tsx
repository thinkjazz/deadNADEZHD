import { Button } from '@/components/ui/button'

const tourDates = [
  { date: '2023-07-15', city: 'New York, NY', venue: 'Madison Square Garden' },
  { date: '2023-07-22', city: 'Los Angeles, CA', venue: 'The Forum' },
  { date: '2023-07-29', city: 'Chicago, IL', venue: 'United Center' },
  { date: '2023-08-05', city: 'Houston, TX', venue: 'Toyota Center' },
]

export default function TourDates() {
  return (
    <section id="tour" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-pink-500">Tour Dates</h2>
        <div className="grid gap-4">
          {tourDates.map((show, index) => (
            <div key={index} className="flex flex-col md:flex-row justify-between items-center bg-zinc-900 p-4 rounded-lg">
              <div className="mb-4 md:mb-0">
                <p className="text-xl font-bold">{new Date(show.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                <p>{show.city}</p>
                <p className="text-zinc-400">{show.venue}</p>
              </div>
              <Button className="bg-pink-600 hover:bg-pink-700 text-white">
                Get Tickets
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

