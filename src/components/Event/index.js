import React, { useMemo } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer"

const StyledLink = styled(Link)`
  text-decoration: none;
  color: gray;
`

const EventContainer = styled.div`
  max-width: 300px;
  border: 2px solid ${({ theme }) => theme.palette.mainOrange};
  height: 300px;
  margin: 5px;

  h3 {
    background-color: orangered;
    color: white;
    padding: 5px;
  }
`

function Event({ event }) {
  const { id, slug, title, textContent, date } = event

  const excerpt = useMemo(
    () =>
      documentToPlainTextString(textContent.json)
        .slice(0, 100)
        .replace(/\s\w+$/, ""),
    [textContent.json]
  )
  return (
    <StyledLink to={slug} key={id}>
      <EventContainer>
        <h3>{title}</h3>
        <p> {excerpt} &hellip;</p>
        <p>{date}</p>
        <button>Weiterlesen...</button>
      </EventContainer>
    </StyledLink>
  )
}

export default Event
