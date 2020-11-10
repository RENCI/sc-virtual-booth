import React, { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components'
// import axios from 'axios'
import { useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { useLocation } from '@reach/router'
import { SEO } from '../components/seo'
import { Hero } from '../components/hero'
import heroBackground from '../images/hero-nrig.jpg'
import { Container, Section } from '../components/layout'
import { Title, Heading, Subheading, Paragraph } from '../components/typography'
import { SideMenu } from '../components/menu'
import { Container as Grid, Row, Col } from 'react-grid-system'
import { List } from '../components/list'
import { Button, IconButton } from '../components/button'
import { Link } from '../components/link'
import { useLogos } from '../hooks'
import { ResponsiveIframe } from '../components/responsive-iframe'
import { VideoPlayer } from '../components/video-player'

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

const AtlanticWaveSdx = () => {
  const { atlanticWaveSdxFlyer } = useStaticQuery(flyerQuery)
  const { atlanticWaveSdx } = useLogos()
  const [schedule, setSchedule] = useState()
  
  // useEffect(() => {
  //   axios.get('https://docs.google.com/spreadsheets/d/1OGv6yZsotprneHjy1rTvs7hqej3OdMTtUpgaLdVM160/edit#gid=0')
  //     .then(response => console.log(response.data))
  //     .catch(error => console.error(error))
  // }, [])

  return (
    <Section>
      <Heading>Atlantic Wave SDX</Heading>
      
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

      <Heading>Links</Heading>

      <List bullets="disc" items={[
        <Link to="https://www.dropbox.com/s/5zk4wgd9cyze0il/Atlantic%20Wave-SDX_SC20%20presentation_v10.pptx?dl=0">Presentation</Link>,
      ]} />

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

      <List bullets="disc" items={[
        <Link to="https://www.dropbox.com/sh/qn6fc01fvebg2ib/AABrX83YZrAnkFTzDW-C4QTLa?dl=0">Chameleon Presentation</Link>
      ]} />
    </Section>
  )
}

const CiCoePilot = () => {
  return (
    <Section>
      <Heading>CI CoE Pilot</Heading>

      <Paragraph>
        CI CoE provides expertise and active support to cyberinfrastructure practitioners at NSF Major Facilities in order to
        accelerate the data lifecycle and ensure the integrity and effectiveness of the cyberinfrastructure upon which research and discovery depend.
      </Paragraph>

      <Paragraph>
        NSF's major multi-user research facilities (major facilities) are sophisticated research instruments and platforms
        &mdash; such as large telescopes, interferometers and distributed sensor arrays &mdash;
        that serve diverse scientific disciplines. Major facilities are increasingly dependent on advanced cyberinfrastructure (CI)
        &mdash; computing, data and software systems, networking, and associated human capital &mdash;
        to enable broad delivery and analysis of facility-generated data. As a result of these cyber infrastructure tools,
        scientists and the public gain new insights into fundamental questions.
        The goal of this pilot project is to develop a model for a Cyberinfrastructure Center of Excellence (CI CoE)
        that facilitates community building and sharing and applies knowledge of best practices and innovative solutions for facility CI.
      </Paragraph>

      <Paragraph>
        The pilot project will explore how such a center would facilitate CI improvements for existing facilities and
        for the design of new facilities that exploit advanced CI architecture designs and leverage establish tools and solutions.
        The pilot project will also catalyze a key function of an eventual CI CoE &mdash; to provide a forum for exchange of experience and knowledge among CI experts.
        The project will also gather best practices for major facilities, with the aim of enhancing individual facility CI efforts in the broader CI context.
        The discussion forum and planning effort for a future CI CoE will also address training and workforce development
        by expanding the pool of skilled facility CI experts and forging career paths for CI professionals.
        The result of this work will be a strategic plan for a CI CoE that will be evaluated and refined through community interactions: workshops and direct engagement with the facilities and the broader CI community.
      </Paragraph>

      <Heading>Videos</Heading>

      <VideoPlayer url="https://youtu.be/YtSfihl7zFc" />

      <Heading>Links</Heading>

      <List bullets="disc" items={[
        <Link to="https://cicoe-pilot.org/">CI CoE Pilot &mdash; Cyberinfrastructure Center of Excellence</Link>
      ]} />
    </Section>
  )
}

const Fabric = () => {
  return (
    <Fragment>
      <Section>
        <Heading>FABRIC</Heading>
        <ResponsiveIframe src="https://docs.google.com/presentation/d/e/2PACX-1vQnax4UWrDESwhPDlmDwkqbgbOgPMYDpdc56HpAcpPII3OawNHdwQSOvQ0Y7QwooOqraDXrnAYd40YB/embed?start=false&loop=true&delayms=15000" />
      </Section>

      <Button cta link to="https://www.whatisfabric.net/get-involved">Get Involved</Button>

    </Fragment>
  )
}

const FlyNet = () => {
  return (
    <Section>
      <Heading>FlyNet</Heading>

      <Paragraph>
        Unmanned Aerial Vehicles (also known as drones) are becoming popular in the sky.
        Their application reaches from hobby drones for leisurely activities to life-critical drones for organ transport to commercial applications such as air taxis.
        The safe, efficient, and economic operation of such drones poses a variety of challenges that have to be addressed by the science community.
        For example, drones need very detailed, close to the ground weather information for safe operations,
        and data processing and energy consumption of drones need to be intelligently handled.
        This project will provide tools that will allow researchers and drone application developers to address operational drone challenges by using advanced computer and network technologies.
      </Paragraph>

      <Paragraph>
        This project will provide an architecture and tools that will enable scientists to include edge computing devices in their computational workflows.
        This capability is critical for low latency and ultra-low latency applications like drone video analytics and route planning for drones.
        The proposed work will include four major tasks.
        First, cutting edge network and compute infrastructure will be integrated into the overall architecture to make them available as part of scientific workflows.
        Second, in-network processing at the network edge and core will be made available through new programming abstractions.
        Third, enhanced end-to-end monitoring capabilities will be offered.
        Finally, the architecture will leverage the Pegasus Workflow Management System to integrate in-network and edge processing capabilities.
      </Paragraph>

      <Paragraph>
        Providing best practices and tools that enable the use of advanced cyberinfrastructure for scientific workflows will have a broad impact on society in the long term.
        The science drivers that will be supported by this project have the potential to increase the safety and efficiency of drone applications,
        an area that will grow in significance in the foreseeable future.
        The project team will enable access to a rich set of resources for researchers and educators from a diverse set of institutions (historically black colleges and universities (HBCUs),
        community colleges, women’s colleges) to further democratize research.
        In addition, collaboration with the NSF REU (Research Experience for Undergraduates) Site in Consumer Networking
        will promote participation of under-served/under-represented students in project activities.
      </Paragraph>

      <Heading>Videos</Heading>

      <VideoPlayer url="https://www.dropbox.com/s/rojzs06hoz259du/renci_booth_elyons.mp4?raw=1" controls={ true } />

      <br/><br/>
      
      <VideoPlayer url="https://youtu.be/MNN80OHMQUQ" />

      <Heading>Links</Heading>

      <List bullets="disc" items={[
        <Link to="http://www.flynet-ci.org/">FlyNet</Link>
      ]} />

    </Section>
  )
}

const Panorama = () => {
  return (
    <Section>
      <Heading>Panorama</Heading>

      <Heading>Links</Heading>

      <List bullets="disc" items={[
        <Link to="https://www.dropbox.com/s/6ejf4o8ea5ta48t/2020-11-panorama-sc-v4.pptx?dl=0">Panorama 360 Presentation</Link>
      ]} />

    </Section>
  )
}

const projectsMenuItems = [
  { text: 'FABRIC', id: 'fabric', component: <Fabric /> },
  { text: 'Chameleon Cloud', id: 'chameleon-cloud', component: <ChameleonCloud /> },
  { text: 'Atlantic Wave SDX', id: 'atlantic-wave-sdx', component: <AtlanticWaveSdx /> },
  { text: 'CI CoE Pilot', id: 'ci-coe-pilot', component: <CiCoePilot /> },
  { text: 'Panorama 360', id: 'panorama', component: <Panorama /> },
  { text: 'FlyNet', id: 'flynet', component: <FlyNet /> },
]

export default () => {
  const [project, setProject] = useState('fabric')
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
          RENCI creates cyberinfrastructure solutions that enhance scientific research.
          With expertise in networking, architectures, distributed systems, and applications,
          our work enables secure and efficient collaboration and data management for
          cutting-edge computer science and data-intensive domain research.
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
