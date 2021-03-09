import * as React from "react"
import styled from "styled-components"
import { useDeviceSize, useResponsiveSize } from "@hooks"
import { Space } from "@layouts"
import { composeCSSValue } from "@layouts/lib"

const StyledBaseCardWrapper = styled.div`
  ${Space}
  height: 100%;
  border: none;
  border-radius: ${({ br }) => {
    if (br) return br
    return `25px`
  }};
  box-shadow: ${({ noShadow }) => {
    if (noShadow) return null
    return `rgba(0, 6, 36, 0.25) 0px 26px 24px -16px,
    rgba(0, 6, 36, 0.3) 0px 16px 24px -18px,
    rgba(0, 6, 36, 0.07) 0px 0px 10px 0px;`
  }};
  padding: 20px 30px 20px 30px;
  margin-left: ${({ gap }) => {
    const _gapLeft = parseInt(gap) / 2
    const { value, unit } = composeCSSValue(_gapLeft)

    if (gap) return `${value}${unit}`
    return null
  }};
  margin-right: ${({ gap }) => {
    const _gapRight = parseInt(gap) / 2
    const { value, unit } = composeCSSValue(_gapRight)

    if (gap) return `${value}${unit}`
    return null
  }};
  width: ${({ w, width }) => {
    if (w) return useDeviceSize(w)
    if (width) return useDeviceSize(width)
    return useDeviceSize({ laptop: 300, tablet: 300, mobile: 250 })
  }};
`

const BaseCardWrapper = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <StyledBaseCardWrapper ref={ref} {...props}>
      {children}
    </StyledBaseCardWrapper>
  )
})

export default BaseCardWrapper
