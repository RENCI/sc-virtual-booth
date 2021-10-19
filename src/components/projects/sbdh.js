import React from "react"
import Img from 'gatsby-image'
import { Section } from '../layout'
import { Heading, Subheading, Paragraph } from '../typography'
import { Button } from '../button'
import { Link } from '../link'
import { List } from '../list'
import { useLogos } from '../../hooks'

export const SouthBigDataHub = () => {
  const { sbdh } = useLogos()

  return (
    <Section>
      <Heading hidden>South Big Data Hub</Heading>

      <Img fluid={ sbdh } style={{ maxWidth: '500px', margin: 'auto' }} alt="South Big Data Hub Logo" />

      <Subheading>Overview</Subheading>
      
      <Paragraph>
        The South Big Data Innovation Hub is part of a network of four regional Big Data Hubs,
        launched by the National Science Foundation and funded in part by host universities and other partners.
        Managed jointly by RENCI and the Georgia Institute of Technology,
        the South Hub serves 16 states and the District of Columbia with more than 1000 member universities,
        corporations, foundations and cities committing their support.
        The South Hub works to accelerate  partnerships among people in business, academia,
        and government who apply data science and analytics to help solve regional and national challenges.
        The priority areas and areas of interest for the South Hub are:
      </Paragraph>

      <List bullets="disc" items={[
        'Health Disparities',
        'Smart Cities',
        'Advanced Materials and Manufacturing',
        'Data Sharing & Cyberinfrastructure',
        'Social Cybersecurity',
        'Environmental & Hazard Response',
        'Team Science',
        'Education & Workforce Development',
      ]} />

      <Subheading>Links</Subheading>

      <List bullets="disc" items={[
        <Link to="http://southbigdatahub.org/">South Big Data hub Website</Link>,
      ]} />

      <Button cta link to="https://forms.gle/dQL3erSb2QnDVcQAA">Contact SBDH</Button>
    </Section>
  )
}
