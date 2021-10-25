import React from "react"
import Img from 'gatsby-image'
import { Section } from '../components/layout'
import { Heading, Subheading, Paragraph } from '../components/typography'
import { Button } from '../components/button'
import { List } from '../components/list'
import { Link } from '../components/link'
import { useLogos } from '../hooks'

export const Helx = () => {
  const { helx } = useLogos()
  return (
    <Section>
      <Heading hidden>HeLx</Heading>

      <Img fluid={ helx } style={{ maxWidth: '400px', margin: 'auto' }} alt="HeLx logo" />

      <Subheading>Overview</Subheading>

      <Paragraph>
        HeLx is a command center for data science communities. HeLx empowers researchers in
        domains as varied as plant genomics, biomedical science, clinical x, and neuroscience
        to do work with their preferred tools close to the data in the cloud at scale.
      </Paragraph>

      <Paragraph>
        HeLx is operated out of the Renaissance Computing Institute (RENCI) at the University
        of North Carolina at Chapel Hill. The platform was born from RENCI’s experience empowering
        diverse science communities to use advanced computing infrastructures. We learned that research
        communities have a wide array of data science tools in their daily toolbox, but provisioning
        these tools in modern cloud native environments with appropriate security, networking, and
        persistence support is daunting. HeLx serves as an on-ramp for these communities to assemble
        the right tools and to help them scale from on-premise to cloud infrastructures.
      </Paragraph>

      <Subheading>Links</Subheading>

      <List bullets="disc" items={[
        <Link to="https://use.helx.renci.org/">HeLx Website</Link>,
        <Link to="https://www.dropbox.com/s/1u2q0m8k2v5zw7b/2021_HeLx_One-Pager.pdf?dl=1">HeLx Handout</Link>,
      ]} />

      <br/>

      <Button cta link to="https://forms.gle/dQL3erSb2QnDVcQAA">Contact HeLx</Button>
    </Section>
  )
}
