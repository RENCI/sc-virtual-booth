import React, { useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Section } from '../components/layout'
import { Heading, Subheading, Paragraph } from '../components/typography'
import { useLogos } from '../hooks'
import { List } from '../components/list'
import { Button, IconButton } from '../components/button'
import { Table } from '../components/table'
import { Link } from '../components/link'

const scheduleFields = [
  { key: 'Date',       name: 'Date',            hidden: false, },
  { key: 'Start_Time', name: 'Start',           hidden: false, },
  { key: 'End_Time',   name: 'End',             hidden: false, },
  { key: 'On_Duty',    name: 'People on Duty',  hidden: true, },
  { key: 'Host',       name: 'Host',            hidden: true, },
]

const schedule = [
  { Date: 'Nov 17',           Start_Time: '10:30am EST',      End_Time: "11:15 am EST",     On_Duty: 'Yufeng Julio',         Host: 'Vassi' },
  { Date: 'Nov 17',           Start_Time: '3:00pm EST',       End_Time: "3:45 pm EST",      On_Duty: 'Yufeng Julio Heidi',   Host: 'Vassi' },
  { Date: 'Nov 18',           Start_Time: '10:30am EST',      End_Time: "11:15 am EST",     On_Duty: 'Yufeng Julio Heidi',   Host: 'Vassi' },
  { Date: 'Nov 18',           Start_Time: '3:30pm EST',       End_Time: "4:15 pm EST",      On_Duty: 'Yufeng Julio',         Host: 'Vassi' },
  { Date: 'Nov 19',           Start_Time: '11:00am EST',      End_Time: "11:45 am EST",     On_Duty: 'Yufeng Julio',         Host: 'Vassi' },
  { Date: 'Nov 19',           Start_Time: '4:00pm EST',       End_Time: "4:45 pm EST",      On_Duty: 'Yufeng Julio Heidi',   Host: 'Vassi' },
]

export const AtlanticWaveSdx = () => {
  const { atlanticWaveSdx } = useLogos()

  return (
    <Section>
      <Heading hidden>Atlantic Wave SDX</Heading>
      
      <Link to="https://nsf.gov/awardsearch/showAward?AWD_ID=2029278&HistoricalAwards=false">
        <Img fluid={ atlanticWaveSdx } style={{ maxWidth: '500px', margin: 'auto' }} alt="Atlantic Wave-SDX Logo" />
      </Link>
      
      <br/>

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
