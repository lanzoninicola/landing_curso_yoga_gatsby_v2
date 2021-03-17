import * as React from "react"

import { Title, SmallText } from "@typography"
import { GridFluidSection, GridFixedContainer } from "@layouts"
import Avatar from "./avatar"
import BioContent from "./bioContent"

export const Bio = () => {
  return (
    <>
      <GridFluidSection bg="white">
        <GridFixedContainer columns="1fr" rAuto gap="32">
          <Title as="h2" weight="800">
            A sua professora
          </Title>
          <Avatar />
          <BioContent />
        </GridFixedContainer>
      </GridFluidSection>
    </>
  )
}

export default Bio
