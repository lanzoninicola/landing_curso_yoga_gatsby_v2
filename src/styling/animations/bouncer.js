import * as React from "react"
import { motion } from "framer-motion"
import PropTypes from "prop-types"

const containerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "30%",
  },
}

const itemTransition = {
  duration: 0.5,
  repeat: Infinity,
  ease: "easeInOut",
}

const Bouncer = ({ children }) => {
  return (
    <motion.div variants={containerVariants} initial="start" animate="end">
      <motion.div
        variants={itemVariants}
        transition={itemTransition}
        style={{
          display: "block",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

Bouncer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Bouncer
