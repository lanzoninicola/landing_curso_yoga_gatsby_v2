import * as React from "react"
import { motion } from "framer-motion"

const FadeIn = ({ children }) => {
  const reveal = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  }

  return (
    <motion.div variants={reveal} initial="hidden" animate="visible">
      {children}
    </motion.div>
  )
}

export default FadeIn
