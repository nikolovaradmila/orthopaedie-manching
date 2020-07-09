import React from "react"
import styled from "styled-components"
import FooterSubline from "../FooterSubline"

const StyledFooter = styled.footer`
  border: 2px solid gray;
  border: 2px solid red;
  padding: 60px;
`

function Footer() {
  return (
    <StyledFooter>
      <FooterSubline></FooterSubline>
    </StyledFooter>
  )
}

export default Footer
