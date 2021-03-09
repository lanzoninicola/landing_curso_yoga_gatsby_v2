import * as React from "react"

import { FlexContainer, GridFixedContainer } from "@layouts"
import { Divider } from "@decorative"
import { FadeIn } from "@animations"

import FaqTitle from "./FaqTitle"
import FaqText from "./FaqText"
import FaqMobileIcon from "./FaqMobileIcon"

const FaqMobile = ({ faqs }) => {
  const [faqsRendered, setFaqRendered] = React.useState(faqs)

  function handleShowAnswer(index) {
    setFaqRendered(() => {
      let nextFaqsRendered = [...faqsRendered]
      let faqAnswer = nextFaqsRendered[index].showAnswer
      nextFaqsRendered[index].showAnswer = !faqAnswer
      return nextFaqsRendered
    })
  }

  return faqsRendered.map((faq, index) => {
    return (
      <FlexContainer key={index} column>
        <GridFixedContainer columns="1fr .1fr" rows="1fr .1fr" centerY>
          <FaqTitle>{faq.title}</FaqTitle>
          <FaqMobileIcon
            handleShowAnswer={handleShowAnswer}
            answerIndex={index}
            answerShown={faq.showAnswer}
          />
        </GridFixedContainer>

        {faq.showAnswer && (
          <FadeIn>
            <FaqText>{faq.text}</FaqText>
          </FadeIn>
        )}
        <Divider color="#A4347E" />
      </FlexContainer>
    )
  })
}

export default FaqMobile
