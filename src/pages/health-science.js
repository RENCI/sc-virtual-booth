import React, { Fragment, useEffect, useState } from "react"
import Img from 'gatsby-image'
import { useLocation } from "@reach/router"
import { SEO } from '../components/seo'
import { Hero } from '../components/hero'
import heroBackground from '../images/hero-nrig.jpg'
import { Container, Section } from '../components/layout'
import { Title, Heading, Subheading, Paragraph } from '../components/typography'
import { SideMenu } from '../components/menu'
import { Container as Grid, Row, Col } from 'react-grid-system'
import { Button } from '../components/button'
import { useLogos } from '../hooks'
import { Link } from '../components/link'

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
      <Paragraph>
        <Link to="https://biodatacatalyst.nhlbi.nih.gov/">BioData Catalyst Website</Link>
      </Paragraph>

      <br/><br/>

      <Button cta link to="https://biodatacatalyst.nhlbi.nih.gov/contact">Contact BioData Catalyst</Button>
                        
    </Section>
  )
}

const DataTranslator = () => {
  return (
    <Section>
      <Heading>Data Translator</Heading>
      
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
  { text: 'Data Translator', id: 'data-translator', component: <DataTranslator /> },
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
            brief overview. brief overview. brief overview. brief overview. brief overview.
            brief overview. brief overview. brief overview. brief overview. brief overview.
            brief overview. brief overview. brief overview. brief overview. brief overview.
            brief overview. brief overview. brief overview. brief overview. brief overview.
        </p>
      </Hero>

      <Container>
        <Grid fluid>
          <Row>
            <Col xs={ 12 } md={ 3 } style={{ position: 'relative' }}>
              <SideMenu items={ projectsMenuItems.map(item => ({ ...item, path: `#${ item.id }` })) } activeID={ project } />
            </Col>
            <Col xs={ 12 } md={ 9 }>
              { projectsMenuItems.map(item => project === item.id && item.component ) }
            </Col>
          </Row>
        </Grid>
        
      </Container>

    </Fragment>
  )
}
