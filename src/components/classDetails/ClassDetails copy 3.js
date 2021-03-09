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

const ClassDetailsCarousel = () => {
  const containerRef = React.useRef(null)
  const { height } = useViewportInfo()
  const { scrollY, scrollYProgress } = useViewportScroll()

  const scale = useMotionValue(0)

  const frameScale = useTransform(scrollYProgress, [0, 0.1], [0, 2])

  console.log(containerRef)

  return (
    <motion.div
      ref={containerRef}
      // style={{ scale }}
    >
      <FlexContainer
        // style={{ scale: frameScale, overflow: "hidden" }}
        h={height}
        bg="red"
      >
        <Text>Hello world</Text>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
      </FlexContainer>
    </motion.div>
    // <CarouselContainer bg="black" pl="24">
    //   <CarouselCard
    //     // p="20 30 20 30" // this is ok for mobile
    //     //p="80 120 80 120"
    //     gap="200"
    //   >
    //     <Text>Hello world</Text>
    //     <Text>Hello world</Text>
    //     <Text>Hello world</Text>
    //   </CarouselCard>
    //   <CarouselCard
    //     id="hero-carousel-card"
    //     h100
    //     // p="20 30 20 30" // this is ok for mobile
    //     p="80 120 80 120"
    //   >
    //     fuck you
    //   </CarouselCard>
    //   <CarouselCard
    //     id="hero-carousel-card"
    //     h100
    //     // p="20 30 20 30" // this is ok for mobile
    //     p="80 120 80 120"
    //   >
    //     fuck you
    //   </CarouselCard>
    //   <CarouselCard
    //     id="hero-carousel-card"
    //     h100
    //     // p="20 30 20 30" // this is ok for mobile
    //     p="80 120 80 120"
    //   >
    //     fuck you
    //   </CarouselCard>
    //   <CarouselCard
    //     id="hero-carousel-card"
    //     h100
    //     // p="20 30 20 30" // this is ok for mobile
    //     p="80 120 80 120"
    //   >
    //     fuck you
    //   </CarouselCard>
    //   <CarouselCard
    //     id="hero-carousel-card"
    //     h100
    //     // p="20 30 20 30" // this is ok for mobile
    //     p="80 120 80 120"
    //   >
    //     fuck you
    //   </CarouselCard>
    // </CarouselContainer>
  )
}

export default ClassDetailsCarousel
