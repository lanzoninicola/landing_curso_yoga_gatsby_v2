import * as React from "react"
import SEO from "../components/seo"
import { WebsiteLayout } from "@templates"
import { useViewportInfo } from "@hooks"
import SplashScreen from "../components/splashScreen/SplashScreen"

const IndexPage = () => {
  const { device } = useViewportInfo()

  return (
    <WebsiteLayout>
      <SEO title="Home" />
      <SplashScreen />
    </WebsiteLayout>
  )
}

export default IndexPage
