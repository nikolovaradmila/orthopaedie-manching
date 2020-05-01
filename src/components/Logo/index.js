import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

const LogoOuterContainer = styled.div`
  height: 70px;
  width: 70px;
  background-color: #333333;
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1;
`

const LogoInnerContainer = styled.div`
  height: 50px;
  width: 50px;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  z-index: 2;
`

const LogoIcon = styled.img`
  height: 55px;
  width: 55px;
  margin: 0;
`

const getLogo = graphql`
  {
    contentfulLogo {
      logoIcon {
        file {
          url
        }
      }
    }
  }
`

function Logo() {
  const data = useStaticQuery(getLogo)

  return (
    <LogoOuterContainer>
      <LogoInnerContainer>
        <LogoIcon src={data.contentfulLogo.logoIcon.file.url} />
      </LogoInnerContainer>
    </LogoOuterContainer>
  )
}

export default Logo
