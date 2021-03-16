import * as React from "react"

import { Title, SmallText } from "@typography"
import {
  FlexContainer,
  Padding,
  GridFixedContainer,
  GridFluidContainer,
} from "@layouts"

import ArrowRight from "../../decorative/ArrowRight"
import ClassDetailsMobileCarousel from "./ClassDetailsMobileCarousel"

// data as props
// items per page
// showArrows
// infinite(true, false)

export const ClassDetailsCarousel = () => {
  return (
    <>
      <GridFluidContainer as="section" bg="white">
        <Padding>
          <GridFixedContainer columns="1fr" rows="1fr .1fr" gap="24">
            <Title as="h2">Detalhes do curso</Title>
            <FlexContainer row centerY left>
              <SmallText ls="2" uppercase>
                descubra
              </SmallText>
              <ArrowRight />
            </FlexContainer>
          </GridFixedContainer>
          <ClassDetailsMobileCarousel />
        </Padding>
      </GridFluidContainer>
    </>
  )
}

export default ClassDetailsCarousel
