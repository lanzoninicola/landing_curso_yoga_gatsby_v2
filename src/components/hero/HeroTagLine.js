import * as React from "react"
import Typewriter from "typewriter-effect"

import { FlexContainer } from "@layouts"
import { Title } from "@typography"

// import tagLines from "./tagLines"

const HeroTagLine = ({ showArrow }) => {
  const [firstLineText, setFirstLineText] = React.useState("para")

  const titlesContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 5,
        staggerChildren: 1,
      },
    },
  }

  return (
    <FlexContainer
      column
      variants={titlesContainer}
      initial="hidden"
      animate="visible"
      stretchY
    >
      <Title as="h1" pb="8">
        {firstLineText === "para" && (
          <Typewriter
            onInit={typewriter => {
              typewriter
                .typeString("para")
                .pauseFor(1200)
                .pauseFor(1200)
                .start()
            }}
          />
        )}
        {firstLineText === "por" && (
          <Typewriter
            onInit={typewriter => {
              typewriter.typeString("por").pauseFor(1200).pauseFor(1200).start()
            }}
          />
        )}
      </Title>
      <Title as="h1">
        <Typewriter
          onInit={typewriter => {
            typewriter
              .typeString('<span style="color: #27ae60">sua mente</span>')
              .pauseFor(1200)
              .deleteChars(9)
              .pauseFor(1200)
              .typeString(
                '<span style="color: #058EC5">seus pensamentos</span>'
              )
              .pauseFor(1200)
              .deleteChars(22)
              .pauseFor(600)
              .callFunction(() => {
                setFirstLineText("por")
              })
              .typeString('<span style="color: #DB1629">suas emoções</span>')
              .pauseFor(1200)
              .deleteChars(16)
              .pauseFor(600)
              .callFunction(() => setFirstLineText("para"))
              .typeString('<span style="color: #A4347E">dores lombares</span>')

              .pauseFor(1200)
              .deleteChars(30)
              .pauseFor(600)
              .callFunction(() => setFirstLineText("por"))
              .typeString(
                '<span style="color: #F5C719">estresse e ansiedade</span>'
              )
              .pauseFor(1200)
              .deleteChars(24)
              .pauseFor(600)
              .callFunction(() => setFirstLineText(""))
              .typeString('para <span style="color: #058EC5">você</span>')
              .pauseFor(1200)
              .start()
              .callFunction(() => showArrow(true))
          }}
        />
      </Title>
    </FlexContainer>
  )
}

export default HeroTagLine
