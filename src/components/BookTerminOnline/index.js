import React from "react"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { graphql, useStaticQuery } from "gatsby"

const TerminBookingSection = styled.section`
  background-image: ${props => `url(${props.background})`};
  background-size: cover;
  background-position: left bottom;
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 2px solid yellow;
  padding: 60px;
  position: relative;
  color: white;
  z-index: 15;

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    opacity: 0.6;
    height: 100%;
    width: 100%;
    background-color: black;
  }
`
const BookOnlineContent = graphql`
  {
    contentfulOnlineTerminBookingSection {
      buttonTitle
      imageBackground {
        file {
          url
        }
      }
      title
      content {
        json
      }
    }
  }
`
function BookTerminOnline() {
  const data = useStaticQuery(BookOnlineContent)
  return (
    <TerminBookingSection
      background={
        data.contentfulOnlineTerminBookingSection.imageBackground.file.url
      }
    >
      <h2>{data.contentfulOnlineTerminBookingSection.title}</h2>
      <div>
        {documentToReactComponents(
          data.contentfulOnlineTerminBookingSection.content.json
        )}
      </div>
    </TerminBookingSection>
  )
}

export default BookTerminOnline
