import React from "react"

import { graphql, useStaticQuery } from "gatsby"

const konservativPageData = graphql`
  {
    contentfulService(serviceName: { eq: "Konservativ" }) {
      id
      node_locale
      serviceDescription {
        json
      }
      serviceName
      slug
      coverPhoto {
        file {
          url
        }
      }
      categories {
        ... on ContentfulServiceCategory {
          categoryName
          id
          slug
          services {
            ... on ContentfulBasicContentPage {
              id
              slug
              pageTitle
              textContent {
                json
              }
            }
          }
        }
        node_locale
        slug
      }
    }
  }
`

function Konservativ() {
  const data = useStaticQuery(konservativPageData)
  console.log(data)

  return <div></div>
}

export default Konservativ
