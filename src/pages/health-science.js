import React, { Fragment, useEffect, useState } from "react"
import Img from 'gatsby-image'
import { useLocation } from "@reach/router"
import { SEO } from '../components/seo'
import { Hero } from '../components/hero'
import heroBackground from '../images/hero-health-science.jpg'
import { Container, Section } from '../components/layout'
import { Title, Heading, Paragraph } from '../components/typography'
import { SideMenu } from '../components/menu'
import { Container as Grid, Row, Col } from 'react-grid-system'
import { List } from '../components/list'
import { Button } from '../components/button'
import { Link } from '../components/link'
import { useLogos } from '../hooks'

const BioDataCatalyst = () => {
  const { biodataCatalyst } = useLogos()
  return (
    <Section>
      <Heading>NHLBI BioData Catalyst</Heading>

      <br/><br/>

      <Paragraph align="center" width="100%" maxWidth="500px">
        <Img fluid={ biodataCatalyst.fluid } alt="Visit BioData Catalyst Website" />
      </Paragraph>

      <br/><br/>

      <Paragraph>
        NHLBI BioData Catalyst is a cloud-based ecosystem providing tools, applications, and workflows in secure workspaces.
        The ecosystem is a dynamic resource that allows researchers to find, access, share, store, and compute on large scale datasets. 
      </Paragraph>

      <Paragraph>
        User feedback is encouraged as BioData Catalyst is building a community of practice,
        working collaboratively to solve technical and scientific challenges.
      </Paragraph>
      
      <Heading>Links</Heading>
      
      <List bullets="disc"
        items={[
          <Link to="https://biodatacatalyst.nhlbi.nih.gov/">BioData Catalyst Website</Link>,
        ]}
      />

      <br/><br/>

      <Button cta link to="https://biodatacatalyst.nhlbi.nih.gov/contact">Contact BioData Catalyst</Button>
                        
    </Section>
  )
}

const DataTranslator = () => {
  return (
    <Section>
      <Heading>NCATS Biomedical Data Translator</Heading>
      
      <Paragraph>
        The National Center for Advancing Translational Sciences (NCATS) launched
        the Biomedical Data Translator program in October 2016 in an effort to
        overcome data science challenges in biomedical research.
        The Data Translator project applies semantic integration strategies to share
        chemical, genetic, phenotypic, disease, ontological, and other knowledge sources
        to form a technology platform for translational science.
        This knowledge is integrated together into a knowledge graph,
        which is then analyzed to produce novel insights and enhance human reasoning.
      </Paragraph>

      <Paragraph>
        RENCI contributes to a broad spectrum of Translator activities.
        These are just a few of our projects:
      </Paragraph>

      <List bullets="disc" items={ [
<<<<<<< HEAD
          <Link to="#">ICEES: An overview</Link>,
          <Link to="#">ROBOKOP: A use case</Link>,
          <Link to="#">TranQL: A demo</Link>,
=======
          <Link to="https://drive.google.com/file/d/1nL-ZybPmriB_L8NkMYDYuA_wGmbhoCeL/view?usp=sharing" key="icees">ICEES: An overview</Link>,
          <Link to="https://drive.google.com/file/d/1AUXiHSk72Gwy3lqZV-BCcFW64g7vsRiT/view" key="robokop">ROBOKOP: A use case</Link>,
          <Link to="#" key="tranql">TranQL: A demo</Link>,
>>>>>>> e2d1485... add translator links
        ] }
      />

      <Heading>Additional Links</Heading>

      <List bullets="disc" items={ [
          <Link to="https://ncats.nih.gov/translator">Translator Website</Link>
        ] }
      />

      <Button cta link to="">Connect with Us</Button>
            
    </Section>
  )
}

const PrecisionDosing = () => {
  return (
    <Section>
      <Heading>Precision Dosing</Heading>
      
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
      </Paragraph>

      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Paragraph>
            
    </Section>
  )
}

const projectsMenuItems = [
  { text: 'NHLBI BioData Catalyst', id: 'bdc', component: <BioDataCatalyst /> },
  { text: 'NCATS Biomedical Data Translator', id: 'data-translator', component: <DataTranslator /> },
  { text: 'Precision Dosing', id: 'pds', component: <PrecisionDosing /> },
]

export default () => {
  const [project, setProject] = useState('bdc')
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      setProject(location.hash.replace('#', ''))
    }
  }, [location.hash])

  return (
    <Fragment>
      <SEO title="Health Science" />
      
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
            <Col xs={ 12 } md={ 4 } style={{ position: 'relative' }}>
              <SideMenu items={ projectsMenuItems.map(item => ({ ...item, path: `#${ item.id }` })) } activeID={ project } />
            </Col>
            <Col xs={ 12 } md={ 8 }>
              { projectsMenuItems.map(item => project === item.id && item.component ) }
            </Col>
          </Row>
        </Grid>
        
      </Container>

    </Fragment>
  )
}
