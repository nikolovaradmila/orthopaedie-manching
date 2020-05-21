import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Event from "../Event"

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
    <div>
      {data.allContentfulEvent.edges.map(({ node: event }) => {
        return <Event key={event.id} event={event} />
      })}
    </div>
  )
}

export default Events
