import React, { useMemo } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer"

const StyledLink = styled(Link)`
  text-decoration: none;
`

function Event({ event }) {
  const { id, slug, title, textContent, date } = event

  const excerpt = useMemo(
    () =>
      documentToPlainTextString(textContent.json)
        .slice(0, 180)
        .replace(/\s\w+$/, ""),
    [textContent.json]
  )
  return (
    <StyledLink to={slug} key={id}>
      <p>{date}</p>
      <h3>{title}</h3>
      <p> {excerpt} &hellip;</p>
    </StyledLink>
  )
}

export default Event
