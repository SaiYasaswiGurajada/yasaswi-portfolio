
import { motion } from "framer-motion"
import { experience } from "../data"

export default function Experience(){
  return (
    <section className="py-12" id="experience">
      <h2 className="text-2xl font-bold mb-6">Experience</h2>
      <div className="grid gap-4">
        {experience.map((e, i)=>(
          <motion.div
            key={e.company}
            className="glass p-4"
            initial={{opacity:0, x: i%2===0 ? -20 : 20}}
            whileInView={{opacity:1, x:0}}
            transition={{type:'spring', stiffness:80, damping:14}}
            viewport={{ once: true, amount: .25 }}
          >
            <div className="flex items-center justify-between gap-2">
              <div>
                <div className="font-semibold">{e.role}</div>
                <div className="text-sm text-muted">{e.company}</div>
              </div>
              <div className="text-xs text-muted">{e.period}</div>
            </div>
            <ul className="mt-3 list-disc list-inside text-sm text-muted grid gap-1">
              {e.bullets.map(b=> <li key={b}>{b}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
