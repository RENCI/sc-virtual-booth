import React from "react"
import { GatsbyImage } from 'gatsby-plugin-image'
import { Section } from '../components/layout'
import { Heading, Subheading, Paragraph } from '../components/typography'
import { Button } from '../components/button'
import { Link } from '../components/link'
import { List } from '../components/list'
import { useLogos } from '../hooks'

export const Heal = () => {
  const { heal } = useLogos()
  return (
    <Section>
      <Heading hidden>NIH HEAL Initiative</Heading>

      <GatsbyImage image={ heal.gatsbyImageData } alt="NIH HEAL Initiative logo" />

      <Subheading>Overview</Subheading>

      <Paragraph>
        The National Institutes of Health (NIH) Helping to End Addiction Long-term (HEAL) Initiative is an aggressive,
        transagency effort to speed scientific solutions to stem the national opioid public health crisis. 
      </Paragraph>
      
      <Paragraph>
        As part of the HEAL Data Stewardship Group, RENCI will work with HEAL Investigators and other stakeholders to develop
        processes for data harmonization, data storage, metadata collection, and sharing within the HEAL Data Ecosystem.
        The Stewards will provide solutions to manage and coordinate diverse teams and data across the Initiative. 
      </Paragraph>

      <Paragraph>
        The Stewards will:
      </Paragraph>
      
      <List bullets="disc" items={[
        'Lead the HEAL Ecosystem engagement effort, which will examine and build upon the existing consensus-building activities, develop complementary stewardship and reporting structures, and incorporate extensive feedback from the HEAL community',
        'Provide oversight and consultancy for data management, which will help HEAL investigators generating data across the complex landscape of the HEAL Initiative adhere to program objectives in a coordinated and efficient manner',
        'Develop use cases to inform search capabilities, understand modeling requirements, adapt and promote flexible knowledge graph standards, create automated workflows to make HEAL data FAIR, provide data analytic and visualization tools, and collaborate with the HEAL Platform provider to enable novel discovery through the HEAL Data Ecosystem. ',
      ]} />

      <Subheading>Links</Subheading>

      <List bullets="disc" items={[
        <Link to="https://heal.nih.gov/">NIH HEAL Website</Link>,
        <Link to="https://www.healdatafair.org/">NIH Data Stewards Website</Link>,
        <Link to="https://www.dropbox.com/s/2rsytothpzqe67v/2021_HEALStewards_One-Pager.pdf?dl=1">HEAL Stewards Handout</Link>,
      ]} />

      <Button cta link to="https://forms.gle/dQL3erSb2QnDVcQAA">Contact HEAL</Button>
    </Section>
  )
}
