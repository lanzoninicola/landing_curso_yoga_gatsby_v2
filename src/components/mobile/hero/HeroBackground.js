import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { useViewportInfo } from "@hooks"
import { BackgroundImg } from "@images"

const Hero = ({ children }) => {
  const { device, height } = useViewportInfo()
  const data = useStaticQuery(graphql`
    query HeroMobile {
      mobile: allFile(filter: { sourceInstanceName: { eq: "mobile" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 375, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
                originalName
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <BackgroundImg data={data} device={device} h={height}>
        {children}
      </BackgroundImg>
    </>
  )
}

export default Hero
