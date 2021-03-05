import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GridFixedContainer, GridFluidContainer } from "@layouts"
import { ImageQL } from "@images"
import { useViewportInfo } from "@hooks"
import { Title } from "@typography"
import { ButtonBase } from "@buttons"
import { motion } from "framer-motion"

const SplashScreen = () => {
  const { height } = useViewportInfo()
  const data = useStaticQuery(graphql`
    query SplashScreenImage2 {
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
    <GridFluidContainer h={height} hFixed gap="0" pt="16" pb="16">
      <motion.div
        variants={imageAnimation}
        initial="visible"
        animate="hidden"
        style={{ height: "100%", width: "100%", position: "absolute" }}
      >
        <ImageQL data={data} alt="Mulher em posiçao facil" />
      </motion.div>

      <GridFixedContainer
        columns="1fr" // TODO: change this in desktop layout
        rows="1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr" // TODO: change this in desktop layout
        h100
        centerY
        variants={titlesContainer}
        initial="hidden"
        animate="visible"
        pl="16"
      >
        <motion.div variants={item}>
          <Title as="h3" color="#058EC5">
            para sua mente
          </Title>
        </motion.div>
        <motion.div variants={item}>
          <Title as="h3" color="#058EC5">
            para seus pensamentos
          </Title>
        </motion.div>
        <motion.div variants={item}>
          <Title as="h3" color="#DB1629">
            por suas emoções
          </Title>
        </motion.div>
        <motion.div variants={item}>
          <Title as="h3" color="#A4347E">
            para dores lombares
          </Title>
        </motion.div>
        <motion.div variants={item}>
          <Title as="h3" color="#A4347E">
            para sua flexibilidade
          </Title>
        </motion.div>
        <motion.div variants={item}>
          <Title as="h3" color="#A4347E">
            para suas articulações
          </Title>
        </motion.div>
        <motion.div variants={item}>
          <Title as="h3" color="#A4347E">
            para dores nas costas
          </Title>
        </motion.div>
        <motion.div variants={item}>
          <Title as="h3" color="#87A8D5">
            para melhorar sua respiração
          </Title>
        </motion.div>
        <motion.div variants={item}>
          <Title as="h3" color="#F5C719">
            por estresse e ansiedade
          </Title>
        </motion.div>

        <ButtonBase>Entre</ButtonBase>
      </GridFixedContainer>
    </GridFluidContainer>
  )
}

export default SplashScreen
