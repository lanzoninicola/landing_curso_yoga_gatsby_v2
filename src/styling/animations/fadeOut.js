import * as React from "react"
import { motion } from "framer-motion"

const FadeOut = ({ children }) => {
  const reveal = {
    visible: {
      opacity: 1,
    },
    hidden: { opacity: 0 },
  }

  return (
    <motion.div variants={reveal} initial="visible" animate="hidden">
      {children}
    </motion.div>
  )
}

export default FadeOut
