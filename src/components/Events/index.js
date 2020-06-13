import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Event from "../Event"

const EventsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const getEvents = graphql`
  {
    allContentfulEvent(sort: { fields: date, order: DESC }, limit: 4) {
      edges {
        node {
          date(formatString: "DD. MM. YYYY")
          id
          slug
          title
          textContent {
            json
          }
        }
      }
    }
  }
`

function Events() {
  const data = useStaticQuery(getEvents)

  return (
    <EventsSection>
      {data.allContentfulEvent.edges.map(({ node: event }) => {
        return <Event key={event.id} event={event} />
      })}
    </EventsSection>
  )
}

export default Events
