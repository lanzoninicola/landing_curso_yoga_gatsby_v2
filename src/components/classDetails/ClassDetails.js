import * as React from "react"

import { useViewportInfo } from "@hooks"

import CarouselSlide from "../../styling/carousel/carouselSlide"
import CarouselSlideCard from "../../styling/carousel/carouselSlideCard"

const ClassDetailsCarousel = () => {
  const { device } = useViewportInfo()

  return (
    <CarouselSlide id="hero-carousel">
      <CarouselSlideCard
        id="hero-carousel-card"
        h100
        // p="20 30 20 30" // this is ok for mobile
        p="80 120 80 120"
      >
        fuck you
      </CarouselSlideCard>
      <CarouselSlideCard
        id="hero-carousel-card"
        h100
        // p="20 30 20 30" // this is ok for mobile
        p="80 120 80 120"
      >
        fuck you
      </CarouselSlideCard>
      <CarouselSlideCard
        id="hero-carousel-card"
        h100
        // p="20 30 20 30" // this is ok for mobile
        p="80 120 80 120"
      >
        fuck you
      </CarouselSlideCard>
      <CarouselSlideCard
        id="hero-carousel-card"
        h100
        // p="20 30 20 30" // this is ok for mobile
        p="80 120 80 120"
      >
        fuck you
      </CarouselSlideCard>
      <CarouselSlideCard
        id="hero-carousel-card"
        h100
        // p="20 30 20 30" // this is ok for mobile
        p="80 120 80 120"
      >
        fuck you
      </CarouselSlideCard>
      <CarouselSlideCard
        id="hero-carousel-card"
        h100
        // p="20 30 20 30" // this is ok for mobile
        p="80 120 80 120"
      >
        fuck you
      </CarouselSlideCard>
    </CarouselSlide>
  )
}

export default ClassDetailsCarousel
