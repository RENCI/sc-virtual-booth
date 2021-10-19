import React, { Fragment, useEffect, useState } from "react"
import Img from 'gatsby-image'
import { useLocation } from "@reach/router"
import { Seo } from '../components/seo'
import { Hero } from '../components/hero'
import { Container, Section } from '../components/layout'
import { Title, Heading, Subheading, Paragraph } from '../components/typography'
import { SideMenu } from '../components/menu'
import { Button } from '../components/button'
import { Link } from '../components/link'
import { List } from '../components/list'
import heroBackground from '../images/hero-collaborations.jpg'
import { Container as Grid, Row, Col } from 'react-grid-system'
import { useLogos } from '../hooks'

const BioDataCatalyst = () => {
  const { biodataCatalyst } = useLogos()
  return (
    <Section>
      <Heading hidden>NHLBI BioData Catalyst</Heading>

      <Img fluid={ biodataCatalyst.fluid } style={{ maxWidth: '500px', margin: 'auto' }} alt="BioData Catalyst Logo" />

      <Subheading>Overview</Subheading>

      <Paragraph>
        NHLBI BioData Catalyst is a cloud-based ecosystem providing tools, applications, and workflows in secure workspaces.
        The ecosystem is a dynamic resource that allows researchers to find, access, share, store, and compute on large scale datasets. 
      </Paragraph>

      <Paragraph>
        User feedback is encouraged as BioData Catalyst is building a community of practice,
        working collaboratively to solve technical and scientific challenges.
      </Paragraph>
      
      <Subheading>Links</Subheading>
      
      <List bullets="disc" items={[
        <Link to="https://biodatacatalyst.nhlbi.nih.gov/">NHLBI BioData Catalyst Website</Link>,
      ]} />

      <br/>
      
      <Button cta link to="https://biodatacatalyst.nhlbi.nih.gov/contact">Contact NHLBI BioData Catalyst</Button>
                        
    </Section>  )
}

const Heal = () => {
  const { heal } = useLogos()
  return (
    <Section>
      <Heading hidden>NIH HEAL Initiative</Heading>

      <Img fluid={ heal } style={{ maxWidth: '250px', margin: 'auto' }} alt="NIH HEAL Initiative logo" />

      <Subheading>Overview</Subheading>

      <Paragraph>
        The National Institutes of Health (NIH) Helping to End Addiction Long-term (HEAL) Initiative is an aggressive, transagency effort to speed scientific solutions to stem the national opioid public health crisis. 
      </Paragraph>
      
      <Paragraph>
        As part of the HEAL Data Stewardship Group, RENCI will work with HEAL Investigators and other stakeholders to develop processes for data harmonization, data storage, metadata collection, and sharing within the HEAL Data Ecosystem. The Stewards will provide solutions to manage and coordinate diverse teams and data across the Initiative. 
      </Paragraph>

      <Paragraph>
        The Stewards will:
         <List bullets="disc" items={[
          'Lead the HEAL Ecosystem engagement effort, which will examine and build upon the existing consensus-building activities, develop complementary stewardship and reporting structures, and incorporate extensive feedback from the HEAL community',
          'Provide oversight and consultancy for data management, which will help HEAL investigators generating data across the complex landscape of the HEAL Initiative adhere to program objectives in a coordinated and efficient manner',
          'Develop use cases to inform search capabilities, understand modeling requirements, adapt and promote flexible knowledge graph standards, create automated workflows to make HEAL data FAIR, provide data analytic and visualization tools, and collaborate with the HEAL Platform provider to enable novel discovery through the HEAL Data Ecosystem. ',
        ]} />
      </Paragraph>

      <Subheading>Links</Subheading>

      <List bullets="disc" items={[
        <Link to="https://heal.nih.gov/">NIH HEAL Website</Link>,
        <Link to="https://www.healdatafair.org/">NIH Data Stewards Website</Link>,
      ]} />

      <Button cta link to="https://forms.gle/dQL3erSb2QnDVcQAA">Contact HEAL</Button>
    </Section>
  )
}

const Irods = () => {
  const { irods } = useLogos()
  return (
    <Section>
      <Heading hidden>iRODS</Heading>

      <Link to="/irods">
        <Img fluid={ irods } style={{ maxWidth: '400px', margin: 'auto' }} alt="iRODS Logo" />
      </Link>

      <Subheading>Overview</Subheading>

      <Paragraph>
        The iRODS Consortium brings together businesses, research organizations, universities, and government agencies to ensure the sustainability of iRODS by:
      </Paragraph>

      <List bullets="disc" items={[
        'Guiding further development of the software;',
        'Growing the user and developer communities; and',
        'Facilitating iRODS support, education, and collaboration opportunities.',
      ]} />

      <Paragraph>
        The Consortium maintains and supports a commercial-grade distribution of <Link to="https://github.com/irods/irods">iRODS</Link>.
      </Paragraph>

      <Paragraph>
        The iRODS Consortium fields a team of software developers, application engineers, and support staff housed at RENCI
        at the University of North Carolina at Chapel Hill. Each year, the Consortium hosts the iRODS User Group Meeting,
        a symposium that draws 100+ participants to Chapel Hill to share iRODS technologies and case studies.
      </Paragraph>

      <br/>
      
      <Button cta link to="https://forms.gle/cHxswNxrqoZMwJtJA">Request a Meeting</Button>

      <Subheading>Links</Subheading>

      <List bullets="disc" items={[
        <Link to="/irods">iRODS Virtual Booth</Link>,
        <Link to="https://irods.org/about/">Consortium Members</Link>,
      ]} />

    </Section>
  )
}

