import { useRef } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  const featuresRef = useRef(null)
  const contactRef = useRef(null)

  const scrollTo = (ref) => {
    ref?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-semibold text-slate-900">Tarna</div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
            <button onClick={() => scrollTo(featuresRef)} className="hover:text-slate-900">How it works</button>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#about" className="hover:text-slate-900">About</a>
            <button onClick={() => scrollTo(contactRef)} className="inline-flex items-center rounded-md bg-emerald-600 px-3 py-2 text-white font-medium hover:bg-emerald-700">Request demo</button>
          </nav>
        </div>
      </header>

      <main>
        <Hero onPrimaryClick={() => scrollTo(contactRef)} onSecondaryClick={() => scrollTo(featuresRef)} />
        <div ref={featuresRef}><Features /></div>
        <div id="pricing"><Pricing /></div>
        <div id="about"><About /></div>
        <div ref={contactRef}><Contact /></div>
      </main>

      <footer className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Tarna. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a className="hover:text-slate-700" href="#">Privacy</a>
            <a className="hover:text-slate-700" href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
