import * as React from "react"
import {
  motion,
  useViewportScroll,
  useTransform,
  useMotionValue,
} from "framer-motion"

import { useViewportInfo } from "@hooks"
import { FlexContainer } from "@layouts"

import { CarouselContainer, CarouselCard } from "@interactive"

import { Text } from "@typography"

const ClassDetailsCarousel2 = () => {
  const containerRef = React.useRef(null)

  return (
    <CarouselContainer bg="black" pl="24">
      <CarouselCard
        // p="20 30 20 30" // this is ok for mobile
        //p="80 120 80 120"
        gap="200"
      >
        <Text>Hello world</Text>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
      </CarouselCard>
      <CarouselCard
        id="hero-carousel-card"
        h100
        // p="20 30 20 30" // this is ok for mobile
        p="80 120 80 120"
      >
        fuck you
      </CarouselCard>
      <CarouselCard
        id="hero-carousel-card"
        h100
        // p="20 30 20 30" // this is ok for mobile
        p="80 120 80 120"
      >
        fuck you
      </CarouselCard>
      <CarouselCard
        id="hero-carousel-card"
        h100
        // p="20 30 20 30" // this is ok for mobile
        p="80 120 80 120"
      >
        fuck you
      </CarouselCard>
      <CarouselCard
        id="hero-carousel-card"
        h100
        // p="20 30 20 30" // this is ok for mobile
        p="80 120 80 120"
      >
        fuck you
      </CarouselCard>
      <CarouselCard
        id="hero-carousel-card"
        h100
        // p="20 30 20 30" // this is ok for mobile
        p="80 120 80 120"
      >
        fuck you
      </CarouselCard>
    </CarouselContainer>
  )
}

export default ClassDetailsCarousel2
