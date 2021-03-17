import * as React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import { GridFixedContainer, SizedBox } from "@layouts"
import { useViewportInfo } from "@hooks"
import { ImageQL, BackgroundImg } from "@images"
import { Title } from "@typography"

import { BaseButton, OutlineButton } from "@buttons"

import HeroBackground from "./HeroBackground"

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

  return (
    <>
      <GridFixedContainer
        h={height}
        as="section"
        columns="1fr"
        rows="1fr"
        gap="0"
        centerX
        centerY
        hFixed
        sticky
      >
        <HeroBackground>
          <GradientLayer1 />
          <GridFixedContainer
            h={height}
            hFixed
            columns=".25fr 1fr"
            rows="1fr"
            gap="0"
            centerY
            pr="16"
          >
            <SizedBox />
            <SizedBox>
              <Title as="h1" color="white" mb="16">
                20 encontros pra melhorar
              </Title>
              <Title
                as="h2"
                weight="800"
                variant="secondary"
                color="white"
                mb="16"
              >
                Lorem Ipsum advocada vostra homapa lompa giuggola
              </Title>
              <BaseButton>Eu quero partecipar ao curso</BaseButton>
              <OutlineButton>Agenda no teu calendario</OutlineButton>
            </SizedBox>
          </GridFixedContainer>
        </HeroBackground>
      </GridFixedContainer>
    </>
  )
}

export default Hero
