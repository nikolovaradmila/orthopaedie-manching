import React from "react"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const IntroSection = styled.div`
  max-width: 100%;
  display: flex;
  padding: 20px;
  justify-content: space-between;
`

const TextContainer = styled.div`
  padding: 20px;
  flex: 1;
`

const ImageContainer = styled.div`
  position: relative;
  flex: 1;
  padding: 20px;
`

const Image = styled(Img)`
  position: absolute;

  height: 400px;
  outline: 5px solid ${({ theme }) => theme.palette.mainOrange};
  outline-offset: 10px;
  transition: all 0.5s;

  &:hover {
    outline-offset: 20px;
  }
`

const getIntroContent = graphql`
  {
    contentfulIntro {
      mainTitle
      textContent {
        json
      }
      introImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
function Intro() {
  const data = useStaticQuery(getIntroContent)
  return (
    <IntroSection>
      <TextContainer>
        {documentToReactComponents(data.contentfulIntro.textContent.json)}
      </TextContainer>

      <ImageContainer>
        <Image fluid={data.contentfulIntro.introImage.fluid}></Image>
      </ImageContainer>
    </IntroSection>
  )
}

export default Intro
