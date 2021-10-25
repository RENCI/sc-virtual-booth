import React from "react"
import Img from 'gatsby-image'
import { Section } from '../components/layout'
import { Heading, Subheading, Paragraph } from '../components/typography'
import { Button } from '../components/button'
import { Link } from '../components/link'
import { List } from '../components/list'
import { useLogos } from '../hooks'

export const BioDataCatalystCoordinatingCenter = () => {
  const { biodataCatalyst } = useLogos()
  return (
    <Section>
      <Heading hidden>NHLBI BioData Catalyst</Heading>

      <Img fluid={ biodataCatalyst.fluid } style={{ maxWidth: '500px', margin: 'auto' }} alt="BioData Catalyst Logo" />

      <Subheading>Overview</Subheading>

      <Paragraph>
        NHLBI BioData Catalyst is a cloud-based ecosystem providing tools, applications, and workflows in secure workspaces.
        The ecosystem is a dynamic resource that allows researchers to find, access, share, store, and compute on large scale datasets. 
      </Paragraph>

      <Paragraph>
        User feedback is encouraged as BioData Catalyst is building a community of practice,
        working collaboratively to solve technical and scientific challenges.
      </Paragraph>
      
      <Subheading>Links</Subheading>
      
      <List bullets="disc" items={[
        <Link to="https://biodatacatalyst.nhlbi.nih.gov/">NHLBI BioData Catalyst Website</Link>,
      ]} />

      <br/>
      
      <Button cta link to="https://biodatacatalyst.nhlbi.nih.gov/contact">Contact NHLBI BioData Catalyst</Button>
                        
    </Section>
  )
}