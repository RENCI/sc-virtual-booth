import React from "react"
import { GatsbyImage } from 'gatsby-plugin-image'
import { Section } from '../components/layout'
import { Heading, Subheading, Paragraph } from '../components/typography'
import { Button } from '../components/button'
import { Link } from '../components/link'
import { List } from '../components/list'
import { useLogos } from '../hooks'

export const Irods = () => {
  const { irods } = useLogos()
  return (
    <Section>
      <Heading hidden>iRODS</Heading>

      <Link to="/irods">
        <GatsbyImage image={ irods.gatsbyImageData } alt="iRODS Logo" />
      </Link>

      <Subheading>Overview</Subheading>

      <Paragraph>
        The iRODS Consortium brings together businesses, research organizations, universities, and government agencies to ensure the sustainability of iRODS by:
      </Paragraph>

      <List bullets="disc" items={[
        'Guiding further development of the software;',
        'Growing the user and developer communities; and',
        'Facilitating iRODS support, education, and collaboration opportunities.',
      ]} />

      <Paragraph>
        The Consortium maintains and supports a commercial-grade distribution of <Link to="https://github.com/irods/irods">iRODS</Link>.
      </Paragraph>

      <Paragraph>
        The iRODS Consortium fields a team of software developers, application engineers, and support staff housed at RENCI
        at the University of North Carolina at Chapel Hill. Each year, the Consortium hosts the iRODS User Group Meeting,
        a symposium that draws 100+ participants to Chapel Hill to share iRODS technologies and case studies.
      </Paragraph>

      <br/>
      
      <Button cta link to="https://forms.gle/AKzyUj1yWPgPuXU4A">Request a Meeting</Button>

      <Subheading>Links</Subheading>

      <List bullets="disc" items={[
        <Link to="/irods">iRODS Virtual Booth</Link>,
        <Link to="https://irods.org/about/">Consortium Members</Link>,
      ]} />

    </Section>
  )
}
