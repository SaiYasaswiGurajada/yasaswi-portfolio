
import { motion } from "framer-motion"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import { profile } from "../data"

const fade = { hidden: {opacity:0, y: 12}, show: {opacity:1, y:0} }

export default function Hero(){
  return (
    <section className="py-12 sm:py-20">
      <div className="grid gap-8 sm:grid-cols-[1.2fr_.8fr] items-center">
        <div>
          <motion.h1
            variants={fade}
            initial="hidden"
            animate="show"
            transition={{duration:.6, ease:'easeOut'}}
            className="text-4xl sm:text-5xl font-extrabold leading-tight"
          >
            Hi, I’m <span className="bg-gradient-to-br from-accent to-accent-2 bg-clip-text text-transparent">{profile.name}</span>.
            <br/>I build reliable APIs & delightful UIs.
          </motion.h1>
          <motion.p
            variants={fade} initial="hidden" animate="show" transition={{delay:.1, duration:.6}}
            className="mt-4 text-muted max-w-2xl"
          >
            {profile.summary}
          </motion.p>

          <motion.div variants={fade} initial="hidden" animate="show" transition={{delay:.2}} className="mt-6 flex flex-wrap gap-3">
            {/* <a href="/resume.pdf" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-accent to-accent-2 px-4 py-2 text-white shadow-soft">
              <Download size={16}/> Resume
            </a> */}
            <a href={`${import.meta.env.BASE_URL}resume.pdf`} download className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-accent to-accent-2 px-4 py-2 text-white shadow-soft">
            <Download size={16}/> Resume
            </a>
            <a href={profile.links.github} target="_blank" className="glass px-4 py-2 inline-flex items-center gap-2"> <Github size={16}/> GitHub </a>
            <a href={profile.links.linkedin} target="_blank" className="glass px-4 py-2 inline-flex items-center gap-2"> <Linkedin size={16}/> LinkedIn </a>
            <a href="#contact" className="glass px-4 py-2 inline-flex items-center gap-2"> <Mail size={16}/> Contact </a>
          </motion.div>

          <motion.div variants={fade} initial="hidden" animate="show" transition={{delay:.3}} className="mt-5 flex flex-wrap gap-2 text-xs text-muted">
            <span className="glass px-3 py-1">Java · Spring Boot</span>
            <span className="glass px-3 py-1">Angular · TypeScript</span>
            <span className="glass px-3 py-1">MySQL · Postgres</span>
            <span className="glass px-3 py-1">Azure DevOps · Docker</span>
          </motion.div>
        </div>

        <motion.div initial={{opacity:0, scale:.96}} animate={{opacity:1, scale:1}} transition={{delay:.1, duration:.5}} className="glass p-4">
          <img src={`${import.meta.env.BASE_URL}avatar.jpg`} alt="Headshot" />
          <div className="mt-3 text-center text-sm text-muted">Hyderabad, India · Open to remote/hybrid</div>
        </motion.div>
      </div>
    </section>
  )
}
