import React from 'react'
import Img from 'gatsby-image'
import { Section } from '../layout'
import { Heading, Subheading, Paragraph } from '../typography'
import { useLogos } from '../../hooks'
import { List } from '../list'
import { Button } from '../button'
import { Link } from '../link'

export const ChameleonCloud = () => {
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
        <Link to="https://www.chameleoncloud.org/">Chameleon Cloud Website</Link>,
        <Link to="https://www.dropbox.com/sh/qn6fc01fvebg2ib/AABrX83YZrAnkFTzDW-C4QTLa?dl=0&preview=ChameleonSC2020.pptx">Chameleon Cloud Presentation</Link>,
      ]} />

      <br/><br/>

      <Button cta link to="https://forms.gle/dQL3erSb2QnDVcQAA">Contact Chameleon Cloud</Button>

      <br/><br/>

    </Section>
  )
}
