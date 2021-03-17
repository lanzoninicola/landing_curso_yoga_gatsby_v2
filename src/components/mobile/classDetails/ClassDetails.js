import * as React from "react"

import { Title, SmallText } from "@typography"
import { FlexContainer, GridFluidSection, GridFixedContainer } from "@layouts"

import ArrowRight from "../../decorative/ArrowRight"
import ClassDetailsMobileCarousel from "./ClassDetailsMobileCarousel"

// data as props
// items per page
// showArrows
// infinite(true, false)

export const ClassDetails = () => {
  return (
    <>
      <GridFluidSection bg="white">
        <GridFixedContainer columns="1fr" rAuto gap="16">
          <Title as="h2" weight="800">
            Detalhes do curso
          </Title>
          <FlexContainer row centerY left>
            <SmallText ls="2" uppercase>
              descubra
            </SmallText>
            <ArrowRight />
          </FlexContainer>
          <ClassDetailsMobileCarousel />
        </GridFixedContainer>
      </GridFluidSection>
    </>
  )
}

export default ClassDetails
