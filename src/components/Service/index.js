import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
const ServiceCard = styled.div`
  position: relative;
  height: 30rem;
  width: 27rem;
  margin: 1rem;
  border: 2px solid orange;
  background-image: ${props => `url(${props.background})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;

  h3 {
    position: absolute;
    text-align: left;
    bottom: 0;
    left: 1rem;
    width: 100%;
    background-color: white;
  }
`

function Service({ service }) {
  const { id, serviceName, slug, coverPhoto } = service
  return (
    <Link to={slug}>
      <ServiceCard background={coverPhoto.file.url}>
        <h3>{serviceName}</h3>
      </ServiceCard>
    </Link>
  )
}

export default Service
