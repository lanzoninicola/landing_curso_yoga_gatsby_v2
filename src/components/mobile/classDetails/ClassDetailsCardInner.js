import * as React from "react"

import ClassDetailsCardInnerImage from "./ClassDetailsCardInnerImage"
import ClassDetailsCardInnerText from "./ClassDetailsCardInnerText"

export const ClassDetailsCardInner = ({ item }) => {
  return (
    <>
      <ClassDetailsCardInnerImage item={item} />
      <ClassDetailsCardInnerText item={item} />
    </>
  )
}

export default ClassDetailsCardInner
