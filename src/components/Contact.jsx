import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      // No backend yet; simulate send
      await new Promise((r) => setTimeout(r, 800))
      setStatus('Thanks! I will get back to you shortly.')
    } catch (e) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="relative bg-slate-950 py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-sm text-red-400 font-semibold tracking-wider">CONTACT</p>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Let’s build something</h2>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="block text-sm text-slate-300 mb-2">Name</label>
              <input required className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/50" placeholder="Your name" />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm text-slate-300 mb-2">Email</label>
              <input type="email" required className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/50" placeholder="you@example.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-slate-300 mb-2">Message</label>
              <textarea required rows="4" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/50" placeholder="Tell me about your project" />
            </div>
          </div>
          <div className="mt-6 flex items-center gap-4">
            <button type="submit" className="rounded-xl bg-gradient-to-br from-red-600 to-red-500 px-6 py-3 font-semibold text-white shadow-lg shadow-red-500/30 ring-1 ring-white/10 hover:brightness-110 transition">
              Send Message
            </button>
            <p className="text-slate-300 text-sm">{status}</p>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
