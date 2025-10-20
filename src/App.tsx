
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Contact from "./components/Contact"

export default function App(){
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, -40])

  return (
    <div>
      {/* Animated accent blobs */}
      <motion.div style={{ y }} className="pointer-events-none fixed inset-0 -z-10 opacity-50">
        <div className="absolute -top-24 -right-24 h-[36rem] w-[36rem] rounded-full bg-gradient-to-br from-accent to-accent-2 blur-3xl opacity-20 animate-radiate" />
        <div className="absolute top-64 -left-24 h-[26rem] w-[26rem] rounded-full bg-gradient-to-tr from-accent-2 to-accent blur-[90px] opacity-20 animate-floaty" />
      </motion.div>

      <nav className="sticky top-0 z-40 border-b border-border/60 bg-bg/70 backdrop-blur-md">
        <div className="container-max flex items-center justify-between py-3">
          <a href="#" className="font-extrabold text-xl tracking-tight link-underline">Yasaswi</a>
          <div className="hidden sm:flex gap-6 text-sm">
            <a href="#projects" className="opacity-90 hover:opacity-100 link-underline">Projects</a>
            <a href="#experience" className="opacity-90 hover:opacity-100 link-underline">Experience</a>
            <a href="#contact" className="opacity-90 hover:opacity-100 link-underline">Contact</a>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-accent to-accent-2 px-4 py-2 text-white shadow-soft">
            Hire me <ArrowRight size={16}/>
          </a>
        </div>
      </nav>

      <main className="container-max">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer className="container-max py-10 text-sm text-muted">
        © {new Date().getFullYear()} Sai Yasaswi Gurajada
      </footer>
    </div>
  )
}
