import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

// import { motion } from "framer-motion"
import { isColorTheme, colorTheme } from "@colors/lib"
import { FlexContainer, Margins, Paddings, Size } from "@layouts/index"

// TODO: view if this component can be replaced by "ImageCard" component

const StyledCardWrapper = styled.div`
  ${Margins}
  ${Paddings}
  ${Size}
  position: relative;
  min-width: 100%;
  border-radius: ${({ br }) => {
    if (br) return br

    return `25px`
  }};
  background: ${({ bg }) => {
    if (bg) {
      if (isColorTheme(bg)) return colorTheme(bg)
      return bg
    }
    return `white`
  }};
  scroll-snap-align: center;
  ${({ $style }) => $style ?? {}}
`

const CarouselCard = ({ children, ...props }) => {
  const { width } = useViewportInfo()

  return (
    <FlexContainer column centerX stretchY $style={{ minWidth: "100%" }}>
      <StyledCardWrapper {...props}>{children}</StyledCardWrapper>
    </FlexContainer>
  )
}
export default CarouselCard

CarouselCard.propTypes = {
  children: PropTypes.node.isRequired,
}
