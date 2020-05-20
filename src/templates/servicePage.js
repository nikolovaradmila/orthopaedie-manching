import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

function Diagnostik(props) {
  console.log(props)

  return (
    <>
      <h1>{props.data.contentfulService.serviceName}</h1>
      <div>
        <img src={props.data.contentfulService.coverPhoto.file.url} />
      </div>
      <div>
        {props.data.contentfulService.categories.map(function(category) {
          return (
            <Link to={category.slug} key={category.id}>
              {category.categoryName}
            </Link>
          )
        })}
      </div>
    </>
  )
}

export const query = graphql`
  query($id: String!) {
    contentfulService(id: { eq: $id }) {
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

export default Diagnostik
