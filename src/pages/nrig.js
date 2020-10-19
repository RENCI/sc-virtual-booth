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
import { List } from '../components/list'
import heroBackground from '../images/hero-nrig.jpg'
import { Container as Grid, Row, Col } from 'react-grid-system'
import { useLogos } from '../hooks'


const AtlanticWaveSdx = () => {
  const { atlanticWaveSdx } = useLogos()

  return (
    <Fragment>
      <Section>
        <Heading>AtlanticWave SDX</Heading>
        <Img fixed={ atlanticWaveSdx } />
        <Paragraph>
          FIU, RENCI, USC-ISI and GA-Tech developed the AtlanticWave-SDX:
          a distributed Software-Defined Exchange, supporting research, and experimental deployments, on international scales.
          This demonstration will present the AtlanticWave-SDX and its features.
          We then create a network topology across four geographically dispersed exchange points,
          showing how the Pegasus application benefits from the AtlanticWave-SDX.
        </Paragraph>
      </Section>
    </Fragment>
  )
}

const Fabric = () => {
  const theme = useTheme()
  return (
    <Fragment>
      <Section>
        <Heading>FABRIC</Heading>
        <Subheading>FABRIC is the future</Subheading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Paragraph>

        <Subheading>What is FABRIC?</Subheading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Paragraph>

        <Subheading>Who is behind FABRIC?</Subheading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Paragraph>

        <Subheading>FABRIC is for everyone</Subheading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Paragraph>

      </Section>

      <Button cta>Schedule a Meeting</Button>

      <Button style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '1rem' }}>
          <Icon icon="zoomLogo" size={ 36 } fill={ theme.color.primary.main }/>
          <span>Join Zoom Talk</span>
      </Button>

    </Fragment>
  )
}

const Impact = () => {
  return (
    <Section>
      <Heading>Impact</Heading>

      <Subheading>Overview</Subheading>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Paragraph>

      <Subheading>Some Details</Subheading>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
      </Paragraph>
    </Section>
  )
}

const ChameleonCloud = () => {
  return (
    <Section>
      <Heading>Chameleon Cloud</Heading>

      <Subheading>Overview</Subheading>
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

      <Subheading>Some Details</Subheading>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
      </Paragraph>
    </Section>
  )
}

const Exogeni = () => {
  return (
    <Section>
      <Heading>ExoGENI</Heading>

      <Subheading>Overview</Subheading>
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
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Paragraph>

      <Subheading>Some Details</Subheading>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
      </Paragraph>
    </Section>
  )
}

const nrigProjectsMenuItems = [
  { text: 'FABRIC', id: 'fabric' },
  { text: 'Chameleon Cloud', id: 'chameleon-cloud' },
  { text: 'ImPACT', id: 'impact' },
  { text: 'ExoGENI', id: 'exogeni' },
  { text: 'AtlanticWave SDX', id: 'atlantic-wave-sdx' }
]

export default () => {
  const [project, setProject] = useState('fabric')
  const theme = useTheme()
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      setProject(location.hash.replace('#', ''))
    }
  }, [location.hash])

  return (
    <Fragment>
      <SEO title="NRIG" />
      
      <Hero backgroundImage={ heroBackground }>
        <Title><span className="highlight">NRIG</span></Title>
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
                items={ nrigProjectsMenuItems.map(item => (
                  <a
                    key={ item.id }
                    href={ `${ location.pathname }#${ item.id }` }
                    onClick={ () => setProject(item.id) }
                  >
                    <Icon icon="renciDash"
                      size={ 12 } margin="0 0.5rem 0 0"
                      fill={ project === item.id ? theme.color.primary.main : theme.color.grey.light }
                    />
                    { item.text }
                  </a>
                )) }
                style={{ position: 'sticky', marginTop: '3rem', top: '6rem', }}
              />
            </Col>
            <Col xs={ 12 } md={ 9 }>
              { project === 'atlantic-wave-sdx' && <AtlanticWaveSdx /> }
              { project === 'chameleon-cloud' && <ChameleonCloud /> }
              { project === 'exogeni' && <Exogeni /> }
              { project === 'fabric' && <Fabric /> }
              { project === 'impact' && <Impact /> }
            </Col>
          </Row>
        </Grid>
        
      </Container>

    </Fragment>
  )
}
