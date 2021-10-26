import React from 'react'
import Img from 'gatsby-image'
import { Section } from '../components/layout'
import { Heading, Subheading, Paragraph } from '../components/typography'
import { List } from '../components/list'
import { Button } from '../components/button'
import { Link } from '../components/link'
import { ResponsiveIframe } from '../components/responsive-iframe'
import { VideoPlayer } from '../components/video-player'
import { useLogos } from '../hooks'

export const Fabric = () => {
  const { fabric } = useLogos()
  return (
    <Section>
      <Heading hidden>FABRIC</Heading>

      <Link to="http://www.fabric-testbed.net/">
        <Img fluid={ fabric } style={{ maxWidth: '500px', margin: 'auto' }} />
      </Link>

      <br />
      <br/>

      <Paragraph align="center" width="500px">
        <strong>FABRIC</strong> is Adaptive Programmable Research Infrastructure for Computer Science and Science Applications
      </Paragraph>

      <Paragraph>
        FABRIC is a unique national research infrastructure to enable cutting-edge and exploratory research at-scale
        in networking, cybersecurity, distributed computing and storage systems, machine learning, and science applications.
        FABRIC Across Borders (FAB) is an extension of the FABRIC testbed connecting the core North America infrastructure
        to nodes in Asia, Europe, and South America. 
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
