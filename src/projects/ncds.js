import React from "react"
import { GatsbyImage } from 'gatsby-plugin-image'
import { Section } from '../components/layout'
import { Heading, Subheading, Paragraph } from '../components/typography'
import { Button } from '../components/button'
import { List } from '../components/list'
import { useLogos } from '../hooks'

export const NationalConsortiumfForDataScience = () => {
  const { ncds } = useLogos()
  return (
    <Section>
      <Heading hidden>National Consortium for Data Science</Heading>

      <GatsbyImage image={ ncds.gatsbyImageData } alt="NCDS Logo" />

      <Subheading>Overview</Subheading>

      <Paragraph>
        The National Consortium for Data Science (NCDS) is a collaboration of leaders in academia, industry,
        and government formed to address the data challenges and opportunities of the 21st century.
        The NCDS helps members take advantage of data in ways that result in new jobs and transformative discoveries.
      </Paragraph>

      <Paragraph>
        We connect diverse communities of data science experts to support a 21st century data-driven economy by:
      </Paragraph>

      <List bullets="disc" items={[
        'Building data science career pathways and creating a data-literate workforce',
        'Bridging the gap between data scientists in the public and private sectors',
        'Supporting open and democratized data',
      ]} />
      
      <br/>

      <Button cta link to="https://forms.gle/dQL3erSb2QnDVcQAA">Contact NCDS</Button>
    </Section>
  )
}
