import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const doctorsPageContent = graphql`
  {
    contentfulDoctorsPage {
      id
      imageBanner {
        file {
          url
        }
        title
      }
      pageTitle
      textContent {
        json
      }
    }

    allContentfulDoctor {
      edges {
        node {
          id
          name
          photo {
            file {
              url
            }
            title
          }
          profile {
            json
          }
        }
      }
    }
  }
`

function Aerzte() {
  const data = useStaticQuery(doctorsPageContent)
  return <div></div>
}

export default Aerzte
