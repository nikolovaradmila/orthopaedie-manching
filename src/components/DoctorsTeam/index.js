import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import DoctorCard from "./DoctorCard"

export const query = graphql`
  {
    allContentfulDoctor {
      nodes {
        name
        photo {
          file {
            url
          }
        }
        profile {
          json
        }
        id
      }
    }
  }
`

function DoctorsTeam() {
  return <div></div>
}

export default DoctorsTeam
