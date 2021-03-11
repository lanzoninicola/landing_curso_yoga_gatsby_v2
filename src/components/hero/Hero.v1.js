import * as React from "react"
import { motion } from "framer-motion"

import { GridFixedContainer, FlexContainer, SizedBox, Sticky } from "@layouts"
import { useViewportInfo } from "@hooks"
import { SVGIcon } from "@icons"
import { Bouncer } from "@animations"

import HeroTagLine from "./HeroTagLine"

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

const Hero = () => {
  const { height } = useViewportInfo()
  const [showArrow, setShowArrow] = React.useState(false)

  return (
    <>
      <GridFixedContainer
        as="section"
        columns="0.25fr 1fr"
        rows="1fr"
        h={height}
        hFixed
        gap="0"
        centerX
        centerY
        pt="16"
        pb="16"
        sticky
      >
        <SizedBox />
        <GridFixedContainer columns="1fr" rows="1fr 1fr" h100 w100 centerY>
          <FlexContainer row h100 w100 bottom>
            <HeroTagLine showArrow={setShowArrow} />
          </FlexContainer>
          {showArrow && <ArrowBottom />}
        </GridFixedContainer>
      </GridFixedContainer>
    </>
  )
}

export default Hero
