import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { graphql } from "gatsby"

const Container = styled.section`
  display: flex;
`

const ImageContainer = styled.div`
  border: 2px solid blue;
  flex: 1;
  max-width: 50%;
`
const ServicesContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  justify-content: center;
`
const ServiceCategory = styled.div`
  /*  border: 1px solid orangered; */
  background-color: gray;
  width: 100%;
  height: 70px;
  margin: 3px 0px;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%);
  clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%);
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: white;
    text-align: center;
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
`
function Diagnostik(props) {
  return (
    <Container>
      {/*  <h1>{props.data.contentfulService.serviceName}</h1> */}
      <ImageContainer>
        <img src={props.data.contentfulService.coverPhoto.file.url} />
      </ImageContainer>
      <ServicesContainer>
        {props.data.contentfulService.categories.map(function(category) {
          return (
            <StyledLink to={category.slug} key={category.id}>
              <ServiceCategory>
                <p>{category.categoryName}</p>
              </ServiceCategory>
            </StyledLink>
          )
        })}
      </ServicesContainer>
    </Container>
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
