/**
 * Get the color for the theme.
 * @param {string} color
 * @param {object} options
 */

import colorsTheme from "../colorsTheme"

import { isNotNumber, isNotString, error, warn } from "@utils"
import { isHEXColor, isColorTheme } from "./index"

const colorTheme = (color, options = { opacity: 1 }) => {
  if (isNotString(color)) {
    return error("colorTheme()", 'First parameter "color" must be a string')
  }

  const themeColor = colorsTheme()

  if (!isColorTheme(color)) {
    warn(
      "colorTheme()",
      'The color choosed does not exist in the theme color palette, then the "black" color is returned as default'
    )
    return `rgba(0, 0, 0, 1)`
  }

  if (isHEXColor(color)) {
    return themeColor[color]["hex"]
  }

  if (isNotNumber(options.opacity)) {
    return error("colorTheme()", "The opacity parameter must be a number")
  }

  if (options.opacity) {
    return `rgba(${themeColor[color]["rgb"]}, ${options.opacity})`
  }

  return themeColor[color]["hex"]
}

export default colorTheme
