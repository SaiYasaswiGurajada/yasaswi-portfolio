
import { motion } from "framer-motion"
import { profile } from "../data"
import { Mail } from "lucide-react"

export default function Contact(){
  function copy(){
    navigator.clipboard.writeText(profile.email)
  }
  return (
    <section className="py-12" id="contact">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <motion.div
        className="glass p-4"
        initial={{opacity:0, y: 10}}
        whileInView={{opacity:1, y: 0}}
        viewport={{ once: true, amount: .2 }}
      >
        <p className="text-sm text-muted">For roles, collaborations, or consulting:</p>
        <p className="mt-2 flex flex-wrap items-center gap-3">
          <span className="text-lg">{profile.email}</span>
          <button onClick={copy} className="glass text-sm px-3 py-1 inline-flex items-center gap-2"><Mail size={14}/> Copy</button>
        </p>
        <p className="text-sm text-muted mt-2">Location: {profile.location} · Open to remote/hybrid</p>
      </motion.div>
    </section>
  )
}
