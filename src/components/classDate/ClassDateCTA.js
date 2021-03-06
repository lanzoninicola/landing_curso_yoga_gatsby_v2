import * as React from "react"
import Typewriter from "typewriter-effect"
import { useViewportScroll, useTransform, motion } from "framer-motion"

import { SizedBox, GridFixedContainer } from "@layouts"
import { useViewportInfo } from "@hooks"
import { Text } from "@typography"
import { ButtonBase } from "@buttons"

const ClassDateCTA = () => {
  const { scrollYProgress } = useViewportScroll()
  // const frameOpacity = useTransform(scrollYProgress, [0.196, 0.198], [0, 1])
  const frameScale = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  console.log(scrollYProgress)

  return (
    <GridFixedContainer
      columns="1fr"
      rAuto
      style={{
        backgroundColor: "#A4347E",
      }}
      pl="16"
      pr="16"
      pt="56"
      gap="56"
      h="800px"
      sticky
    >
      <SizedBox style={{ scale: frameScale, overflow: "hidden" }}>
        <Text size={{ laptop: 120, tablet: 120, mobile: 64 }}>
          <Typewriter
            onInit={typewriter => {
              typewriter
                .typeString(
                  'Aula gratuita de yoga <span style="color: #058EC5;">aberta a todos.</span>'
                )
                .pauseFor(1200)
                .start()
            }}
          />
        </Text>
      </SizedBox>
      <GridFixedContainer columns="1fr" rAuto centerX mb="36">
        <Text size={{ laptop: 60, tablet: 60, mobile: 32 }} center>
          marcar a data de 12 de abril para participar do curso
        </Text>

        <ButtonBase>adicione ao seu calendário</ButtonBase>
      </GridFixedContainer>
    </GridFixedContainer>
  )
}

export default ClassDateCTA
