import * as React from "react"
import styled from "styled-components"

import { FlexContainer } from "@layouts"

const ImageWrapper = styled(FlexContainer)``

const StyledImage = styled.img`
  height: 91px;
  width: 93px;
  margin: 0;
`

export const ClassDetailsCardInnerImage = ({ item }) => {
  return (
    <>
      <ImageWrapper row centerX centerY>
        <StyledImage src={item.imageURL} alt={item.title} />
      </ImageWrapper>
    </>
  )
}

export default ClassDetailsCardInnerImage
