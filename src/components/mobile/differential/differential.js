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

const Differential = () => {
  const { device, height } = useViewportInfo()

  return (
    <>
      <GridFluidContainer as="section">
        <FlexContainer h={height} hFixed centerX centerY bg="white" sticky>
          <Padding>
            <Title as="h2" size="48" color="purple">
              <Typewriter
                onInit={typewriter => {
                  typewriter
                    .typeString("Porque o meu curso è differente")
                    .changeDelay(50)
                    .pauseFor(200)
                    .typeString(".")
                    .pauseFor(200)
                    .typeString(".")
                    .pauseFor(200)
                    .typeString(".")
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
          bg="purple"
          sticky
          style={{
            minHeight: height,
          }}
        >
          <Padding>
            <GridFixedContainer columns="1fr" rAuto w100 gap="16">
              <Text color="white">
                Muitos cursos on-line são uma coleção de vídeos gravados, não há
                contato com o professor durante a prática.
              </Text>
              <Text color="white">
                Ninguém pode adverti-lo se você estiver realizando movimentos
                incorretos.
              </Text>
              <Text color="white">
                As sessões de yoga neste curso serão todas ao vivo.
              </Text>
              <Text color="white">
                Observarei seus movimentos e corrigirei você quando necessário.
                Se necessário, vou sugerir um exercício alternativo adequado à
                sua condição física.
              </Text>
              <Text color="white">
                Além disso, se você precisar de uma referência mesmo após os
                horários programados das aulas, para apoio ou apenas para
                compartilhar um pensamento que seja útil ao caminho que você
                está tomando.
              </Text>
            </GridFixedContainer>
          </Padding>
        </FlexContainer>
      </GridFluidContainer>
    </>
  )
}

export default Differential
