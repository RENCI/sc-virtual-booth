import React, { Fragment } from "react"
import { SEO } from '../components/seo'
import { Hero } from '../components/hero'
import { Container } from '../components/layout'
import { Title, Heading, Paragraph } from '../components/typography'

const ConsortiaPage = () => 
{  return (
    <Fragment>
      <SEO title="Consortia" />
      <Hero backgroundImage="https://picsum.photos/1200/304" />

      <Container>
        <Title>Consortia</Title>

        <Heading>South Big Data Hub</Heading>

        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

        </Paragraph>

        <Heading>National Consortium for Data Sciene</Heading>

        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.

        </Paragraph>

        <Heading>BioData Catalyst</Heading>

        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.

        </Paragraph>
      </Container>


    </Fragment>
  )
}

export default ConsortiaPage
