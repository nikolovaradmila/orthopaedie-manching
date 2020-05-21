import React from "react"
import { Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

function Event({ event }) {
  const { id, slug, title, textContent, date } = event
  return (
    <Link to={slug} key={id}>
      <p>{date}</p>
      <h3>{title}</h3>
      <div>{documentToReactComponents(textContent.json)}</div>
    </Link>
  )
}

export default Event
