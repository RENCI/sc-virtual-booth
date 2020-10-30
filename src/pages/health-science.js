import React, { Fragment, useEffect, useState } from "react"
import Img from 'gatsby-image'
import { useTheme } from 'styled-components'
import { useLocation } from "@reach/router"
import { SEO } from '../components/seo'
import { Hero } from '../components/hero'
import { Container, Section } from '../components/layout'
import { Title, Heading, Subheading, Paragraph } from '../components/typography'
import { Button } from '../components/button'
import { Icon } from '../components/icon'
import { Link } from '../components/link'
import { List } from '../components/list'
import heroBackground from '../images/hero-nrig.jpg'
import { Container as Grid, Row, Col } from 'react-grid-system'
import { useLogos } from '../hooks'


const BioDataCatalyst = () => {
  return (
    <Section>
      <Heading>BioData Catalyst</Heading>
      
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
  { text: 'BioData Catalyst', id: 'bdc', component: <BioDataCatalyst /> },
  { text: 'Data Translator', id: 'data-translator', component: <DataTranslator /> },
  { text: 'Precision Dosing', id: 'pds', component: <PrecisionDosing /> },
]

export default () => {
  const [project, setProject] = useState('bdc')
  const theme = useTheme()
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
              <List
                items={ projectsMenuItems.map(item => (
                  <a
                    key={ item.id }
                    href={ `${ location.pathname }#${ item.id }` }
                    onClick={ () => setProject(item.id) }
                  >
                    <Icon icon="renciDash"
                      size={ 12 } margin="0 0.5rem 0 0"
                      fill={ project === item.id ? theme.color.primary.main : theme.color.grey.light }
                      style={{ transform: `scale(${ project === item.id ? '1.0' : '0.75' })`, transformOrigin: '100% 100%' }}
                    />
                    { item.text }
                  </a>
                )) }
                style={{ position: 'sticky', marginTop: '3rem', top: '6rem', }}
              />
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
