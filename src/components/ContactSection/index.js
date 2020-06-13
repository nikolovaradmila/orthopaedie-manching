import React from "react"
import styled from "styled-components"
import ContactForm from "../ContactForm"

const Contact = styled.section`
  border: 2px solid green;
  padding: 60px;
`

function ContactSection() {
  return (
    <Contact>
      <ContactForm></ContactForm>
    </Contact>
  )
}

export default ContactSection
