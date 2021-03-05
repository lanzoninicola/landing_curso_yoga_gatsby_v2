import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { motion } from "framer-motion"
import Typewriter from "typewriter-effect"

import { GridFixedContainer, FlexContainer } from "@layouts"
import { ImageQL } from "@images"
import { useViewportInfo } from "@hooks"
import { Text } from "@typography"
import { SVGIcon } from "@icons"
import { NavLink } from "@navigation"

const SplashScreen = () => {
  const { height, width } = useViewportInfo()
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
      opacity: 0.4,
      transition: {
        delay: 3,
      },
    },
    visible: {
      opacity: 1,
    },
  }

  const titlesContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1.5,
        staggerChildren: 1,
      },
    },
  }

  const item = {
    hidden: { y: 900, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <GridFixedContainer
      columns="1fr"
      rows="1fr .1fr .1fr"
      h={height}
      hFixed
      gap="0"
      centerX
      centerY
      pt="16"
      pb="16"
    >
      <motion.div
        variants={imageAnimation}
        initial="hidden"
        animate="visible"
        style={{ height: "100%", width: "100%" }}
      >
        <ImageQL data={data} alt="Mulher em posiçao facil" />
      </motion.div>
      <FlexContainer row centerX centerY pl="24" pr="24">
        <Text>
          <Typewriter
            onInit={typewriter => {
              typewriter
                .typeString(
                  "Lorem Ipsum advocata nostra volta nost fodas puram de pboor"
                )

                .pauseFor(1000)
                // .deleteAll()
                // .typeString("Welcomes You")
                .start()
            }}
          />
        </Text>
      </FlexContainer>

      <NavLink
        to={{
          type: "link",
          value: "/curso",
        }}
      >
        <FlexContainer row stretchXS>
          <Text size={{ laptop: 32, tablet: 32, mobile: 32 }}>Entre</Text>
          <SVGIcon name="ARROW_RIGHT" pl="8" />
        </FlexContainer>
      </NavLink>
    </GridFixedContainer>
  )
}

export default SplashScreen
