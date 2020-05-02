import React from "react"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { graphql, useStaticQuery } from "gatsby"
import Service from "../Service"

const ServicesSection = styled.section`
  display: flex;
  padding: 4rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    display: flex;
  }
`

const getServicesContent = graphql`
  {
    contentfulLeistungsubersicht {
      title
      introText {
        json
      }
    }
    services: allContentfulService {
      edges {
        node {
          serviceName
          slug
          id
        }
      }
    }
  }
`

function Services() {
  const data = useStaticQuery(getServicesContent)
  return (
    <ServicesSection>
      <h1>{data.contentfulLeistungsubersicht.title}</h1>
      <p>
        {" "}
        {documentToReactComponents(
          data.contentfulLeistungsubersicht.introText.json
        )}
      </p>
      <div>
        {data.services.edges.map(({ node: service }) => {
          return <Service key={service.id} service={service} />
        })}
      </div>
    </ServicesSection>
  )
}

export default Services
