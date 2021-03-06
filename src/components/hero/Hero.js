import * as React from "react"
import { motion } from "framer-motion"

import { GridFixedContainer, FlexContainer, SizedBox, Sticky } from "@layouts"
import { useViewportInfo } from "@hooks"
import { SVGIcon } from "@icons"
import { Bouncer } from "@animations"

import HeroImage from "./HeroImage"
import HeroTagLine from "./HeroTagLine"

const Hero = () => {
  const { height } = useViewportInfo()
  const [showArrow, setShowArrow] = React.useState(false)

  const reveal = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  }

  return (
    <Sticky style={{ overflow: "hidden" }}>
      <FlexContainer>
        {/* <HeroImage /> */}
        <GridFixedContainer
          columns="0.25fr 1fr"
          rows="1fr"
          h={height}
          hFixed
          gap="0"
          centerX
          centerY
          pt="16"
          pb="16"
        >
          <SizedBox />
          <GridFixedContainer columns="1fr" rows="1fr 1fr" h100 w100 centerY>
            <FlexContainer row h100 w100 bottom>
              <HeroTagLine showArrow={setShowArrow} />
            </FlexContainer>
            {showArrow && (
              <FlexContainer row h100 w100 top right pr="32">
                {/* <Text size={{ laptop: 32, tablet: 32, mobile: 32 }}>Entre</Text> */}
                <motion.div
                  variants={reveal}
                  initial="hidden"
                  animate="visible"
                >
                  <Bouncer>
                    <SVGIcon name="ARROW_BOTTOM" size="48" />
                  </Bouncer>
                </motion.div>
              </FlexContainer>
            )}
          </GridFixedContainer>
        </GridFixedContainer>
      </FlexContainer>
    </Sticky>
  )
}

export default Hero
