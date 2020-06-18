import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import DoctorCard from "../DoctorCard"

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
