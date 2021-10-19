import React, { useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Section } from '../layout'
import { Heading, Subheading, Paragraph } from '../typography'
import { useLogos } from '../../hooks'
import { List } from '../list'
import { Button, IconButton } from '../button'
import { Table } from '../table'
import { Link } from '../link'

const scheduleFields = [
  { key: 'Date',       name: 'Date',         hidden: false, },
  { key: 'Start_Time', name: 'Start',        hidden: false, },
  { key: 'End_Time',   name: 'End',          hidden: false, },
  { key: 'On_Duty',    name: 'People  Duty', hidden: true, },
  { key: 'Host',       name: 'Host',         hidden: true, },
]

export const AtlanticWaveSdx = () => {
  const { atlanticWaveSdxSchedule } = useStaticQuery(atlanticWaveSdxQuery)
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

