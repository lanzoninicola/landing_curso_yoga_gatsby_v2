import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { GridFixedContainer, SizedBox } from "@layouts"
import { useViewportInfo } from "@hooks"
import { ImageQL } from "@images"

const Hero = () => {
  const { device, height } = useViewportInfo()
  const data = useStaticQuery(graphql`
    query HeroImage {
      laptop: allFile(
        filter: { sourceInstanceName: { eq: "heroBackground" } }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 1920, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
                originalName
              }
            }
          }
        }
      }
      tablet: allFile(
        filter: { sourceInstanceName: { eq: "heroBackground" } }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 1920, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
                originalName
              }
            }
          }
        }
      }
      mobile: allFile(
        filter: { sourceInstanceName: { eq: "heroBackground" } }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 1920, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
                originalName
              }
            }
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <>
      <GridFixedContainer
        as="section"
        columns="1fr 0.1fr"
        rows="1fr"
        h={height}
        hFixed
        gap="0"
        centerX
        centerY
        pt="16"
        pb="16"
        sticky
      >
        <ImageQL data={data} />

        <div></div>
      </GridFixedContainer>
    </>
  )
}

export default Hero
