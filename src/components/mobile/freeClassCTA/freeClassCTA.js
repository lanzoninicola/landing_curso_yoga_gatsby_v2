import * as React from "react"

import { GridFluidSection, FlexContainer } from "@layouts"
import { Title } from "@typography"

const FreeClassCTA = () => {
  return (
    <GridFluidSection bg="purple">
      <FlexContainer centerX centerY>
        <Title as="h4" color="white" center>
          20 abril aula aberta a todos addiciona o boton
        </Title>
      </FlexContainer>
    </GridFluidSection>
  )
}

export default FreeClassCTA
