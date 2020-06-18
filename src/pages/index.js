import React from "react"
import Hero from "../components/Hero"
import Intro from "../components/Intro"
import Services from "../components/Services"
import Events from "../components/Events"
import BookTerminOnline from "../components/BookTerminOnline"
import ContactSection from "../components/ContactSection"
import DoctorsTeam from "../components/DoctorsTeam"

const IndexPage = () => (
  <>
    <Hero></Hero>
    <Intro></Intro>
    <Services></Services>
    <BookTerminOnline></BookTerminOnline>
    <ContactSection></ContactSection>
    <DoctorsTeam />
    <Events />
  </>
)

export default IndexPage
