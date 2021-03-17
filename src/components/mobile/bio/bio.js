import * as React from "react"

import { Title, SmallText } from "@typography"
import { GridFluidSection } from "@layouts"
import Avatar from "./avatar"

export const Bio = () => {
  return (
    <>
      <GridFluidSection bg="white">
        <Title as="h2">A sua professora</Title>
        <Avatar />
      </GridFluidSection>
    </>
  )
}

export default Bio
