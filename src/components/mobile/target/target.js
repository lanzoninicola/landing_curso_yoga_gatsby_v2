import * as React from "react"

import { FlexSection } from "@layouts"
import { Title } from "@typography"

const Target = () => {
  return (
    <FlexSection centerX centerY bg="blue">
      <Title as="h4" color="white" center>
        A prática que faremos é adequada para todos. Não existe limite de idade
        nem necessita experiência, qualquer um pode praticar.
      </Title>
    </FlexSection>
  )
}

export default Target
