import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

const SprechzeitenPageData = graphql`
  {
    contentfulSprechzeiten {
      title
      id
      node_locale
      textContent {
        json
      }
    }
  }
`

function Sprechzeiten() {
  const data = useStaticQuery(SprechzeitenPageData)
  return <div></div>
}

export default Sprechzeiten
