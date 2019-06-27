import React from "react"
import styled from "styled-components"

const Navbar = styled.nav`
  min-height: 70px !important;
  background-color: #ffffff !important;
  top: 0;
  border-bottom: 1px solid #e7e7e7;
  z-index: 5;
  positon: relative;
`

function Navigation() {
  return <Navbar></Navbar>
}

export default Navigation
