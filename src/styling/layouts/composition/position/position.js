import { css } from "styled-components"
import { isBoolean } from "@utils"

const Position = css`
  position: ${({ relative, absolute, fixed, sticky }) => {
    if (relative) return `relative`
    if (absolute) return `absolute`
    if (fixed) return `fixed`
    if (sticky) return `sticky`

    return `relative`
  }};
  top: ${({ top, sticky }) => {
    if (top) return top
    if (isBoolean(sticky)) {
      return 0
    } else return sticky
  }};
  bottom: ${({ bottom }) => {
    if (bottom) return bottom

    return null
  }};
  left: ${({ left }) => {
    if (left) return left

    return null
  }};
  right: ${({ right }) => {
    if (right) return right

    return null
  }};
  ${props => props.$style ?? {}}
`

export default Position
