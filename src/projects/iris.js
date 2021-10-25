import React from 'react'
import { Section } from '../components/layout'
import { Heading, Subheading, Paragraph } from '../components/typography'
import { List } from '../components/list'
import { Button } from '../components/button'
import { Link } from '../components/link'

export const Iris = () => {
  return (
    <Section>
      <Heading>IRIS</Heading>

      <Paragraph>
        The "Integrity Introspection for Scientific Workflows (IRIS)" project will automatically detect, diagnose,
        and pinpoint the source of unintentional integrity anomalies in scientific workflows executing on distributed CI.
        The approach is to develop an appropriate threat model and incorporate it in an integrity introspection,
        correlation and analysis framework that collects application and infrastructure data and uses statistical
        and machine learning (ML) algorithms to perform the needed analysis.
      </Paragraph>

      <Subheading>Videos</Subheading>

      <Subheading>Links</Subheading>

      <List bullets="disc" items={[
        <Link to="https://www.example.com/">IRIS Presentation</Link>,
        <Link to="http://nrig.renci.org/project/iris-integrity-introspection-for-scientific-workflows/">IRIS Website</Link>,
      ]} />

      <br/><br/>

      <Button cta link to="https://forms.gle/dQL3erSb2QnDVcQAA">Contact IRIS</Button>

      <br/><br/>
      
    </Section>
  )
}

