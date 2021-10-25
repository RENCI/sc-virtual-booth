import React from "react"
import Img from 'gatsby-image'
import { Section } from '../layout'
import { Heading, Subheading, Paragraph } from '../typography'
import { Button } from '../button'
import { List } from '../list'
import { Link } from '../link'
import { useLogos } from '../../hooks'

export const Covid19 = () => {
  return (
    <Section>
      <Heading>COVID-19 Efforts</Heading>

      <Paragraph>
        Working closely with partner research institutions and the private sector, RENCI is adapting
        and extending its existing capabilities to accelerate COVID-19 response and research efforts.
        RENCI researchers are leaders in data science and in data-driven discoveries, and we want to
        use those talents to assist the larger international effort to slow the spread of the virus
        and search for treatments.
      </Paragraph>

      <Paragraph>
        At a high level, our work in the area of COVID-19 research aims to:
      </Paragraph>

      <List bullets="disc" items={[
        'Apply linked open data, including biomedical ontologies, to build in silico knowledge models of drugs, processes, and systems involved in the coronavirus disease and related diseases.',
        'Present aggregated clinical statistical models and an open, privacy-preserving framework to expose, share, and analyze data on clinical correlates of disease and outcomes, environmental exposures, socio-economic indicators, and genotype data.',
        'Provision notebook-based analytical environments with big data, machine learning, and artificial intelligence capabilities to support access to the growing body of COVID-19 related datasets, as well as tools to analyze and explore the data.',
      ]} />

      <Subheading>Links</Subheading>

      <List bullets="disc" items={[
        <Link to="https://covid-19.renci.org/">RENCI COVID-19 Response Website</Link>,
      ]} />

      <br/>

      <Button cta link to="https://forms.gle/dQL3erSb2QnDVcQAA">Contact Researchers Behind COVID-19 Efforts</Button>
    </Section>
  )
}
