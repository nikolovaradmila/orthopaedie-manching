import React from "react"
import styled from "styled-components"

const Div = styled.div`
  font-size: 2rem;
  margin: 1rem;
  background: ${({ theme }) => theme.palette.mainBlue};
`

function Navigation() {
  return <Div>This is the navigation</Div>
}

export default Navigation
