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
        Join a live demo on [TBD] at [TBD] by clicking the button below.
        The recording will be available following the live demo.
      </Paragraph>

      <div style={{ display: 'flex', justifyContent: 'space-around', gap: '1rem' }}>
        <Button link to="https://www.dropbox.com/s/ogj6s9fiaf7mms1/AtlanticWave-SDX-SC20.mp4?dl=0">Watch a recorded Demo</Button>
        <IconButton link to="https://fiu.zoom.us/j/9643506307" icon="zoomLogo">Watch a Live Demo and Q&A</IconButton>
      </div>

      <br/><br/>

      { schedule && <Table columns={ scheduleFields.filter(field => !field.hidden ) } data={ schedule } /> }

      <br/><br/>

      <Subheading>Links</Subheading>

      <List bullets="disc" items={[
        <Link to="https://www.example.com/">Atlantic Wave SDX Presentation</Link>,
      ]} />

      <br/><br/>

      <Button cta link to="https://forms.gle/dQL3erSb2QnDVcQAA">Contact Atlantic Wave SDX</Button>

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

      <Button cta link to="https://forms.gle/dQL3erSb2QnDVcQAA">Contact Chameleon Cloud</Button>

      <br/><br/>

    </Section>
  )
}

const CiCompass = () => {
  return (
    <Section>
      <Heading>CI Compass</Heading>

      <Paragraph>
        The vision for CI Compass is to be the leader in supporting and enhancing the national CI ecosystem that includes people,
        practical knowledge, and processes to facilitate knowledge sharing and discovery across the National Science Foundation's
        (NSF) <Link to="https://ci-compass.org/about/nsf-major-facilities/">Major Facilities</Link> (MFs).
      </Paragraph>

      <Paragraph>
        The <Link to="https://ci-compass.org/about/ci-coe-pilot/">CICoE Pilot</Link> developed a data lifecycle (DLC) model that identifies
        specific stages of the data flow within MFs. The model captures the transformation of raw data into more interoperable
        and integration-ready data products that can be visualized, disseminated, and transformed into insights and knowledge.
      </Paragraph>

      <Subheading>RENCI's Role</Subheading>

      <Paragraph>
        <Link to="https://renci.org/">RENCI</Link> will play a pivotal role in the success of CI Compass by leading working groups that offer expertise and services to
        NSF Major Facilities for processing, data movement, data storage, curation, and archiving elements of the Major Facilities DLC.   
      </Paragraph>

      <Subheading>Videos</Subheading>

      <VideoPlayer url="https://www.youtube.com/watch?v=-LUjPwqd_VY" />

      <Subheading>Links</Subheading>

      <List bullets="disc" items={[
        <Link to="https://ci-compass.org/">CI Compass Website</Link>,
        <Link to="https://ci-compass.org/">CI Compass Presentation</Link>,
      ]} />

      <br/><br/>

      <Button cta link to="https://forms.gle/dQL3erSb2QnDVcQAA">Contact CI CoE Pilot</Button>

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

      <br/>

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

      <Subheading>Resources</Subheading>

      <ResponsiveIframe
        title="FABRIC Overview Presentation"
        src="https://docs.google.com/presentation/d/e/2PACX-1vQnax4UWrDESwhPDlmDwkqbgbOgPMYDpdc56HpAcpPII3OawNHdwQSOvQ0Y7QwooOqraDXrnAYd40YB/embed?start=false&loop=true&delayms=15000"
      />

      <br />

      <VideoPlayer url="https://youtu.be/wvgoGMojZGM" controls={ true } />

      <Subheading>Links</Subheading>

      <List bullets="disc" items={[
        <Link to="https://www.example.com/">FABRIC Testbed Presentation</Link>,
        <Link to="https://whatisfabric.net/">FABRIC Testbed Website</Link>,
        <Link to="https://twitter.com/FABRICtestbed">FABRICTestbed on Twitter</Link>,
        <Link to="https://learn.fabric-testbed.net/">FABRIC Knowledge Base</Link>,
        <Link to="https://www.whatisfabric.net/get-involved/beta-testers-request">Beta Testers Request Form</Link>,
        <Link to="https://www.whatisfabric.net/get-involved/funding-opportunities">Funding Opportunities</Link>,
      ]} />

      <br/><br/>
      <Button cta link to="https://forms.gle/dQL3erSb2QnDVcQAA">Contact FABRIC</Button>

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

      <Button cta link to="https://forms.gle/dQL3erSb2QnDVcQAA">Contact FlyNet</Button>

      <br/><br/>

    </Section>
  )
}

const Poseidon = () => {
  const theme = useTheme()
  return (
    <Section>
      <Heading>Poseidon</Heading>

      <Paragraph>
        PosEiDon will explore the use of simulation, ML, and hybrid methods to predict, understand, and optimize
        the behavior of complex DOE science workflows (simulation, instrument data analysis, ML, and superfacility)
        on production DOE computational and data infrastructure (CDI). The solutions will be developed based on
        data collected from DOE and NSF testbeds and validated and refined in production CDI.
      </Paragraph>

      <Subheading>RENCI's Role</Subheading>

      <Paragraph>
        RENCI will play a pivotal role in the Poseidon project. RENCI researchers will lead project efforts in data
        acquisition from the DOE CDI and NSF testbeds (FABRIC and Chameleon Cloud) and emulation of distributed
        facility models, enabling ML model training and validation on the testbeds and DOE CDI. Additionally, the
        RENCI team will lead the project portion on performance guidance for optimizing workflows.
      </Paragraph>

      <Subheading>Links</Subheading>

      <List bullets="disc" items={[
        <Link to="https://www.example.com/">Poseidon Website</Link>,
        <Link to="https://www.example.com/">Poseidon Presentation</Link>,
      ]} />

      <br/><br/>

      <Button cta link to="https://forms.gle/dQL3erSb2QnDVcQAA">Contact Poseidon</Button>

      <br/><br/>
      
    </Section>
  )
}

const projectsMenuItems = [
  { text: 'FABRIC', id: 'fabric', component: <Fabric /> },
  { text: 'Chameleon Cloud', id: 'chameleon-cloud', component: <ChameleonCloud /> },
  { text: 'Atlantic Wave SDX', id: 'atlantic-wave-sdx', component: <AtlanticWaveSdx /> },
  { text: 'CI Compass', id: 'ci-compass', component: <CiCompass /> },
  { text: 'Poseidon', id: 'poseidon', component: <Poseidon /> },
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
