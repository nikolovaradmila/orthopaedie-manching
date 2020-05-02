import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { useTheme } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    background: "red",
    padding: 5,
    color: "green",
  },
  input: {
    display: "none",
  },
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}))

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
  const classes = useStyles()

  const theme = useTheme()
  return (
    <>
      <MainBanner className={classes.root}>
        <Typography
          variant="h2"
          gutterBottom={true}
          align="center"
          color="primary"
        >
          {props.data.contentfulBasicContentPage.pageTitle || null}
        </Typography>
      </MainBanner>
      <div>
        {documentToReactComponents(
          props.data.contentfulBasicContentPage.textContent.json
        )}
      </div>
      <Button variant="contained" className={classes.button}>
        Button Text
      </Button>
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
