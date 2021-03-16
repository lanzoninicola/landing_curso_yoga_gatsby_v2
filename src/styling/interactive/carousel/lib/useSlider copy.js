import * as React from "react"
import { paginator, warn } from "@utils"

function useSlider({ items = [], itemsPerPage = 1, device }) {
  if (items.length === 0) {
    warn(
      "useSlider",
      `You should provide array of items as first parameter of useSlider hook to render the carousel or slideshow`
    )
  }

  const slideItemRef = React.useRef(null)
  const { width, device } = useViewportInfo()
  const [pageData, setPageData] = React.useState(
    paginator({ items, itemsPerPage, device })
  )

  function handlePrevPage() {
    const prevPage = pageData?.prevPage === null ? 1 : pageData?.prevPage
    setPageData(() => {
      const nextPageData = paginator({
        items,
        renderedPage: prevPage,
        itemsPerPage: pageData?.itemsPerPage,
        device,
      })
      return nextPageData
    })
  }

  function handleNextPage() {
    const nextPage = pageData?.nextPage === null ? 1 : pageData?.nextPage
    setPageData(() => {
      const nextPageData = paginator({
        items,
        renderedPage: nextPage,
        itemsPerPage: pageData?.itemsPerPage,
        device,
      })
      return nextPageData
    })
  }

  return {
    ...pageData,
    goNextPage: handleNextPage,
    goPrevPage: handlePrevPage,
    slideItemRef,
  }
}

export default useSlider
