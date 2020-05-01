import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

const HeroContainer = styled.div`
  width: 100%;
  height: 50vh;
  background: ${props => `url(${props.background})`};
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
    <HeroContainer
      background={data.contentfulHeroComponent.mainBannerImage.file.url}
    ></HeroContainer>
  )
}

export default Hero
