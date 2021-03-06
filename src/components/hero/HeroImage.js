import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { motion } from "framer-motion"

import { ImageQL } from "@images"
import { useViewportInfo } from "@hooks"

const HeroImage = () => {
  const { device } = useViewportInfo()
  const data = useStaticQuery(graphql`
    query SplashScreenImage {
      laptop: allFile(filter: { sourceInstanceName: { eq: "splashScreen" } }) {
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
      tablet: allFile(filter: { sourceInstanceName: { eq: "splashScreen" } }) {
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
      mobile: allFile(filter: { sourceInstanceName: { eq: "splashScreen" } }) {
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
      x: 0,
      opacity: 1,
      transition: {
        duration: 3,
      },
    },
    visible: {
      x: device === "laptop" ? -450 : -230,
      opacity: 0.5,
    },
  }

  return (
    <motion.div
      variants={imageAnimation}
      initial="hidden"
      animate="visible"
      style={{ height: "100%", width: "150%", position: "absolute" }}
    >
      <ImageQL data={data} alt="Mulher em posiçao facil" />
    </motion.div>
  )
}

export default HeroImage
