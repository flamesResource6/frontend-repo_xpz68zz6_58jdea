import Navbar from './components/Navbar'
import TelemetryDashboard from './components/TelemetryDashboard'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Experience from './components/Experience'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main className="relative">
        {/* 1️⃣ HERO – Ignition On (dashboard telemetry) */}
        <TelemetryDashboard />
        {/* Scroll-driven cockpit reveal */}
        <Hero />
        {/* 3️⃣ PROJECTS – Track Mode */}
        <Projects />
        {/* 2️⃣ ABOUT – Driver Profile */}
        <About />
        {/* 4️⃣ EXPERIENCE / SKILLS – Performance Stats */}
        <Experience />
        {/* 5️⃣ GALLERY – Inside the Machine */}
        <Gallery />
        {/* 6️⃣ CONTACT – Pit Stop */}
        <Contact />
      </main>
      {/* 7️⃣ FOOTER – Underbody Glow */}
      <Footer />
    </div>
  )
}

export default App
