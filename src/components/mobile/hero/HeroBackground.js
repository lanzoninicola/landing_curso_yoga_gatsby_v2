import * as React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import { useViewportInfo } from "@hooks"
import { BackgroundImg } from "@images"

const GradientLayer1 = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  background: linear-gradient(
    90deg,
    rgba(183, 183, 183, 0.2) -0.62%,
    rgba(94, 92, 93, 0.62) 10.89%
  );
`

const Hero = () => {
  const { device, height, width } = useViewportInfo()
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
        {childre}
      </BackgroundImg>
    </>
  )
}

export default Hero
