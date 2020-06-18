import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

export const query = graphql`
  {
    contentfulContactInfo {
      sectionHeading
      address
      email
      phoneNumber
    }
  }
`

function ContactInfo() {
  return <div></div>
}

export default ContactInfo
