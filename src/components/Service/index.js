import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

const ServiceCard = styled.div`
  height: 30rem;
  width: 30rem;
  border: 2px solid orange;
`

function Service({ service }) {
  const { id, serviceName, slug } = service
  return (
    <ServiceCard>
      <h3>{serviceName}</h3>
    </ServiceCard>
  )
}

export default Service
