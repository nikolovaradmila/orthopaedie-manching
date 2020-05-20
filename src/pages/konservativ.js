import React from "react"
import { Link } from "gatsby"
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
  /*  console.log(data.contentfulService)

  const { id, serviceName } = data.contentfulService */

  return (
    <>
      <h1>{data.contentfulService.serviceName}</h1>
      <div>
        <img src={data.contentfulService.coverPhoto.file.url} />
      </div>
      <div>
        {data.contentfulService.categories.map(function(category) {
          return <Link to={category.slug}>{category.categoryName}</Link>
        })}
      </div>
    </>
  )
}

export default Konservativ
