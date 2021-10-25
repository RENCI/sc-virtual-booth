import React from "react"
import { Section } from '../components/layout'
import { Heading, Subheading, Paragraph } from '../components/typography'
import { List } from '../components/list'
import { Button } from '../components/button'
import { Link } from '../components/link'

export const TranslationalScience = () => {
  return (
    <Section>
      <Heading>Translational Science</Heading>
      
      <Subheading>Overview</Subheading>
      
      <Paragraph>
        Bridging the "Valley of Death" to bring light to "dark data" requires methods that are reproducible and data that are analyzable.
        Maximizing the return on efforts expended for generating data and developing tools requires engaging multiple strategies, techniques, and innovations.
        The Translational Science Team (TxScience) at <Link to="https://www.renci.org/">RENCI</Link> is a highly skilled team with the advanced training and experience required for executing on these efforts,
        deemed essential by both the NIH and the NSF. TxScience is comprised of visualization scientists, architects, web developers, data scientists, data modelers, and project managers,
        aiming to overtake the rate of “dark data” generation. We bring domain-specific research through to proof-of-concept and early stage technology development
        by innovating interactive dashboards backed by FAIR , Usable, Scalable, Extensible (FUSE) architectures and robust data models.
      </Paragraph>
      
      <Subheading>Links</Subheading>

      <List bullets="disc" items={[
          <Link to="https://txscience.renci.org/">Translational Science Website</Link>
        ]}
      />

      <br/><br/>

      <Button cta link to="https://txscience.renci.org/contact/">Contact Translational Science</Button>
      
      <br/><br/>

    </Section>
  )
}
