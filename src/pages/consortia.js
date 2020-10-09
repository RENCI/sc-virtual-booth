import React, { Fragment } from "react"
import { SEO } from '../components/seo'
import { Hero } from '../components/hero'
import { Container, Section } from '../components/layout'
import { Title, Heading, Paragraph } from '../components/typography'
import { List } from '../components/list'

const ConsortiaPage = () => {
  return (
    <Fragment>
      <SEO title="Consortia" />

      <Hero backgroundImage="https://picsum.photos/1200/304" />

      <Container>
        <Title>Consortia</Title>

        <Section>
          <Heading>South Big Data Hub</Heading>

          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

          </Paragraph>
        </Section>

        <Section>
          <Heading>National Consortium for Data Sciene</Heading>

          <Paragraph>
            The National Consortium for Data Science (NCDS) is a collaboration of leaders in academia, industry,
            and government formed to address the data challenges and opportunities of the 21st century.
            The NCDS helps members take advantage of data in ways that result in new jobs and transformative discoveries.
          </Paragraph>

          <Paragraph>
            We connect diverse communities of data science experts to support a 21st century data-driven economy by:
          </Paragraph>

          <List bullets="disc"
            items={ [
              'Building data science career pathways and creating a data-literate workforce',
              'Bridging the gap between data scientists in the public and private sectors',
              'Supporting open and democratized data',
            ] }
          />
        </Section>

        <Section>
          <Heading>BioData Catalyst</Heading>

          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.

          </Paragraph>
        </Section>

      </Container>


    </Fragment>
  )
}

export default ConsortiaPage
