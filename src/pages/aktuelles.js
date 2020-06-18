import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

const getEvents = graphql`
  {
    allContentfulEvent(sort: { fields: date, order: DESC }) {
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

function Aktuelles() {
  return <div></div>
}

export default Aktuelles
