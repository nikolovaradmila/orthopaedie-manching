import React from "react"
import styled from "styled-components"
import Navigation from "../Navigation"
import Logo from "../Logo"

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
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
