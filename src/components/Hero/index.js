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

const getHeroComponentContent = graphql`
  {
    contentfulHeroComponent {
      mainBannerImage {
        file {
          url
        }
        title
      }
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
    </>
  )
}

export default Hero
