import React from "react"
import styled from "styled-components"
import Navigation from "../Navigation"
import Logo from "../Logo"

const HeaderContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function Header() {
  return (
    <HeaderContainer>
      <Logo></Logo>
      <Navigation></Navigation>
    </HeaderContainer>
  )
}

export default Header
