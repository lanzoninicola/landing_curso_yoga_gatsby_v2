import * as React from "react"
import styled from "styled-components"

import { FlexContainer } from "@layouts"

import FaqTitle from "./FaqTitle"
import FaqText from "./FaqText"

const FaqCard = styled.div`
  height: 100%;
  border: none;
  border-radius: 25px;
  box-shadow: rgba(0, 6, 36, 0.25) 0px 26px 24px -16px,
    rgba(0, 6, 36, 0.3) 0px 16px 24px -18px,
    rgba(0, 6, 36, 0.07) 0px 0px 10px 0px;
  padding: 64px;
  backgroundcolor: blue;
`

const FaqLaptop = ({ faqs }) => {
  console.log(faqs)
  return faqs.map((faq, index) => {
    return (
      <FaqCard key={index}>
        <FlexContainer columns>
          <FaqTitle>{faq.title}</FaqTitle>
          <FaqText>{faq.text}</FaqText>
        </FlexContainer>
      </FaqCard>
    )
  })
}

export default FaqLaptop
