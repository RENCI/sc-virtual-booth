import React, { Fragment, useEffect, useState } from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { useLocation } from "@reach/router"
import { Seo } from '../components/seo'
import { Hero } from '../components/hero'
import heroBackground from '../images/hero-health-science.jpg'
import { Container, Section } from '../components/layout'
import { Title, Heading, Subheading, Paragraph } from '../components/typography'
import { useLogos } from '../hooks'
import { SideMenu } from '../components/menu'
import { Container as Grid, Row, Col } from 'react-grid-system'
import { List } from '../components/list'
import { Button } from '../components/button'
import { Link } from '../components/link'

const BioDataCatalyst = () => {
  const { biodataCatalyst } = useLogos()
  return (
    <Section>
      <Heading hidden>NHLBI BioData Catalyst</Heading>

      <Img fluid={ biodataCatalyst.fluid } style={{ maxWidth: '500px', margin: 'auto' }} alt="BioData Catalyst Logo" />

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
                        
    </Section>
  )
}

const DataTranslator = () => {
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
          <Link to="https://www.dropbox.com/s/za50wocuxek8ua6/2021_Translator_One-Pager.pdf?dl=0">Translator Handout</Link>,
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

const TranslationalScience = () => {
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

const projectsMenuItems = [
  { text: 'NHLBI BioData Catalyst', id: 'bdc', component: <BioDataCatalyst /> },
  { text: 'NCATS Biomedical Data Translator', id: 'data-translator', component: <DataTranslator /> },
  { text: 'Translational Science', id: 'txscience', component: <TranslationalScience /> },
]

const HealthSciencePage = () => {
  const [project, setProject] = useState('bdc')
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      setProject(location.hash.replace('#', ''))
      window.scroll({ top: 400 })
    }
  }, [location.hash])

  return (
    <Fragment>
      <Seo title="Health Science" />
      
      <Hero backgroundImage={ heroBackground }>
        <Title><span className="highlight">Health Science</span></Title>
        <p className="highlight">
          RENCI leverages systems and technologies to fight disease and improve health.
          Our expert teams lead cross-cutting efforts to advance fundamental research and support meaningful improvements in clinical practice.
        </p>
      </Hero>

      <Container>
        <Grid fluid>
          <Row>
            <Col md={ 12 } lg={ 4 } style={{ position: 'relative' }}>
              <SideMenu items={ projectsMenuItems.map(item => ({ ...item, path: `#${ item.id }` })) } activeID={ project } />
            </Col>
            <Col md={ 12 } lg={ 8 }>
              { projectsMenuItems.map(item => project === item.id && item.component ) }
            </Col>
          </Row>
        </Grid>
        
      </Container>

    </Fragment>
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

export default HealthSciencePage
