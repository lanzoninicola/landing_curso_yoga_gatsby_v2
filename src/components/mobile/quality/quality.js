import * as React from "react"
import Typewriter from "typewriter-effect"

import { FlexContainer, GridFluidSection, GridFixedContainer } from "@layouts"
import { useViewportInfo } from "@hooks"
import { Title, Text } from "@typography"

const Quality = () => {
  const { height } = useViewportInfo()

  return (
    <>
      <GridFluidSection
        bg="blue"
        style={{
          minHeight: height,
        }}
      >
        <GridFixedContainer columns="1fr" rAuto w100 gap="16">
          <Title as="h2" color="white">
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
          <Text color="white">
            Minha missão é fornecer às pessoas uma ferramenta válida para sua
            mudança e bem-estar.
          </Text>
          <Text color="white">
            Por este motivo, cada lição segue um processo específico de estudo e
            pesquisa.
          </Text>
          <Text color="white">
            Meu objetivo não é me tornar uma famosa YouTuber.
          </Text>
          <Text color="white">
            O que me faz feliz é aprender que meu trabalho tem sido realmente
            útil para sua saúde física, mental e espiritual...
          </Text>
        </GridFixedContainer>
      </GridFluidSection>
    </>
  )
}

export default Quality
