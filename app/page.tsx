import Header from './components/Header'
import Hero from './components/Hero'
import LatestRelease from './components/LatestRelease'
import Community from './components/Community'
import Contact from './components/Contact'
import Merch from './components/Merch'
import Footer from './components/Footer'
import History from './components/History'
import Video from './components/Video'


export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <LatestRelease />
      <History />
      <Video />
      <Merch />
      <Community />
      <Contact />
      <Footer />
    </main>
  )
}

