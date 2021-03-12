import * as React from "react"
import Typewriter from "typewriter-effect"

import { FlexContainer, GridFluidContainer, GridFixedContainer } from "@layouts"
import { useViewportInfo } from "@hooks"
import { Title, Text } from "@typography"

const Quality = () => {
  const { device, height, width } = useViewportInfo()

  return (
    <>
      <GridFluidContainer as="section">
        <FlexContainer
          h={height}
          hFixed
          w100
          centerX
          bg="white"
          pl={{ laptop: 112, tablet: 112, mobile: 32 }}
          pr={{ laptop: 112, tablet: 112, mobile: 32 }}
          sticky
        >
          <Title as="h2" size="48" color="blue">
            <Typewriter
              onInit={typewriter => {
                typewriter
                  .typeString("A qualidade é melhor que a quantidade...")
                  .changeDelay(50)
                  .pauseFor(200)
                  .start()
              }}
            />
          </Title>
        </FlexContainer>

        <FlexContainer
          centerX
          centerY
          bg="blue"
          sticky
          style={{
            minHeight: height,
          }}
        >
          <GridFixedContainer
            columns="1fr"
            rAuto
            w100
            gap="16"
            pl={{ laptop: 112, tablet: 112, mobile: 32 }}
            pr={{ laptop: 112, tablet: 112, mobile: 32 }}
          >
            <Text color="white">
              Minha missão é fornecer às pessoas uma ferramenta válida para sua
              mudança e bem-estar.
            </Text>
            <Text color="white">
              Por este motivo, cada lição segue um processo específico de estudo
              e pesquisa.
            </Text>
            <Text color="white">
              Meu objetivo não é me tornar uma famosa YouTuber.
            </Text>
            <Text color="white">
              O que me faz feliz é aprender que meu trabalho tem sido realmente
              útil para sua saúde física, mental e espiritual...
            </Text>
          </GridFixedContainer>
        </FlexContainer>
      </GridFluidContainer>
    </>
  )
}

export default Quality
