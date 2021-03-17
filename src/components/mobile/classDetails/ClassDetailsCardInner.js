import * as React from "react"
import styled from "styled-components"

import { GridFixedContainer } from "@layouts"
import { Title, SmallText } from "@typography"

import ClassDetailsCardInnerImage from "./ClassDetailsCardInnerImage"

const CardTextContainer = styled(GridFixedContainer)``

export const ClassDetailsCardInner = ({ item }) => {
  return (
    <>
      <CardTextContainer columns="1fr" rAuto gap="16">
        <Title as="h3" center>
          {item.title}
        </Title>
        <ClassDetailsCardInnerImage item={item} />
        <SmallText center>{item.text}</SmallText>
      </CardTextContainer>

      {/* <ClassDetailsCardInnerText item={item} /> */}
    </>
  )
}

export default ClassDetailsCardInner
