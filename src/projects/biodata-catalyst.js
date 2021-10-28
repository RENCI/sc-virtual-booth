import React from "react"
import { GatsbyImage } from 'gatsby-plugin-image'
import { Section } from '../components/layout'
import { Heading, Subheading, Paragraph } from '../components/typography'
import { useLogos } from '../hooks'
import { List } from '../components/list'
import { Button } from '../components/button'
import { Link } from '../components/link'

export const BioDataCatalyst = () => {
  const { biodataCatalyst } = useLogos()
  return (
    <Section>
      <Heading hidden>NHLBI BioData Catalyst</Heading>

      <GatsbyImage image={ biodataCatalyst.gatsbyImageData } alt="BioData Catalyst Logo" />

      <br/><br/>

      <Subheading>Overview</Subheading>

      <Paragraph>
        NHLBI BioData Catalyst is a cloud-based ecosystem providing tools, applications, and workflows in secure workspaces.
        The ecosystem is a dynamic resource that allows researchers to find, access, share, store, and compute on large scale datasets. 
      </Paragraph>

      <Paragraph>
        The ecosystem, which has undergone rigorous pilot testing, is now open to all researchers.
        The BioData Catalyst ecosystem provides heart, lung, blood, and sleep researchers with high-value
        NHLBI datasets in the cloud, streamlining access to the data.
      </Paragraph>

      <Paragraph>
        User feedback is encouraged as BioData Catalyst is building a community of practice,
        working collaboratively to solve technical and scientific challenges.
      </Paragraph>
      
      <Subheading>Links</Subheading>
      
      <List bullets="disc"
        items={[
          <Link to="https://biodatacatalyst.nhlbi.nih.gov/">NHLBI BioData Catalyst Website</Link>,
        ]}
      />

      <br/><br/>

      <Button cta link to="https://biodatacatalyst.nhlbi.nih.gov/contact">Contact NHLBI BioData Catalyst</Button>

      <br/><br/>
                        
    </Section>
  )
}

