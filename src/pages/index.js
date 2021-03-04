import * as React from "react"
import SEO from "../components/seo"
import { WebsiteLayout } from "@templates"
import { useViewportInfo } from "@hooks"

const IndexPage = () => {
  const { device } = useViewportInfo()

  return (
    <WebsiteLayout>
      <SEO title="Home" />
    </WebsiteLayout>
  )
}

export default IndexPage
