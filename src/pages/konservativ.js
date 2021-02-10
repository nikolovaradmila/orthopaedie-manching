import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const konservativPageData = graphql`
  {
    contentfulDiagnostikSection {
      id
      title
      coverPhoto {
        file {
          url
        }
      }
      mainPagePhoto {
        file {
          url
        }
      }
      services {
        ... on ContentfulServiceCategory {
          id
          categoryName
          slug
        }
      }
    }
  }
`

function Konservativ() {
  const data = useStaticQuery(konservativPageData)
  console.log(data.contentfulDiagnostikSection.services)
  return (
    <div>
      {data.contentfulDiagnostikSection.services.map(service => {
        return (
          <Link to={service.slug}>
            <li key={service.id}>{service.categoryName}</li>
          </Link>
        )
      })}
    </div>
  )
}

export default Konservativ
