import React, { Fragment, useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { useLocation } from '@reach/router'
import { Seo } from '../components/seo'
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
import { Table } from '../components/table'

const scheduleFields = [
  { key: 'Date',       name: 'Date',         hidden: false, },
  { key: 'Start_Time', name: 'Start',        hidden: false, },
  { key: 'End_Time',   name: 'End',          hidden: false, },
  { key: 'On_Duty',    name: 'People  Duty', hidden: true, },
  { key: 'Host',       name: 'Host',         hidden: true, },
]

const AtlanticWaveSdx = () => {
  const { atlanticWaveSdxFlyer, atlanticWaveSdxSchedule } = useStaticQuery(atlanticWaveSdxQuery)
  const { atlanticWaveSdx } = useLogos()
  const [schedule, setSchedule] = useState()

  useEffect(() => {
    setSchedule(atlanticWaveSdxSchedule.edges.map((({ node }) => node)))
  }, [atlanticWaveSdxSchedule])

  return (
    <Section>
      <Heading hidden>Atlantic Wave SDX</Heading>
      
      <Link to="https://nsf.gov/awardsearch/showAward?AWD_ID=2029278&HistoricalAwards=false">
        <Img fluid={ atlanticWaveSdx } style={{ maxWidth: '562px' }}/>
      </Link>

      <Paragraph>
        <Link to="https://www.fiu.edu/">FIU</Link>
        , <Link to="https://www.renci.org/">RENCI</Link>
        , <Link to="https://www.isi.edu/">USC-ISI</Link>
        , and <Link to="https://www.gatech.edu/">Georgia Tech</Link> developed the AtlanticWave-SDX:
        a distributed Software-Defined Exchange supporting research and experimental deployments on international scales.
        This demonstration will present the AtlanticWave-SDX and its features.
        We then create a network topology across four geographically dispersed exchange points,
        showing how the Pegasus application benefits from the AtlanticWave-SDX.
      </Paragraph>

      <Subheading>Demo/Office Hours</Subheading>

      <Paragraph>
        You can watch a recorded demo or watch it <em>live</em>!
        Join a live demo by clicking the button below.
        Demo times are listed in the schedule below
      </Paragraph>

      <div style={{ display: 'flex', justifyContent: 'space-around', gap: '1rem' }}>
        <Button link to="https://www.dropbox.com/s/ogj6s9fiaf7mms1/AtlanticWave-SDX-SC20.mp4?dl=0">Watch a recorded Demo</Button>
        <IconButton link to="https://fiu.zoom.us/j/9643506307" icon="zoomLogo">Watch a Live Demo and Q&A</IconButton>
      </div>

      <br/><br/>

      { schedule && <Table columns={ scheduleFields.filter(field => !field.hidden ) } data={ schedule } /> }

      <br/><br/>

      <Link to={ atlanticWaveSdxFlyer.publicURL }>
        <Img fluid={ atlanticWaveSdxFlyer.childImageSharp.fluid } style={{ height: `calc(762px * 0.75)` }} imgStyle={{ objectFit: 'contain' }} />
      </Link>

      <Subheading>Links</Subheading>

      <List bullets="disc" items={[
        <Link to="https://www.dropbox.com/s/9afk6w61fnygman/AtlanticWave-SDX_SC20%20presentation_v11.pdf?dl=1">Atlantic Wave SDX Presentation</Link>,
      ]} />

      <br/><br/>

      <Button cta link to="https://forms.gle/GfzeKFR1LB6HAtvn9">Contact Atlantic Wave SDX</Button>

      <br/><br/>

    </Section>
  )
}


export const atlanticWaveSdxQuery = graphql`{
  atlanticWaveSdxFlyer: file(relativePath: {eq: "atlantic-wave-sdx-flyer.jpg"}) {
    publicURL
    childImageSharp {
      fluid(maxWidth: 732) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  atlanticWaveSdxSchedule: allSchedule {
    edges {
      node {
        Date
        Start_Time
        End_Time
        On_Duty
        Host
      }
    }
  }
}`


const ChameleonCloud = () => {
  const { chameleon } = useLogos()
  return (
    <Section>
      <Heading hidden>Chameleon Cloud</Heading>

      <Link to="http://nrig.renci.org/project/chameleon/">
        <Img fluid={ chameleon } />
      </Link>

      <Subheading>Overview</Subheading>

      <Paragraph>
        Chameleon is an <Link to="https://www.nsf.gov/">NSF</Link>-funded testbed system for Computer Science experimentation.
        It is designed to be deeply reconfigurable, with a wide variety of capabilities
        for researching systems, networking, distributed and cluster computing and security.
      </Paragraph>

      <Subheading>Links</Subheading>

      <List bullets="disc" items={[
        <Link to="http://nrig.renci.org/project/chameleon/">Chameleon Cloud Website</Link>,
        <Link to="https://www.dropbox.com/sh/qn6fc01fvebg2ib/AABrX83YZrAnkFTzDW-C4QTLa?dl=0&preview=ChameleonSC2020.pptx">Chameleon Cloud Presentation</Link>,
      ]} />

      <br/><br/>

      <Button cta link to="https://forms.gle/GfzeKFR1LB6HAtvn9">Contact Chameleon Cloud</Button>

      <br/><br/>

    </Section>
  )
}

const CiCoePilot = () => {
  return (
    <Section>
      <Heading>CI CoE Pilot</Heading>

      <Paragraph>
        CI CoE provides expertise and active support to cyberinfrastructure practitioners at <Link to="https://www.nsf.gov/">NSF</Link> Major Facilities in order to
        accelerate the data lifecycle and ensure the integrity and effectiveness of the cyberinfrastructure upon which research and discovery depend.
      </Paragraph>

      <Paragraph>
        NSF's major multi-user research facilities (major facilities) are sophisticated research instruments and platforms
        &mdash; such as large telescopes, interferometers and distributed sensor arrays &mdash;
        that serve diverse scientific disciplines. Major facilities are increasingly dependent on advanced cyberinfrastructure (CI)
        &mdash; computing, data and software systems, networking, and associated human capital &mdash;
        to enable broad delivery and analysis of facility-generated data. As a result of these cyberinfrastructure tools,
        scientists and the public gain new insights into fundamental questions.
        The goal of this pilot project is to develop a model for a Cyberinfrastructure Center of Excellence (CI CoE)
        that facilitates community building and sharing and applies knowledge of best practices and innovative solutions for facility CI.
      </Paragraph>

      <Paragraph>
        The pilot project will explore how such a center would facilitate CI improvements for existing facilities and
        for the design of new facilities that exploit advanced CI architecture designs and leverage established tools and solutions.
        The pilot project will also catalyze a key function of an eventual CI CoE &mdash; to provide a forum for exchange of experience and knowledge among CI experts.
        The project will also gather best practices for major facilities, with the aim of enhancing individual facility CI efforts in the broader CI context.
        The discussion forum and planning effort for a future CI CoE will also address training and workforce development
        by expanding the pool of skilled facility CI experts and forging career paths for CI professionals.
        The result of this work will be a strategic plan for a CI CoE that will be evaluated and refined through community interactions: workshops and direct engagement with the facilities and the broader CI community.
      </Paragraph>

      <Subheading>Videos</Subheading>

      <VideoPlayer url="https://youtu.be/YtSfihl7zFc" />

      <Subheading>Links</Subheading>

      <List bullets="disc" items={[
        <Link to="https://cicoe-pilot.org/">CI CoE Pilot &mdash; Cyberinfrastructure Center of Excellence</Link>
      ]} />

      <br/><br/>

      <Button cta link to="https://forms.gle/GfzeKFR1LB6HAtvn9">Contact CI CoE Pilot</Button>

      <br/><br/>

    </Section>
  )
}

const Fabric = () => {
  const { fabric } = useLogos()
  return (
    <Section>
      <Heading hidden>FABRIC</Heading>

      <Link to="http://www.fabric-testbed.net/">
        <Img fluid={ fabric } />
      </Link>

      <br/><br/>

      <Paragraph align="center" width="500px">
        <strong>FABRIC</strong> is Adaptive Programmable Research Infrastructure for Computer Science and Science Applications
      </Paragraph>

      <Paragraph>
        FABRIC is a unique national research infrastructure to enable cutting-edge and exploratory research at-scale in networking,
        cybersecurity, distributed computing and storage systems, machine learning, and science applications.
      </Paragraph>

      <Paragraph>
        It is an everywhere programmable nationwide instrument comprised of novel extensible network elements equipped with large amounts of compute and storage,
        interconnected by high speed, dedicated optical links. It will connect a number of specialized testbeds (5G/IoT PAWR, NSF Clouds)
        and high-performance computing facilities to create a rich fabric for a wide variety of experimental activities
      </Paragraph>

      <Paragraph>
        FABRIC is a collaboration between the core team of
        RENCI/UNC Chapel Hill,
        UIUC,
        University of Kentucky,
        Clemson University,
        LBNL/DOE,
        and includes
        University of Virginia,
        FIU,
        Georgia Tech,
        SRI (early experiments),
        CloudLab+Powder/University of Utah,
        Chameleon Cloud/University of Chicago,
        Cosmos+ERN/Rutgers University,
        PRP,
        PEERING/Columbia University,
        TACC,
        PSC,
        NCSA, and
        Internet2.
      </Paragraph>

      <br/><br/>

      <ResponsiveIframe
        title="FABRIC Overview Presentation"
        src="https://docs.google.com/presentation/d/e/2PACX-1vQnax4UWrDESwhPDlmDwkqbgbOgPMYDpdc56HpAcpPII3OawNHdwQSOvQ0Y7QwooOqraDXrnAYd40YB/embed?start=false&loop=true&delayms=15000"
      />

      <br />

      <VideoPlayer url="https://youtu.be/wvgoGMojZGM" controls={ true } />

      <Subheading>Links</Subheading>

      <List bullets="disc" items={[
        <Link to="https://whatisfabric.net/">whatisfabric.net</Link>,
        <Link to="https://twitter.com/FABRICtestbed">FABRICTestbed on Twitter</Link>
      ]} />

      <br/><br/>
      <Button cta link to="https://www.whatisfabric.net/get-involved">Get Involved</Button>

      <br/><br/>

    </Section>
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

      <Subheading>Videos</Subheading>

      <VideoPlayer url="https://www.dropbox.com/s/rojzs06hoz259du/renci_booth_elyons.mp4?raw=1" controls={ true } />

      <br/><br/>
      
      <VideoPlayer url="https://youtu.be/MNN80OHMQUQ" />

      <Subheading>Links</Subheading>

      <List bullets="disc" items={[
        <Link to="http://www.flynet-ci.org/">FlyNet</Link>
      ]} />

      <br/><br/>

      <Button cta link to="https://forms.gle/GfzeKFR1LB6HAtvn9">Contact FlyNet</Button>

      <br/><br/>

    </Section>
  )
}

const Panorama = () => {
  const theme = useTheme()
  return (
    <Section>
      <Heading>Panorama 360</Heading>

      <Subheading>Overview</Subheading>

      <Paragraph>
        Scientific workflows are now being used in a number of scientific domains, including
        astronomy, bioinformatics, climate modeling, earth science, civil engineering, physics, and many others.
        Unlike monolithic applications, workflows often run across heterogeneous resources distributed across wide area networks.
        Some workflow tasks may require high performance computing resources, while others can run efficiently on high throughput computing systems.
        Workflows also access data from potentially different data repositories and use data, often represented as files, to communicate between the workflow components.
        Because of these data access patterns, the performance of networks and storage devices greatly influence how smoothly and quickly a workflow runs.
      </Paragraph>
      <Paragraph>
        The PANORAMA project aims to address workflow performance through a three-pronged approach that involves:
      </Paragraph>
      <List bullets="disc" items={[
        `developing analytical models that can predict the behavior of complex, data-aware scientific workflows executing in extreme-scale infrastructures;`,
        `determining what monitoring information and information analysis is needed to predict performance and detect anomalies in scientific workflow execution; and`,
        `discovering how to adapt the workflow execution and the infrastructure to achieve the potential performance predicted by the models.`,
      ]} />
      <Paragraph>
        Workflow performance will be studied using two Department of Energy applications
        that depend on workflows: <Link to="http://climatemodeling.science.energy.gov/">Climate and Earth System Modeling</Link> (CESM),
        which processes large amounts of community data; and <Link to="https://neutrons.ornl.gov/sns">Spallation Neutron Source</Link> (SNS),
        which produces rich experimental data used in a variety of complex analyses.
      </Paragraph>

      <Subheading>RENCI's Role</Subheading>

      <Paragraph>
        <Link to="https://www.renci.org/">RENCI</Link> employs analytical performance models and monitoring information to facilitate detection and diagnosis of performance anomalies,
        to manage resources, and to adapt workflows as needed.
        The RENCI team will use models to predict expected application behavior, and combined with correlated monitoring information,
        will develop algorithms to automatically detect anomalies in system behavior and to automatically diagnose the most likely cause(s) of any found anomalies.
        An analysis capability will correlate workflow monitoring information with resource performance measurements to provide a better understanding of which resources contributed to an observed behavior.
        The RENCI team is also responsible for infrastructure and workflow adaptation in response to anomaly detection.
      </Paragraph>

      <Link to="https://www.dropbox.com/s/xw6dmybpvnef7m5/Panorama%20360%20visual.PNG?dl=0">
        <img src="https://www.dropbox.com/s/xw6dmybpvnef7m5/Panorama%20360%20visual.PNG?dl=1" alt="Infographic detailing Panorama 360 - Click to view larger" style={{ border: `2px solid ${ theme.color.primary.dark }` }} />
      </Link>

      <Subheading>Links</Subheading>

      <List bullets="disc" items={[
        <Link to="https://www.dropbox.com/s/6ejf4o8ea5ta48t/2020-11-panorama-sc-v4.pptx?dl=1">Panorama 360 Presentation</Link>,
        <Link to="https://www.dropbox.com/s/xw6dmybpvnef7m5/Panorama%20360%20visual.PNG?dl=1">Panorama 360 Overview</Link>,
      ]} />

      <br/><br/>

      <Button cta link to="https://forms.gle/GfzeKFR1LB6HAtvn9">Contact Panorama 360</Button>

      <br/><br/>
      
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

const NrigPage = () => {
  const [project, setProject] = useState('fabric')
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      setProject(location.hash.replace('#', ''))
      window.scroll({ top: 400 })
    }
  }, [location.hash])

  return (
    <Fragment>
      <Seo title="NRIG" />
      
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

export default NrigPage
