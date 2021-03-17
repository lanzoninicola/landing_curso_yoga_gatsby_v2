import * as React from "react"
import { Title, SmallText } from "@typography"
import { useSlider } from "@interactive"
import { GridFixedContainer } from "@layouts"
import {
  CarouselMobileContainer,
  BaseCardWrapper,
  CarouselChevron,
} from "@interactive"
import { BaseButton } from "@buttons"

import { classDetailsEntity } from "@domain"
import { FadeIn } from "@animations"
import ClassDetailsCardInner from "./ClassDetailsCardInner"

const data = classDetailsEntity()

// data as props
// items per page
// showArrows
// infinite(true, false)

export const ClassDetailsMobileCarousel = ({
  items,
  itemsPerPage: _itemsPerPage,
  // device,
  showArrows,
  infinite,
}) => {
  // const { width, device } = useViewportInfo()
  const {
    page,
    paginatedItems,
    goNextPage,
    goPrevPage,
    slideItemRef,
  } = useSlider({
    items: data,
    itemsPerPage: 4,
  })

  return (
    <>
      <CarouselMobileContainer>
        {paginatedItems?.map((item, index) => {
          return (
            <FadeIn key={index} duration="1.5" triggerOnce={false}>
              <BaseCardWrapper ref={slideItemRef} gap="96">
                <ClassDetailsCardInner item={item} />
              </BaseCardWrapper>
            </FadeIn>
          )
        })}

        {/* <div
              style={{
                marginLeft: "-20px",
                transform: "rotate(90deg)",
                border: "1px solid black",
              }}
            >
              Hello World
            </div> */}
        {/* // using arrows */}

        <CarouselChevron
          page={page}
          goNextPage={goNextPage}
          goPrevPage={goPrevPage}
        />
      </CarouselMobileContainer>

      {/* // using buttons */}
      {/* <FlexContainer row centerX>
        <BaseButton onClick={goPrevPage}>Prev Page</BaseButton>
        <BaseButton onClick={goNextPage}>Next Page</BaseButton>
      </FlexContainer> */}
    </>
  )
}

export default ClassDetailsMobileCarousel
