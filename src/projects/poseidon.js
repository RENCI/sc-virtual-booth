import React from 'react'
import { Section } from '../components/layout'
import { Heading, Subheading, Paragraph } from '../components/typography'
import { List } from '../components/list'
import { Button } from '../components/button'
import { Link } from '../components/link'

export const Poseidon = () => {
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
        <Link to="https://www.dropbox.com/s/qccis4hb39zc2g4/PoSeiDon-SC21-RENCIBooth.pdf?dl=1">Poseidon Presentation</Link>,
        <Link to="https://sites.google.com/view/poseidon-workflows/">Poseidon Website</Link>,
      ]} />

      <br/><br/>

      <Button cta link to="https://forms.gle/dQL3erSb2QnDVcQAA">Contact Poseidon</Button>

      <br/><br/>
      
    </Section>
  )
}

