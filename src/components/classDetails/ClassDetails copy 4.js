import * as React from "react"
import styled from "styled-components"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { wrap } from "popmotion"

import { Title, Text } from "@typography"
import { useViewportInfo } from "@hooks"
import { GridFixedContainer, SizedBox } from "@layouts"

export const images = [
  "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
]

const data = [
  {
    title: "Slide 1",
    text:
      "Do ipsum culpa adipisicing et sint ea Lorem exercitation ex aute ad ea. Cupidatat commodo sint mollit minim aute qui quis proident. Aliqua est Lorem ea anim ad ut dolore consectetur excepteur labore amet ad. Consequat cupidatat pariatur fugiat ex. int incididunt irure labore ullamco dolor labore labore eiusmod labore reprehenderit. Occaecat anim laborum cupidatat non minim. Amet dolor amet esse ad est in et qui est laboris qui laboris laboris. Dolor enim laboris officia veniam labore sit voluptate in laboris. Mollit eu do labore duis do deserunt sint quis labore cillum. Ullamco do est deserunt deserunt qui.",
  },
  {
    title: "Slide 2",
    text:
      "Do ipsum culpa adipisicing et sint ea Lorem exercitation ex aute ad ea. Cupidatat commodo sint mollit minim aute qui quis proident. Aliqua est Lorem ea anim ad ut dolore consectetur excepteur labore amet ad. Consequat cupidatat pariatur fugiat ex. int incididunt irure labore ullamco dolor labore labore eiusmod labore reprehenderit. Occaecat anim laborum cupidatat non minim. Amet dolor amet esse ad est in et qui est laboris qui laboris laboris. Dolor enim laboris officia veniam labore sit voluptate in laboris. Mollit eu do labore duis do deserunt sint quis labore cillum. Ullamco do est deserunt deserunt qui.",
  },
  {
    title: "Slide 3",
    text:
      "Do ipsum culpa adipisicing et sint ea Lorem exercitation ex aute ad ea. Cupidatat commodo sint mollit minim aute qui quis proident. Aliqua est Lorem ea anim ad ut dolore consectetur excepteur labore amet ad. Consequat cupidatat pariatur fugiat ex. int incididunt irure labore ullamco dolor labore labore eiusmod labore reprehenderit. Occaecat anim laborum cupidatat non minim. Amet dolor amet esse ad est in et qui est laboris qui laboris laboris. Dolor enim laboris officia veniam labore sit voluptate in laboris. Mollit eu do labore duis do deserunt sint quis labore cillum. Ullamco do est deserunt deserunt qui.",
  },
]

const SlideshowArrow = styled.div`
  top: calc(50% - 20px);
  position: absolute;
  background: white;
  border-radius: 30px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  z-index: 2;
`

const variants = {
  enter: direction => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: direction => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
}

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity
}

export const ClassDetailsCarousel = () => {
  const { height, width } = useViewportInfo()
  const [[page, direction], setPage] = useState([0, 0])

  const dataIndex = wrap(0, data.length, page)

  const paginate = newDirection => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <GridFixedContainer columns="1fr" rAuto h={height}>
      <div>son qua</div>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1)
            }
          }}
          style={{
            // position: "absolute",
            maxWidth: "100vw",
            color: "blue",
            height: "auto",
          }}
        >
          <GridFixedContainer
            columns="1fr"
            rAuto
            pl="20"
            pr="20"
            ml="20"
            mr="20"
            style={{
              borderRadius: "25px",
              border: "1px solid black",
            }}
          >
            <img src="" alt="" />
            <Title as="h1" color="black">
              {data[dataIndex].title}
            </Title>
            <Text color="black">{data[dataIndex].text}</Text>
          </GridFixedContainer>
        </motion.div>
      </AnimatePresence>
      {/* <SlideshowArrow onClick={() => paginate(1)}>{"‣"}</SlideshowArrow>
      <SlideshowArrow onClick={() => paginate(-1)}>{"‣"}</SlideshowArrow> */}
    </GridFixedContainer>
  )
}

export default ClassDetailsCarousel
