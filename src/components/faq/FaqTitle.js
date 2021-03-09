import * as React from "react"

import { Title } from "@typography"

const FaqTitle = ({ children }) => {
  return (
    <Title
      as="h4"
      size={{ laptop: 24, tablet: 24, mobile: 32 }}
      color="#A4347E"
    >
      {children}
    </Title>
  )
}

export default FaqTitle
