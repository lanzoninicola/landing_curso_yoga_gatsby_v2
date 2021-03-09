import * as React from "react"
import { motion } from "framer-motion"

import { SVGIcon } from "@icons"

const FaqMobileIcon = ({ handleShowAnswer, answerIndex, answerShown }) => {
  const button = {
    rest: { scale: 1 },
    pressed: { scale: 0.9, rotate: [0, 270, 0] },
  }

  return (
    <motion.div
      variants={button}
      initial="rest"
      whileTap="pressed"
      onClick={() => handleShowAnswer(answerIndex)}
    >
      {!answerShown && <SVGIcon name="CIRCLE_PLUS" size="48" color="#A4347E" />}
      {answerShown && <SVGIcon name="CIRCLE_MINUS" size="48" color="#A4347E" />}
    </motion.div>
  )
}

export default FaqMobileIcon
