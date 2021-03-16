import * as React from "react"
import { motion } from "framer-motion"

import { FlexContainer } from "@layouts"
import { SVGIcon } from "@icons"
import { Bouncer } from "@animations"

const ArrowRight = () => {
  const reveal = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  }
  return (
    <motion.div variants={reveal} initial="hidden" animate="visible">
      <Bouncer startX="0" endX="30" duration="1.5">
        <SVGIcon name="ARROW_RIGHT" size="24" />
      </Bouncer>
    </motion.div>
  )
}

export default ArrowRight
