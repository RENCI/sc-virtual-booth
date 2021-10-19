import React from 'react'
import { Section } from '../layout'
import { Heading, Subheading, Paragraph } from '../typography'
import { List } from '../list'
import { Button } from '../button'
import { Link } from '../link'

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
        <Link to="https://www.example.com/">Poseidon Website</Link>,
        <Link to="https://www.example.com/">Poseidon Presentation</Link>,
      ]} />

      <br/><br/>

      <Button cta link to="https://forms.gle/dQL3erSb2QnDVcQAA">Contact Poseidon</Button>

      <br/><br/>
      
    </Section>
  )
}

