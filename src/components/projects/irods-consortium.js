import React from "react"
import Img from 'gatsby-image'
import { Section } from '../layout'
import { Heading, Subheading, Paragraph } from '../typography'
import { Button } from '../button'
import { Link } from '../link'
import { List } from '../list'
import { useLogos } from '../../hooks'

export const Irods = () => {
  const { irods } = useLogos()
  return (
    <Section>
      <Heading hidden>iRODS</Heading>

      <Link to="/irods">
        <Img fluid={ irods } style={{ maxWidth: '400px', margin: 'auto' }} alt="iRODS Logo" />
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
