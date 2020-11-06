import React, { Fragment, useEffect, useState } from "react"
import { useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { useLocation } from "@reach/router"
import { SEO } from '../components/seo'
import { Hero } from '../components/hero'
import heroBackground from '../images/hero-nrig.jpg'
import { Container, Section } from '../components/layout'
import { Title, Heading, Subheading, Paragraph } from '../components/typography'
import { SideMenu } from '../components/menu'
import { Container as Grid, Row, Col } from 'react-grid-system'
import { Button, IconButton } from '../components/button'
import { Link } from '../components/link'
import { useLogos } from '../hooks'

const AtlanticWaveSdx = () => {
  const { atlanticWaveSdxFlyer } = useStaticQuery(flyerQuery)
  const { atlanticWaveSdx } = useLogos()

  return (
    <Section>
      <Heading>AtlanticWave SDX</Heading>
      
      <Paragraph>
        <Link to="https://www.fiu.edu/">FIU</Link>
        , <Link to="https://www.renci.org/">RENCI</Link>
        , <Link to="https://www.isi.edu/">USC-ISI</Link>
        , and <Link to="https://www.gatech.edu/">Georgia Tech</Link> developed the AtlanticWave-SDX:
        a distributed Software-Defined Exchange, supporting research, and experimental deployments, on international scales.
        This demonstration will present the AtlanticWave-SDX and its features.
        We then create a network topology across four geographically dispersed exchange points,
        showing how the Pegasus application benefits from the AtlanticWave-SDX.
      </Paragraph>
      
      <Link to="https://nsf.gov/awardsearch/showAward?AWD_ID=2029278&HistoricalAwards=false">
        <Img fluid={ atlanticWaveSdx } />
      </Link>

      <Link to={ atlanticWaveSdxFlyer.publicURL }>
        <Img fluid={ atlanticWaveSdxFlyer.childImageSharp.fluid } style={{ height: `calc(762px * 0.75)` }} imgStyle={{ objectFit: 'contain' }} />
      </Link>

    </Section>
  )
}

const flyerQuery = graphql`{
  atlanticWaveSdxFlyer: file(relativePath: {eq: "atlantic-wave-sdx-flyer.jpg"}) {
    publicURL
    childImageSharp {
      fluid(maxWidth: 732) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}`

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

const ExoGeni = () => {
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

const Fabric = () => {
  return (
    <Fragment>
      <Section>
        <Heading>FABRIC</Heading>

        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vQnax4UWrDESwhPDlmDwkqbgbOgPMYDpdc56HpAcpPII3OawNHdwQSOvQ0Y7QwooOqraDXrnAYd40YB/embed?start=false&loop=true&delayms=15000"
          frameborder="0"
          width="700"
          height="410"
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        >
        </iframe>
      </Section>

      <Button cta link to="https://www.whatisfabric.net/get-involved">Get Involved</Button>

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

const projectsMenuItems = [
  { text: 'AtlanticWave SDX', id: 'atlantic-wave-sdx', component: <AtlanticWaveSdx /> },
  { text: 'Chameleon Cloud', id: 'chameleon-cloud', component: <ChameleonCloud /> },
  { text: 'ExoGENI', id: 'exogeni', component: <ExoGeni /> },
  { text: 'FABRIC', id: 'fabric', component: <Fabric /> },
  { text: 'ImPACT', id: 'impact', component: <Impact /> },
]

export default () => {
  const [project, setProject] = useState('atlantic-wave-sdx')
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
