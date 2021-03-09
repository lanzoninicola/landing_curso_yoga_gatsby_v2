import * as React from "react"

import { composeCSSValue } from "@layouts/lib/index"
import { useViewportInfo } from "@hooks"
import { isObject, error } from "@utils"

/**
 *  This is different from "useResponsiveSize" hook
 *  It returns the FIXED size passed as parameter depending on the device in use
 *
 *  This hook works only with PXs value
 */

export default function useSizePerDevice(size = {}, debug = false) {
  const [responsiveSize, setResponsiveSize] = React.useState()
  const { device: currentDeviceFormFactor } = useViewportInfo()

  if (!isObject) {
    error(
      `useSizePerDevice()`,
      `The size passed as parameter must be an object, instead of: ${typeof size}`
    )
  }

  function exitNoChanges() {
    return size
  }

  const getSizePerDevice = React.useCallback(() => {
    const _userSize = size[currentDeviceFormFactor]
    const { value: userSize, unit: userUnit } = composeCSSValue(_userSize)

    if (userUnit !== "px" || userUnit !== "PX") exitNoChanges()

    const _responsiveSize = userSize

    setResponsiveSize(_responsiveSize)
  }, [currentDeviceFormFactor, size])

  React.useEffect(() => {
    getSizePerDevice()
  }, [currentDeviceFormFactor, getSizePerDevice])

  return `${responsiveSize}px`
}
