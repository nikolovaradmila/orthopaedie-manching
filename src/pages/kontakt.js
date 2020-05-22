import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const ContactPageData = graphql`
  {
    contentfulKontaktinformation {
      id
      pageTitle
      node_locale
      textContent {
        json
      }
      contactFormNamePlaceholder
      contactFormMessagePlaceholder
      contactFormHeading
      contactFormEMailPlaceholder
      contactFormDateOfBirthPlaceholder
      contactFormButtonText
      contactFormCheckboxText {
        json
      }
      addresse
      kontaktLine
    }
  }
`

function Kontakt() {
  const data = useStaticQuery(ContactPageData)
  return <div></div>
}

export default Kontakt
