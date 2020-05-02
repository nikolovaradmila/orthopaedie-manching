import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 8rem);
  background-image: ${props => `url(${props.background})`};
`

const Cover = styled.div`
  position: absolute;
  top: 8rem;
  left: 0;
  width: 100%;
  height: calc(100vh - 8rem);
  background-color: black;
  opacity: 0.6;
`

const TextContent = styled.div`
  position: absolute;
  max-width: 60%;
  top: 50%;
  left: 10px;
  color: white;

  h1 {
  }
`

const getHeroComponentContent = graphql`
  {
    contentfulHeroComponent {
      mainBannerImage {
        file {
          url
        }
        title
      }
      title
      subtitle
      buttonText
    }
  }
`

function Hero() {
  const data = useStaticQuery(getHeroComponentContent)
  return (
    <>
      <HeroContainer
        background={data.contentfulHeroComponent.mainBannerImage.file.url}
      ></HeroContainer>
      <Cover></Cover>
      <TextContent>
        <h1>{data.contentfulHeroComponent.title}</h1>
        <p>{data.contentfulHeroComponent.subtitle}</p>
      </TextContent>
    </>
  )
}

export default Hero
