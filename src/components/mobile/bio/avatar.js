import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { SmallText } from "@typography"
import { GridFixedContainer, FlexContainer, Padding } from "@layouts"
import { ImageQL } from "@images"

export const Avatar = () => {
  const data = useStaticQuery(graphql`
    query Avatar {
      laptop: allFile(
        filter: {
          sourceInstanceName: { eq: "core" }
          relativePath: { eq: "dioni_mara_avatar.png" }
        }
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
        filter: {
          sourceInstanceName: { eq: "core" }
          relativePath: { eq: "dioni_mara_avatar.png" }
        }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 1024, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
                originalName
              }
            }
          }
        }
      }
      mobile: allFile(
        filter: {
          sourceInstanceName: { eq: "core" }
          relativePath: { eq: "dioni_mara_avatar.png" }
        }
      ) {
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
      <GridFixedContainer columns="1fr" rAuto>
        <FlexContainer centerX centerY>
          <FlexContainer row h="168" w="168" centerX centerY>
            <ImageQL data={data} alt="Imagem de professora Dioni Mara" />
          </FlexContainer>
        </FlexContainer>
        <FlexContainer columns centerX centerY>
          <SmallText>Dioni Mara</SmallText>
          <SmallText>Ardas Ananda Kaur</SmallText>
        </FlexContainer>
      </GridFixedContainer>
    </>
  )
}

export default Avatar
