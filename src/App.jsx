import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutPage from './pages/About'
import Contact from './pages/Contact'
import ProjectsPage from './pages/ProjectsPage'

function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 80)
        return () => clearTimeout(timer)
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [pathname, hash])

  return null
}

function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center flex flex-col gap-4">
        <p className="text-base font-medium uppercase text-[#4d4d4d]">404</p>
        <h1 className="text-5xl font-medium text-[#4d4d4d]">Page not found</h1>
        <p className="text-lg font-light text-[#4d4d4d]/70">
          Looks like this page doesn&apos;t exist yet.
        </p>
        <a
          href="/"
          className="self-center mt-4 inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium text-white transition-all duration-200 hover:scale-[1.02]"
          style={{ background: 'linear-gradient(to bottom, #999, #4d4d4d)' }}
        >
          Go home
        </a>
      </div>
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <div className="min-h-screen bg-white dark:bg-zinc-950 text-black dark:text-zinc-100 flex flex-col justify-between transition-colors duration-300">
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
