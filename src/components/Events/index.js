import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const getEvents = graphql`
  {
    allContentfulEvent {
      edges {
        node {
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

  return <div></div>
}

export default Events
