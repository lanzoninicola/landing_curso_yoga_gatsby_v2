import * as React from "react"

import { FlexContainer, GridFixedContainer, Padding } from "@layouts"
import { Title } from "@typography"

const Target = () => {
  return (
    <FlexContainer centerX centerY bg="blue">
      <Padding>
        <Title as="h4" color="white" center>
          A prática que faremos é adequada para todos. Não existe limite de
          idade nem necessita experiência, qualquer um pode praticar.
        </Title>
      </Padding>
    </FlexContainer>
  )
}

export default Target
