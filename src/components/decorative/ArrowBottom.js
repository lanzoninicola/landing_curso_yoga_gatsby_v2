import * as React from "react"
import { motion } from "framer-motion"

import { FlexContainer } from "@layouts"
import { SVGIcon } from "@icons"
import { Bouncer } from "@animations"

const ArrowBottom = () => {
  const reveal = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  }
  return (
    <FlexContainer row h100 w100 top right pr="32">
      <motion.div variants={reveal} initial="hidden" animate="visible">
        <Bouncer startY="0" endY="30" duration="0.7">
          <SVGIcon name="ARROW_BOTTOM" size="48" />
        </Bouncer>
      </motion.div>
    </FlexContainer>
  )
}

export default ArrowBottom
