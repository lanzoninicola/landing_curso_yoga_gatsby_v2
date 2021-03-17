import * as React from "react"

import { GridFluidContainer } from "@layouts"
import { useViewportInfo } from "@hooks"
import { Title } from "@typography"
import { faqsEntity } from "@domain"

import FaqMobile from "./FaqMobile"
import FaqLaptop from "./FaqLaptop"

const faqs = faqsEntity()

const Faq = () => {
  const { device } = useViewportInfo()

  return (
    <GridFluidContainer
      as="section"
      pt={{ laptop: 160, tablet: 160, mobile: 80 }}
      pl={{ laptop: 60, tablet: 60, mobile: 16 }}
      pr={{ laptop: 60, tablet: 60, mobile: 16 }}
      pb={{ laptop: 160, tablet: 160, mobile: 80 }}
      rSize=""
      bg="white"
    >
      <Title
        as="h2"
        weight="800"
        color="purple"
        mb={{ laptop: 60, tablet: 60, mobile: 40 }}
      >
        Perguntas
      </Title>
      {device === "laptop" && <FaqLaptop faqs={faqs} />}
      {device === "tablet" && <FaqLaptop faqs={faqs} />}
      {device === "mobile" && <FaqMobile faqs={faqs} />}
    </GridFluidContainer>
  )
}

export default Faq
