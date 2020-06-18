import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

export const query = graphql`
  {
    contentfulFooter {
      copyrightText
      certificationPhoto {
        file {
          url
        }
      }
      pageLink {
        ... on ContentfulBasicContentPage {
          pageTitle
          id
        }
      }
    }
  }
`

function FooterSubline() {
  return <div></div>
}

export default FooterSubline
