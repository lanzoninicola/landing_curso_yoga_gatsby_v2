import * as React from "react"
import styled from "styled-components"
import { FlexContainer, Size, Margins, Paddings } from "@layouts/index"

const StyledHeader = styled(FlexContainer)`
  ${Size}
  ${Margins} 
  ${Paddings}
`

const Header = props => {
  return <StyledHeader as="header" {...props} w100v />
}

export default Header

// Disappear (header will shrink at the top after scrolling)

// Fade Out (header will disappear with Fade Out effect)
