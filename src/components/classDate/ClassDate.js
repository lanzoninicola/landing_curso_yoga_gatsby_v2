import * as React from "react"
import Typewriter from "typewriter-effect"
import { useViewportScroll, useTransform, motion } from "framer-motion"

import {
  GridFluidContainer,
  Sticky,
  SizedBox,
  GridFixedContainer,
} from "@layouts"
import { colorsTheme } from "@theme"
import { useViewportInfo } from "@hooks"
import { Title, Text } from "@typography"
import { ButtonBase } from "@buttons"

const ClassDate = () => {
  const { height, device } = useViewportInfo()
  const { scrollYProgress } = useViewportScroll()
  const frameOpacity = useTransform(scrollYProgress, [0.196, 0.198], [0, 1])
  const frameScale = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  console.log(scrollYProgress)

  return (
    <Sticky>
      <GridFluidContainer
        style={{
          backgroundColor: "#058EC5",
        }}
        pl="16"
        pr="16"
        pt="56"
        gap="56"
        h="1200px"
      >
        <GridFixedContainer columns="1fr" rAuto centerX gap="0">
          <SizedBox style={{ scale: frameScale, overflow: "hidden" }}>
            <Title
              as="h3"
              size={{ laptop: 256, tablet: 240, mobile: 164 }}
              lh={{ laptop: 256, tablet: 240, mobile: 164 }}
              style={{
                color: "white",
              }}
            >
              12
            </Title>
          </SizedBox>
          <SizedBox style={{ scale: frameScale, overflow: "hidden" }}>
            <GridFixedContainer columns="1fr" rows="1fr 1fr" gap="0">
              <Title
                as="h3"
                size={{ laptop: 120, tablet: 120, mobile: 72 }}
                style={{
                  color: "white",
                }}
              >
                abril
              </Title>
              <Title
                as="h3"
                size={{ laptop: 120, tablet: 120, mobile: 72 }}
                ls="4"
                style={{
                  color: "white",
                }}
              >
                2021
              </Title>
            </GridFixedContainer>
          </SizedBox>
        </GridFixedContainer>
      </GridFluidContainer>
    </Sticky>
  )
}

export default ClassDate
