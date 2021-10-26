import React from "react"
import { GatsbyImage } from 'gatsby-plugin-image'
import { Section } from '../components/layout'
import { Heading, Subheading, Paragraph } from '../components/typography'
import { Button } from '../components/button'
import { Link } from '../components/link'
import { List } from '../components/list'
import { useLogos } from '../hooks'

export const SouthBigDataHub = () => {
  const { sbdh } = useLogos()

  return (
    <Section>
      <Heading hidden>South Big Data Hub</Heading>

      <GatsbyImage image={ sbdh.gatsbyImageData } alt="South Big Data Hub Logo" />

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
        <Link to="http://southbigdatahub.org/">South Big Data Hub Website</Link>,
        <Link to="https://www.dropbox.com/s/k9wxsybhns0myys/2021%20SBDH%20Impact%20Report.pdf?dl=1">South Big Data Hub 2021 Impact Report</Link>,
        <Link to="http://www.example.com/">South Big Data Hub Handout</Link>,
      ]} />

      <Button cta link to="https://forms.gle/dQL3erSb2QnDVcQAA">Contact SBDH</Button>
    </Section>
  )
}
