import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

const praxisTeamPageContent = graphql`
  {
    contentfulPraxisTeam {
      imageBanner {
        file {
          url
        }
      }
      pageTitle
      textContent {
        json
      }
    }
  }
`

function PraxisTeam() {
  return <div></div>
}

export default PraxisTeam
