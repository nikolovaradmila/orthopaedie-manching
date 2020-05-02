import React from "react"
import styled from "styled-components"

export const Button = styled.button`
  background-color: ${({ theme }) => theme.palette.mainOrange};
  color: ${({ theme }) => theme.palette.mainWhite};
  text-transform: capitalize;
  border: none;
  padding: 1.2rem 1.5rem;
  margin: 1rem 0;
  font-size: 1.6rem;
  letter-spacing: 1px;
  outline: none;
`
