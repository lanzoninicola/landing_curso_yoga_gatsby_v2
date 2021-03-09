import * as React from "react"
import SEO from "../components/seo"

import { WebsiteLayout } from "@templates"
import { useViewportInfo } from "@hooks"

import Hero from "../components/hero/hero"
import ClassDate from "../components/classDate/ClassDate"
import Faq from "../components/faq/Faq"
import ClassDateCTA from "../components/classDate/ClassDateCTA"
import ClassDetailsCarousel from "../components/classDetails/ClassDetails"
import ClassDetailsCarousel2 from "../components/classDetails/ClassDetails copy"

const IndexPage = () => {
  const { device } = useViewportInfo()

  return (
    <WebsiteLayout>
      <SEO title="Home" />
      <div style={{ height: "1610vh" }}>
        <div style={{ position: "relative" }}>
          {/* <Hero />
          <ClassDate />
          <ClassDateCTA />*/}
          <Faq />
          <ClassDetailsCarousel />
        </div>
      </div>
    </WebsiteLayout>
  )
}

export default IndexPage
