import * as React from "react"

import { Text } from "@typography"

const FaqText = ({ children, ...props }) => {
  return (
    <Text size={{ laptop: 24, tablet: 24, mobile: 24 }} {...props}>
      {children}
    </Text>
  )
}

export default FaqText
