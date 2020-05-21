import React from "react"
import { graphql } from "gatsby"

function eventPage(props) {
  return (
    <div>
      <h1>{props.data.contentfulEvent.title}</h1>
      <div>
        {documentToReactComponents(props.data.contentfulEvent.textContent.json)}
      </div>
    </div>
  )
}

export const query = graphql`
  query($id: String!) {
    contentfulEvent(id: { eq: $id }) {
      title
      textContent {
        json
      }
      id
      slug
      node_locale
    }
  }
`

export default eventPage
