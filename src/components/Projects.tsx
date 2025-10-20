
import { motion } from "framer-motion"
import { projects } from "../data"

export default function Projects(){
  return (
    <section className="py-12" id="projects">
      <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>

      <div className="grid sm:grid-cols-2 gap-4">
        {projects.map((p, i)=>(
          <motion.article
            key={p.title}
            className="glass p-4"
            initial={{opacity:0, y: 14}}
            whileInView={{opacity:1, y:0}}
            transition={{delay: i*0.05}}
            viewport={{ once: true, amount: .2 }}
            whileHover={{ y: -4 }}
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <span className="text-xs text-muted">{p.period}</span>
            </div>
            <p className="text-sm text-muted mt-1">{p.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {p.stack.map(s => <span key={s} className="text-xs glass px-2 py-1">{s}</span>)}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
