import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const MainBanner = styled.div`
  min-height: 30vh !important;
  width: 100% !important;
  background-color: #f8f8f8;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%);
  clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%);
  z-index: 1;
  top: 0;
  left: 0;
`

function BasicPage(props) {
  return (
    <>
      <MainBanner>
        <h2>{props.data.contentfulBasicContentPage.pageTitle || null}</h2>
      </MainBanner>
      <div>
        {documentToReactComponents(
          props.data.contentfulBasicContentPage.textContent.json
        )}
      </div>
      <button>Button Text</button>
    </>
  )
}

export const query = graphql`
  query($id: String!) {
    contentfulBasicContentPage(id: { eq: $id }) {
      id
      node_locale
      slug
      pageTitle
      textContent {
        json
      }
    }
  }
`

export default BasicPage
