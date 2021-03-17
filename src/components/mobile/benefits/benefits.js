import * as React from "react"

import { GridFluidSection, FlexContainer, GridFixedContainer } from "@layouts"
import { Title, Text } from "@typography"

import BenefitsImage from "./benefitsImage"
import { benefitsEntity } from "@domain"

const data = benefitsEntity()

const Benefits = () => {
  return (
    <>
      <GridFluidSection bg="white">
        <BenefitsImage />
        <FlexContainer columns hFixed centerY centerX>
          <GridFixedContainer columns="1fr" rows=".1fr 1fr .1fr" gap="24">
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
            <Text>
              Foi exatamente por isso que criei este curso. Quero ajudar a
              facilitar as coisas para vocês.
            </Text>
          </GridFixedContainer>
        </FlexContainer>
      </GridFluidSection>
    </>
  )
}

export default Benefits
