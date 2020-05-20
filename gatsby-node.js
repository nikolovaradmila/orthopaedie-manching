const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allContentfulBasicContentPage {
        edges {
          node {
            id
            pageTitle
            textContent {
              json
            }
            slug
            node_locale
          }
        }
      }

      allContentfulService {
        edges {
          node {
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
      }
    }
  `).then(result => {
    // Object.values(result.data).reduce((acc,value)=>[...acc,...value.edges],[])
    result.data.allContentfulBasicContentPage.edges.forEach(({ node }) => {
      createPage({
        path: `${node.slug}`,
        component: path.resolve(`./src/templates/BasicPage.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          id: node.id,
          locale: node.node_locale,
        },
      })
    })
    result.data.allContentfulService.edges.forEach(({ node }) => {
      createPage({
        path: `${node.slug}`,
        component: path.resolve(`./src/templates/servicePage.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          id: node.id,
          locale: node.node_locale,
        },
      })
    })
  })
}
