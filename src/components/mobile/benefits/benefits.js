import * as React from "react"
import Typewriter from "typewriter-effect"

import {
  FlexContainer,
  GridFluidContainer,
  GridFixedContainer,
  SizedBox,
} from "@layouts"
import { useViewportInfo } from "@hooks"
import { Title, Text } from "@typography"

import BenefitsImage from "./benefitsImage"

import { benefitsEntity } from "@domain"

const data = benefitsEntity()

const Benefits = () => {
  const { device, height, width } = useViewportInfo()

  return (
    <>
      <GridFluidContainer as="section" bg="white">
        <BenefitsImage />
        <FlexContainer
          columns
          hFixed
          centerY
          centerX
          pt={{ laptop: 112, tablet: 112, mobile: 32 }}
          pb={{ laptop: 112, tablet: 112, mobile: 32 }}
        >
          <GridFixedContainer
            columns="1fr"
            rows=".1fr 1fr .1fr"
            pl={{ laptop: 112, tablet: 112, mobile: 32 }}
            pr={{ laptop: 112, tablet: 112, mobile: 32 }}
            gap="24"
          >
            <Title as="h3">
              O que você diria se realmente houvesse uma maneira para isso:
            </Title>
            <GridFixedContainer columns="1fr" rAuto gap="8">
              {data.map((item, index) => {
                return (
                  <Text key={index} color="black">
                    {item.text}
                  </Text>
                )
              })}
            </GridFixedContainer>
            {/* <GridFixedContainer columns=".25fr 1fr" rows="1fr" gap="0" pr="16">
              <SizedBox />
              <GridFixedContainer columns="1fr" rAuto>
                {data.map((item, index) => {
                  return (
                    <Text key={index} mb="16" color="black">
                      {item.text}
                    </Text>
                  )
                })}
              </GridFixedContainer>
            </GridFixedContainer> */}
            <Text>
              Foi exatamente por isso que criei este curso. Quero ajudar a
              facilitar as coisas para vocês.
            </Text>
          </GridFixedContainer>
        </FlexContainer>
      </GridFluidContainer>
    </>
  )
}

export default Benefits
