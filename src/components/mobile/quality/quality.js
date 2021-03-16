import * as React from "react"
import Typewriter from "typewriter-effect"

import {
  FlexContainer,
  GridFluidContainer,
  GridFixedContainer,
  Padding,
} from "@layouts"
import { useViewportInfo } from "@hooks"
import { Title, Text } from "@typography"

const Quality = () => {
  const { height } = useViewportInfo()

  return (
    <>
      <GridFluidContainer as="section">
        <FlexContainer h={height} hFixed w100 centerX bg="white" sticky>
          <Padding>
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
          </Padding>
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
          <GridFixedContainer columns="1fr" rAuto w100 gap="16">
            <Padding>
              <Text color="white">
                Minha missão é fornecer às pessoas uma ferramenta válida para
                sua mudança e bem-estar.
              </Text>
              <Text color="white">
                Por este motivo, cada lição segue um processo específico de
                estudo e pesquisa.
              </Text>
              <Text color="white">
                Meu objetivo não é me tornar uma famosa YouTuber.
              </Text>
              <Text color="white">
                O que me faz feliz é aprender que meu trabalho tem sido
                realmente útil para sua saúde física, mental e espiritual...
              </Text>
            </Padding>
          </GridFixedContainer>
        </FlexContainer>
      </GridFluidContainer>
    </>
  )
}

export default Quality
