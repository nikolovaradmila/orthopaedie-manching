import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Box from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import { red } from "@material-ui/core/colors"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: red,
  },
  input: {
    display: "none",
  },
}))

const MainBanner = styled.div`
  min-height: 400px !important;
  width: 100% !important;
  background-color: #f8f8f8;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%);
  clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%);

  z-index: 1;
  top: 0;
  let: 0;
`

function BasicPage(props) {
  return (
    <Layout>
      <MainBanner>
        <Typography
          variant="h2"
          gutterBottom={true}
          align="center"
          color="primary"
        >
          {props.data.contentfulBasicPage.title}
        </Typography>
      </MainBanner>
      <div>
        {documentToReactComponents(
          props.data.contentfulBasicPage.bodyText.json
        )}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    contentfulBasicPage(id: { eq: $id }) {
      id
      node_locale
      slug
      title
      bodyText {
        json
      }
    }
  }
`

export default BasicPage
