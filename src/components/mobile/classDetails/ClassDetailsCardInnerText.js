import * as React from "react"
import styled from "styled-components"

import { GridFixedContainer } from "@layouts"
import { Title, SmallText } from "@typography"

const CardTextContainer = styled(GridFixedContainer)``

export const ClassDetailsCardInnerText = ({ item }) => {
  return (
    <>
      <CardTextContainer columns="1fr" rAuto gap="16">
        <Title as="h3">{item.title}</Title>
        <SmallText>{item.text}</SmallText>
      </CardTextContainer>
    </>
  )
}

export default ClassDetailsCardInnerText
