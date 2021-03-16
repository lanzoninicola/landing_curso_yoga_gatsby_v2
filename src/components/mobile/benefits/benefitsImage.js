import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { motion } from "framer-motion"

import { ImageQL } from "@images"
import { useViewportInfo } from "@hooks"

const BenefitsImage = () => {
  const { device } = useViewportInfo()
  const data = useStaticQuery(graphql`
    query BenefitsImage {
      laptop: allFile(filter: { sourceInstanceName: { eq: "core" } }) {
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
      tablet: allFile(filter: { sourceInstanceName: { eq: "core" } }) {
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
      mobile: allFile(filter: { sourceInstanceName: { eq: "core" } }) {
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

  const imageAnimation = {
    hidden: {
      opacity: 1,
      transition: {
        duration: 3,
      },
    },
    visible: {
      opacity: 0.1,
    },
  }

  return (
    <motion.div
      variants={imageAnimation}
      initial="hidden"
      animate="visible"
      style={{
        height: "50%",
        width: "150%",
        top: 0,
        position: "absolute",
        maxWidth: "100%",
      }}
    >
      <ImageQL data={data} alt="Mulher em posiçao facil" />
    </motion.div>
  )
}

export default BenefitsImage
