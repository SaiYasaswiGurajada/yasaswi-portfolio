
import { motion } from "framer-motion"
import { skills } from "../data"

export default function Skills(){
  return (
    <section className="py-12" id="skills">
      <h2 className="text-2xl font-bold mb-4">Core Skills</h2>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: .2 }}
        variants={{ hidden:{opacity:0, y:10}, show:{opacity:1, y:0} }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
      >
        {skills.map((s, i)=>(
          <motion.div key={s} className="glass px-3 py-2 text-sm text-muted" whileHover={{scale:1.03}}>
            {s}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
