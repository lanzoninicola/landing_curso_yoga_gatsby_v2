import * as React from "react"
import SEO from "../components/seo"

import { WebsiteLayout } from "@templates"
import { useViewportInfo } from "@hooks"

import Hero from "../components/mobile/hero/Hero"
import ClassDate from "../components/classDate/ClassDate"
import Faq from "../components/faq/Faq"
import ClassDateCTA from "../components/classDate/ClassDateCTA"
import ClassDetailsCarousel from "../components/classDetails/ClassDetails"
import ClassDetailsCarousel2 from "../components/classDetails/ClassDetails copy"
import Differential from "../components/mobile/differential/differential"
import Quality from "../components/mobile/quality/quality"
import Benefits from "../components/mobile/benefits/benefits"

const IndexPage = () => {
  const { device } = useViewportInfo()

  return (
    <WebsiteLayout>
      <SEO title="Home" />
      <div style={{ height: "1610vh" }}>
        <div style={{ position: "relative" }}>
          <Hero />
          <Differential />
          <Quality />
          <Benefits />
          {/*<ClassDate />
          <ClassDateCTA />*/}
          <Faq />
          <ClassDetailsCarousel />
        </div>
      </div>
    </WebsiteLayout>
  )
}

export default IndexPage
