import * as React from "react"
import styled from "styled-components"

import { Title, Text } from "@typography"
import { useViewportInfo, useSlider } from "@hooks"
import { FlexContainer } from "@layouts"
import { CarouselContainer, BaseCardWrapper } from "@interactive"
import { paginator } from "@utils"
import { BaseButton } from "@buttons"
import useDeepCompareEffect from "use-deep-compare-effect"

const data = [
  {
    title: "Slide 1",
    text:
      "Do ipsum culpa adipisicing et sint ea Lorem exercitation ex aute ad ea. Cupidatat commodo sint mollit minim aute qui quis proident. Aliqua est Lorem ea anim ad ut dolore consectetur excepteur labore amet ad. Consequat cupidatat pariatur fugiat ex. int incididunt irure labore ullamco dolor labore labore eiusmod labore reprehenderit. Occaecat anim laborum cupidatat non minim. Amet dolor amet esse ad est in et qui est laboris qui laboris laboris. Dolor enim laboris officia veniam labore sit voluptate in laboris. Mollit eu do labore duis do deserunt sint quis labore cillum. Ullamco do est deserunt deserunt qui.",
    index: 0,
  },
  {
    title: "Slide 2",
    text:
      "Do ipsum culpa adipisicing et sint ea Lorem exercitation ex aute ad ea. Cupidatat commodo sint mollit minim aute qui quis proident. Aliqua est Lorem ea anim ad ut dolore consectetur excepteur labore amet ad. Consequat cupidatat pariatur fugiat ex. int incididunt irure labore ullamco dolor labore labore eiusmod labore reprehenderit. Occaecat anim laborum cupidatat non minim. Amet dolor amet esse ad est in et qui est laboris qui laboris laboris. Dolor enim laboris officia veniam labore sit voluptate in laboris. Mollit eu do labore duis do deserunt sint quis labore cillum. Ullamco do est deserunt deserunt qui.",
    index: 1,
  },
  {
    title: "Slide 3",
    text:
      "Do ipsum culpa adipisicing et sint ea Lorem exercitation ex aute ad ea. Cupidatat commodo sint mollit minim aute qui quis proident. Aliqua est Lorem ea anim ad ut dolore consectetur excepteur labore amet ad. Consequat cupidatat pariatur fugiat ex. int incididunt irure labore ullamco dolor labore labore eiusmod labore reprehenderit. Occaecat anim laborum cupidatat non minim. Amet dolor amet esse ad est in et qui est laboris qui laboris laboris. Dolor enim laboris officia veniam labore sit voluptate in laboris. Mollit eu do labore duis do deserunt sint quis labore cillum. Ullamco do est deserunt deserunt qui.",
    index: 2,
  },
  {
    title: "Slide 4",
    text:
      "Do ipsum culpa adipisicing et sint ea Lorem exercitation ex aute ad ea. Cupidatat commodo sint mollit minim aute qui quis proident. Aliqua est Lorem ea anim ad ut dolore consectetur excepteur labore amet ad. Consequat cupidatat pariatur fugiat ex. int incididunt irure labore ullamco dolor labore labore eiusmod labore reprehenderit. Occaecat anim laborum cupidatat non minim. Amet dolor amet esse ad est in et qui est laboris qui laboris laboris. Dolor enim laboris officia veniam labore sit voluptate in laboris. Mollit eu do labore duis do deserunt sint quis labore cillum. Ullamco do est deserunt deserunt qui.",
    index: 3,
  },
  {
    title: "Slide 5",
    text:
      "Do ipsum culpa adipisicing et sint ea Lorem exercitation ex aute ad ea. Cupidatat commodo sint mollit minim aute qui quis proident. Aliqua est Lorem ea anim ad ut dolore consectetur excepteur labore amet ad. Consequat cupidatat pariatur fugiat ex. int incididunt irure labore ullamco dolor labore labore eiusmod labore reprehenderit. Occaecat anim laborum cupidatat non minim. Amet dolor amet esse ad est in et qui est laboris qui laboris laboris. Dolor enim laboris officia veniam labore sit voluptate in laboris. Mollit eu do labore duis do deserunt sint quis labore cillum. Ullamco do est deserunt deserunt qui.",
    index: 4,
  },
  {
    title: "Slide 6",
    text:
      "Do ipsum culpa adipisicing et sint ea Lorem exercitation ex aute ad ea. Cupidatat commodo sint mollit minim aute qui quis proident. Aliqua est Lorem ea anim ad ut dolore consectetur excepteur labore amet ad. Consequat cupidatat pariatur fugiat ex. int incididunt irure labore ullamco dolor labore labore eiusmod labore reprehenderit. Occaecat anim laborum cupidatat non minim. Amet dolor amet esse ad est in et qui est laboris qui laboris laboris. Dolor enim laboris officia veniam labore sit voluptate in laboris. Mollit eu do labore duis do deserunt sint quis labore cillum. Ullamco do est deserunt deserunt qui.",
    index: 5,
  },
  {
    title: "Slide 7",
    text:
      "Do ipsum culpa adipisicing et sint ea Lorem exercitation ex aute ad ea. Cupidatat commodo sint mollit minim aute qui quis proident. Aliqua est Lorem ea anim ad ut dolore consectetur excepteur labore amet ad. Consequat cupidatat pariatur fugiat ex. int incididunt irure labore ullamco dolor labore labore eiusmod labore reprehenderit. Occaecat anim laborum cupidatat non minim. Amet dolor amet esse ad est in et qui est laboris qui laboris laboris. Dolor enim laboris officia veniam labore sit voluptate in laboris. Mollit eu do labore duis do deserunt sint quis labore cillum. Ullamco do est deserunt deserunt qui.",
    index: 6,
  },
  {
    title: "Slide 8",
    text:
      "Do ipsum culpa adipisicing et sint ea Lorem exercitation ex aute ad ea. Cupidatat commodo sint mollit minim aute qui quis proident. Aliqua est Lorem ea anim ad ut dolore consectetur excepteur labore amet ad. Consequat cupidatat pariatur fugiat ex. int incididunt irure labore ullamco dolor labore labore eiusmod labore reprehenderit. Occaecat anim laborum cupidatat non minim. Amet dolor amet esse ad est in et qui est laboris qui laboris laboris. Dolor enim laboris officia veniam labore sit voluptate in laboris. Mollit eu do labore duis do deserunt sint quis labore cillum. Ullamco do est deserunt deserunt qui.",
    index: 7,
  },
  {
    title: "Slide 9",
    text:
      "Do ipsum culpa adipisicing et sint ea Lorem exercitation ex aute ad ea. Cupidatat commodo sint mollit minim aute qui quis proident. Aliqua est Lorem ea anim ad ut dolore consectetur excepteur labore amet ad. Consequat cupidatat pariatur fugiat ex. int incididunt irure labore ullamco dolor labore labore eiusmod labore reprehenderit. Occaecat anim laborum cupidatat non minim. Amet dolor amet esse ad est in et qui est laboris qui laboris laboris. Dolor enim laboris officia veniam labore sit voluptate in laboris. Mollit eu do labore duis do deserunt sint quis labore cillum. Ullamco do est deserunt deserunt qui.",
    index: 8,
  },
]

// data as props
// items per page
// showArrows
// infinite(true, false)

export const ClassDetailsCarousel = ({
  items,
  itemsPerPage: _itemsPerPage,
  // device,
  showArrows,
  infinite,
}) => {
  const { width, device } = useViewportInfo()
  const { paginatedItems, goNextPage, goPrevPage, slideItemRef } = useSlider({
    items: data,
    itemsPerPage: 4,
    device,
  })

  return (
    <>
      <CarouselContainer bg="whitegray">
        {paginatedItems?.map((item, index) => {
          return (
            <BaseCardWrapper ref={slideItemRef} key={index} gap="96">
              <Title as="h3">{item.title}</Title>
              <Text>{item.text}</Text>
            </BaseCardWrapper>
          )
        })}
      </CarouselContainer>
      {/* // using buttons */}
      <FlexContainer row centerX>
        <BaseButton onClick={goPrevPage}>Prev Page</BaseButton>
        <BaseButton onClick={goNextPage}>Next Page</BaseButton>
      </FlexContainer>
    </>
  )
}

export default ClassDetailsCarousel
