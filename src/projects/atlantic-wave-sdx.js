import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Section } from '../components/layout'
import { Heading, Subheading, Paragraph } from '../components/typography'
import { useLogos } from '../hooks'
import { List } from '../components/list'
import { Button, IconButton } from '../components/button'
import { Table } from '../components/table'
import { Link } from '../components/link'
import atlanticWavePromo from '../images/atlantic-wave-sdx-demo-promo.png'

const scheduleFields = [
  { key: 'date',       name: 'Date',            hidden: false, },
  { key: 'timeEnd',    name: 'Start',           hidden: false, },
  { key: 'timeStart',  name: 'End',             hidden: false, },
  { key: 'onDuty',     name: 'People on Duty',  hidden: true, },
  { key: 'Host',       name: 'Host',            hidden: true, },
]

const schedule = [
  { date: 'Nov 16',           timeEnd: '10:30am EST',      timeStart: "11:15 am EST",     onDuty: 'Yufeng Julio',         Host: 'Vassi' },
  { date: 'Nov 16',           timeEnd: '2:30pm EST',       timeStart: "3:15 pm EST",      onDuty: 'Yufeng Julio Heidi',   Host: 'Vassi' },
  { date: 'Nov 17',           timeEnd: '10:30am EST',      timeStart: "11:15 am EST",     onDuty: 'Yufeng Julio Heidi',   Host: 'Vassi' },
  { date: 'Nov 17',           timeEnd: '2:30pm EST',       timeStart: "3:15 pm EST",      onDuty: 'Yufeng Julio',         Host: 'Vassi' },
  { date: 'Nov 18',           timeEnd: '10:15am EST',      timeStart: "11:00 am EST",     onDuty: 'Yufeng Julio',         Host: 'Vassi' },
  { date: 'Nov 18',           timeEnd: '2:30pm EST',       timeStart: "3:15 pm EST",      onDuty: 'Yufeng Julio Heidi',   Host: 'Vassi' },
]

export const AtlanticWaveSdx = () => {
  const { atlanticWaveSdx } = useLogos()

  return (
    <Section>
      <Heading hidden>Atlantic Wave SDX</Heading>
      
      <Link to="https://nsf.gov/awardsearch/showAward?AWD_ID=2029278&HistoricalAwards=false">
        <GatsbyImage image={ atlanticWaveSdx.gatsbyImageData } alt="Atlantic Wave-SDX Logo" />
      </Link>
      
      <br/>

      <Paragraph>
        <Link to="https://www.fiu.edu/">FIU</Link>
        , <Link to="https://www.renci.org/">RENCI</Link>
        , <Link to="https://www.isi.edu/">USC-ISI</Link>
        , and <Link to="https://www.gatech.edu/">Georgia Tech</Link> developed the AtlanticWave-SDX:
        a distributed Software-Defined Exchange supporting research and experimental deployments on international scales.
        Challenges in the Wide-Area Networks (WAN) are being addressed by the application of network virtualization and 
        network programmability solutions using Software-Defined Networking (SDN) and Network Functions 
        Virtualization (NFV) technologies.  
        The AtlanticWave-SDX project focuses on new capabilities, enabling Open Exchange Points (OXPs) 
        to react to unplanned network events by adding intelligent closed-loop control of network services powered by in-band 
        network telemetry.
      </Paragraph>

      <Subheading>Demo/Office Hours</Subheading>

      <Paragraph>
      The goal of this demo is to showcase the benefits and challenges of deploying In-band Network 
      Telemetry (INT) in a long-haul production network. 
      Join a live demo by clicking the button below during the designated times.
      </Paragraph>

      <IconButton cta title="Live Demo and Q&A" link to="https://fiu.zoom.us/j/9643506307" icon="zoomLogo" iconFill="#eee" >Live Demo and Q&A</IconButton>
      {/* <IconButton cta title="Recorded Demo" link to="https://www.dropbox.com/s/ogj6s9fiaf7mms1/AtlanticWave-SDX-SC20.mp4?dl=0" icon="video" iconFill="#eee" iconSize={ 24 }>Recorded Demo</IconButton> */}
      
      <Paragraph>
      A recording will be available for download here following the live demo.
      </Paragraph>
      <br/><br/>

      { schedule && <Table columns={ scheduleFields.filter(field => !field.hidden ) } data={ schedule } /> }

      <img src={ atlanticWavePromo } alt="Atlantic Wave-SDX Live Demo Promo" />

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
