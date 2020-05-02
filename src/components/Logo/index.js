import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

const MainLogoContainer = styled.div`
  display: flex;
`

const LogoOuterContainer = styled.div`
  height: 60px;
  width: 60px;
  background-color: #333333;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

const LogoInnerContainer = styled.div`
  height: 45px;
  width: 45px;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  z-index: 2;
`

const LogoIcon = styled.img`
  height: 40px;
  width: 40px;
  margin: 0;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: normal;
  padding: 0px 10px;
  justify-content: center;
  .heading {
    font-size: 2rem;
    letter-spacing: 3.5px;
    margin-bottom: 0.3rem;
  }
  .subheading {
    font-size: 1.5rem;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.palette.mainOrange};
  }
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
    <MainLogoContainer>
      <LogoOuterContainer>
        <LogoInnerContainer>
          <LogoIcon src={data.contentfulLogo.logoIcon.file.url} />
        </LogoInnerContainer>
      </LogoOuterContainer>
      <TextContainer>
        <p className="heading">OCG MANCHING</p>
        <p className="subheading">Orthopäedie und Chirurgie</p>
      </TextContainer>
    </MainLogoContainer>
  )
}

export default Logo