const NationalConsortiumfForDataScience = () => {
  const { ncds } = useLogos()
  return (
    <Section>
      <Heading hidden>National Consortium for Data Science</Heading>

      <Img fluid={ ncds } style={{ maxWidth: '400px', margin: 'auto' }} alt="NCDS Logo" />

      <Subheading>Overview</Subheading>

      <Paragraph>
        The National Consortium for Data Science (NCDS) is a collaboration of leaders in academia, industry,
        and government formed to address the data challenges and opportunities of the 21st century.
        The NCDS helps members take advantage of data in ways that result in new jobs and transformative discoveries.
      </Paragraph>

      <Paragraph>
        We connect diverse communities of data science experts to support a 21st century data-driven economy by:
      </Paragraph>

      <List bullets="disc" items={[
        'Building data science career pathways and creating a data-literate workforce',
        'Bridging the gap between data scientists in the public and private sectors',
        'Supporting open and democratized data',
      ]} />
      
      <br/>

      <Button cta link to="https://forms.gle/dQL3erSb2QnDVcQAA">Contact NCDS</Button>
    </Section>
  )
}

const SouthBigDataHub = () => {
  const { sbdh } = useLogos()

  return (
    <Section>
      <Heading hidden>South Big Data Hub</Heading>

      <Img fluid={ sbdh } style={{ maxWidth: '500px', margin: 'auto' }} alt="South Big Data Hub Logo" />

      <Subheading>Overview</Subheading>
      
      <Paragraph>
        The South Big Data Innovation Hub is part of a network of four regional Big Data Hubs,
        launched by the National Science Foundation and funded in part by host universities and other partners.
        Managed jointly by RENCI and the Georgia Institute of Technology,
        the South Hub serves 16 states and the District of Columbia with more than 1000 member universities,
        corporations, foundations and cities committing their support.
        The South Hub works to accelerate  partnerships among people in business, academia,
        and government who apply data science and analytics to help solve regional and national challenges.
        The priority areas and areas of interest for the South Hub are:
      </Paragraph>

      <List bullets="disc" items={[
        'Health Disparities',
        'Smart Cities',
        'Advanced Materials and Manufacturing',
        'Data Sharing & Cyberinfrastructure',
        'Social Cybersecurity',
        'Environmental & Hazard Response',
        'Team Science',
        'Education & Workforce Development',
      ]} />

      <Subheading>Links</Subheading>

      <List bullets="disc" items={[
        <Link to="http://southbigdatahub.org/">South Big Data hub Website</Link>,
      ]} />

      <Button cta link to="https://forms.gle/dQL3erSb2QnDVcQAA">Contact SBDH</Button>
    </Section>
  )
}

const collaborationMenuItems = [
  { text: 'NHLBI BioData Catalyst', id: 'bdc', component: <BioDataCatalyst /> },
  { text: 'NIH HEAL Initiative', id: 'heal', component: <Heal /> },
  { text: 'iRODS', id: 'irods', component: <Irods /> },
  { text: 'NCDS', id: 'ncds', component: <NationalConsortiumfForDataScience /> },
  { text: 'South Big Data Hub', id: 'sbdh', component: <SouthBigDataHub /> },
]

const CollaborationsPage = () => {
  const [collaboration, setCollaboration] = useState('bdc')
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      setCollaboration(location.hash.replace('#', ''))
      window.scroll({ top: 400 })
    }
  }, [location.hash])

  return (
    <Fragment>
      <Seo title="Collaboration" />

      <Hero backgroundImage={ heroBackground }>
        <Title><span className="highlight">Collaborations</span></Title>
        <p className="highlight">
          Via consortia development and participation, RENCI brings together leaders in academia, industry, and government
          to address the data challenges and opportunities of the 21st century, such as democratizing data,
          creating sustainable and equitable data science career paths, and bridging the gap between data scientists in the public and private sectors.
        </p>
      </Hero>

      <Container>
        <Grid fluid>
          <Row>
            <Col xs={ 12 } md={ 4 } lg={ 3 } style={{ position: 'relative' }}>
              <SideMenu items={ collaborationMenuItems.map(item => ({ ...item, path: `#${ item.id }` })) } activeID={ collaboration } />
            </Col>
            <Col xs={ 12 } md={ 8 } lg={ 9 }>
              { collaborationMenuItems.map(item => collaboration === item.id && item.component ) }
            </Col>
          </Row>
        </Grid>
      </Container>


    </Fragment>
  )
}

export default CollaborationsPage
