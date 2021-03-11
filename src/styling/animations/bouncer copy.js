import * as React from "react"
import { motion } from "framer-motion"
import PropTypes from "prop-types"
import { error, isNotIncluded, isNotUndefined } from "@utils"

const Bouncer = ({ direction = "vertical", children }) => {
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

  function setJumbDirection() {
    let itemVariants = { start: {}, end: {} }
    if ((direction = "vertical")) {
      itemVariants.start.y = "0%"
      itemVariants.end.y = "30%"
    }

    if ((direction = "horizontal")) {
      itemVariants.start.x = "0%"
      itemVariants.end.x = "10%"
    }

    return itemVariants
  }

  const itemTransition = {
    duration: 0.5,
    repeat: Infinity,
    ease: "easeInOut",
  }

  return (
    <motion.div variants={containerVariants} initial="start" animate="end">
      <motion.div
        variants={setJumbDirection()}
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
  direction: (props, propName, componentName) => {
    if (
      isNotUndefined(props[propName]) &&
      isNotIncluded(props[propName], ["vertical", "horizontal"])
    ) {
      return error(
        `${componentName}`,
        `The ${propName} props accepts only the value: vertical, horizontal `
      )
    }
  },
}

export default Bouncer
