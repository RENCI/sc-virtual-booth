import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Heading, Subheading, Paragraph } from '../typography'
import { Section } from '../layout'
import { List } from '../list'
import { Button } from '../button'
import { Link } from '../link'

export const DataTranslator = () => {
  const { translatorGraphic } = useStaticQuery(translatorGraphicQuery)
  return (
    <Section>
      <Heading>NCATS Biomedical Data Translator</Heading>
      
      <Img fluid={ translatorGraphic.childImageSharp.fluid } alt="Visit BioData Catalyst Website" />

      <Subheading>Overview</Subheading>

      <Paragraph>
        <Link to="https://ncats.nih.gov/">The National Center for Advancing Translational Sciences</Link> (NCATS)
        launched the <Link to="https://ncats.nih.gov/translator">Biomedical Data Translator</Link> program in October 2016
        in an effort to overcome data science challenges in biomedical research.
        The Data Translator project applies semantic integration strategies to share
        chemical, genetic, phenotypic, disease, ontological, and other knowledge sources
        to form a technology platform for translational science.
        This knowledge is integrated together into a knowledge graph,
        which is then analyzed to produce novel insights and enhance human reasoning.
      </Paragraph>

      <Paragraph>
        <Link to="https://www.renci.org/">RENCI</Link> contributes to a broad spectrum of Translator activities.
        These are just a few of our current projects:
      </Paragraph>

      <List bullets="disc" items={ [
          <Paragraph>
            <em>ICEES+ Knowledge Provider</em>: 
            The ICEES+ (Integrated Clinical and Environmental Exposures Service) Knowledge Provider is an initiative of the Biomedical
            Data Translator program that provides a regulatory-compliant framework for sharing and exploring integrated data from
            electronic health records and public sources of environmental exposures.
          </Paragraph>,
          <Paragraph>
            <em>ARAGORN</em>: 
            ARAGORN (Autonomous Relay Agent for Generation Of Ranked Networks) is an offshoot
            of <Link to="https://researchsoftwareinstitute.github.io/data-translator/apps/robokop">ROBOKOP</Link> that assembles
            information relevant to a user query, and uses that information to synthesize well-supported answers.
          </Paragraph>,
          <Paragraph>
            <em>Standards and Reference Implementation</em>: 
            Along with collaborators from Oregon State University and Lawrence Berkeley National Labs, RENCI co-leads the Standards
            and Reference Implementations (SRI) team for Data Translator. This group is responsible for producing a suite of standards
            and products, a model for their governance, and processes to coordinate integration and shared implementation.
          </Paragraph>,
        ] }
      />

      <Subheading>Links</Subheading>

      <List bullets="disc" items={ [
          <Link to="https://ncats.nih.gov/translator">Translator Website</Link>,
          <Link to="https://www.dropbox.com/s/za50wocuxek8ua6/2021_Translator_One-Pager.pdf?dl=1">Translator Handout</Link>,
        ] }
      />

      <br/><br/>

      <Button cta link to="https://forms.gle/dQL3erSb2QnDVcQAA">Contact Data Translator</Button>

      <br/><br/>

      <Paragraph>
        This work is supported by the <Link to="https://ncats.nih.gov/">National Center for Advancing Translational Sciences</Link> of
        the <Link to="https://www.nih.gov/">National Institutes of Health</Link> under the following grant numbers.
      </Paragraph>

      <List bullets="disc" items={[
        'ICEES: OT2-TR003430',
        'ROBOKOP: OT2-TR002514',
        'TranQL: OT3-TR002020',
      ]} />
    </Section>
  )
}

const translatorGraphicQuery = graphql`{
  translatorGraphic: file(relativePath: {eq: "data-translator.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}`

