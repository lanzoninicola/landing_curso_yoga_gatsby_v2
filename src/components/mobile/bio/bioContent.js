import * as React from "react"

import { Title, Text } from "@typography"
import { FlexContainer, GridFixedContainer } from "@layouts"
import { FadeIn } from "@animations"

import { useExpandCollapse } from "@interactive"

import { bioEntity } from "@domain"

import { renderTextUpto } from "@utils"

const bioContent = bioEntity().all()

export const BioContent = () => {
  const { contentCollapsible, expandContent, ExpandedIcon } = useExpandCollapse(
    bioContent
  )

  return (
    <GridFixedContainer columns="1fr" rAuto gap="24">
      {contentCollapsible.map((contentItem, index) => {
        return (
          <GridFixedContainer columns="1fr" rAuto gap="4">
            <FlexContainer row key={index} centerY stretchXL>
              <Title as="h3" weight="600">
                {contentItem.title}
              </Title>
              <ExpandedIcon
                shouldExpand={contentItem.shouldExpand}
                expandContent={expandContent}
                contentId={index}
                contentExpanded={contentItem.expanded}
              />
            </FlexContainer>

            <FadeIn>
              <Text>
                {contentItem.expanded
                  ? contentItem.text
                  : renderTextUpto(contentItem.text, 60)}
              </Text>
            </FadeIn>
          </GridFixedContainer>
        )
      })}
    </GridFixedContainer>
  )
}

export default BioContent
