import React from 'react'
import { Section } from '../layout'
import { Heading, Subheading, Paragraph } from '../typography'
import { List } from '../list'
import { Button } from '../button'
import { Link } from '../link'
import { VideoPlayer } from '../video-player'

export const CiCompass = () => {
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

