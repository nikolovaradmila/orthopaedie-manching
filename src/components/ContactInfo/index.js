import React from "react"
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
