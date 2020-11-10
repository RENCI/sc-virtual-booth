import React, { Fragment, useEffect, useState } from "react"
import Img from 'gatsby-image'
import { useLocation } from "@reach/router"
import { SEO } from '../components/seo'
import { Hero } from '../components/hero'
import { Container, Section } from '../components/layout'
import { Title, Heading, Paragraph } from '../components/typography'
import { SideMenu } from '../components/menu'
import { Button } from '../components/button'
import { Link } from '../components/link'
import { List } from '../components/list'
import heroBackground from '../images/hero-consortia.jpg'
import { Container as Grid, Row, Col } from 'react-grid-system'
import { useLogos } from '../hooks'

const BioDataCatalyst = () => {
  const { biodataCatalyst } = useLogos()
  return (
    <Section>
      <Heading>NHLBI BioData Catalyst</Heading>

      <br/><br/>

      <Paragraph align="center" width="100%" maxWidth="500px">
        <Img fluid={ biodataCatalyst.fluid } alt="Visit BioData Catalyst Website" />
      </Paragraph>

      <br/><br/>

      <Paragraph>
        NHLBI BioData Catalyst is a cloud-based ecosystem providing tools, applications, and workflows in secure workspaces.
        The ecosystem is a dynamic resource that allows researchers to find, access, share, store, and compute on large scale datasets. 
      </Paragraph>

      <Paragraph>
        User feedback is encouraged as BioData Catalyst is building a community of practice,
        working collaboratively to solve technical and scientific challenges.
      </Paragraph>
      
      <Heading>Links</Heading>
      
      <List bullets="disc"
        items={[
          <Link to="https://biodatacatalyst.nhlbi.nih.gov/">NHLBI BioData Catalyst Website</Link>,
        ]}
      />

      <br/><br/>

      <Button cta link to="https://biodatacatalyst.nhlbi.nih.gov/contact">Contact BioData Catalyst</Button>
                        
    </Section>  )
}

const Irods = () => {
  const { irods } = useLogos()
  return (
    <Section>
      <Heading hidden>iRODS</Heading>

      <Link to="/irods">
        <Img fixed={ irods } />
      </Link>

      <br/><br/>

      <Paragraph>
        The iRODS Consortium brings together businesses, research organizations, universities, and government agencies to ensure the sustainability of iRODS by:
      </Paragraph>

      <List bullets="disc"
        items={[
        'Guiding further development of the software;',
        'Growing the user and developer communities; and',
        'Facilitating iRODS support, education, and collaboration opportunities.',
      ]} />

      <Paragraph>
        The Consortium maintains and supports a commercial-grade distribution of <Link to="https://github.com/irods/irods">iRODS</Link>
      </Paragraph>

      <Paragraph>
        The iRODS Consortium fields a team of software developers, application engineers, and support staff housed at RENCI at the University of North Carolina at Chapel Hill. Each year, the Consortium hosts the iRODS User Group Meeting, a symposium that draws 100+ participants to Chapel Hill to share iRODS technologies and case studies.
      </Paragraph>

      <Button cta>Request a Meeting</Button>

      <Heading>Links</Heading>

      <List bullets="disc"
        items={[
          <Link to="/irods">iRODS Virtual Booth</Link>,
          <Link to="https://irods.org/about/">Consortium Members</Link>,
        ]}
      />

    </Section>
  )
}

const NationalConsortiumfForDataScience = () => {
  return (
    <Section>
      <Heading>National Consortium for Data Science</Heading>

      <Paragraph>
        The National Consortium for Data Science (NCDS) is a collaboration of leaders in academia, industry,
        and government formed to address the data challenges and opportunities of the 21st century.
        The NCDS helps members take advantage of data in ways that result in new jobs and transformative discoveries.
      </Paragraph>

      <Paragraph>
        We connect diverse communities of data science experts to support a 21st century data-driven economy by:
      </Paragraph>

      <List bullets="disc"
        items={ [
          'Building data science career pathways and creating a data-literate workforce',
          'Bridging the gap between data scientists in the public and private sectors',
          'Supporting open and democratized data',
        ] }
      />
      
      <Button cta>Request a Meeting</Button>
    </Section>
  )
}

const SouthBigDataHub = () => {
  return (
    <Section>
      <Heading>South Big Data Hub</Heading>

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

      <List bullets="disc"
        items={[
          'Health Disparities',
          'Smart Cities',
          'Advanced Materials and Manufacturing',
          'Data Sharing & Cyberinfrastructure',
          'Social Cyber Security',
          'Environmental & Hazard Response',
          'Team Science',
          'Education & Workforce Development',
        ]}
      />

      <Button cta link to="mailto:Shannon_McKeen@kenan-flagler.unc.edu">Contact Us</Button>
    </Section>
  )
}

const consortiaMenuItems = [
  { text: 'NHLBI BioData Catalyst', id: 'bdc', component: <BioDataCatalyst /> },
  { text: 'iRODS', id: 'irods', component: <Irods /> },
  { text: 'NCDS', id: 'ncds', component: <NationalConsortiumfForDataScience /> },
  { text: 'South Big Data Hub', id: 'sbdh', component: <SouthBigDataHub /> },
]

const ConsortiaPage = () => {
  const [consortium, setConsortium] = useState('bdc')
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      setConsortium(location.hash.replace('#', ''))
    }
  }, [location.hash])

  return (
    <Fragment>
      <SEO title="Consortia" />

      <Hero backgroundImage={ heroBackground }>
        <Title><span className="highlight">Consortia</span></Title>
        <p className="highlight">
          Via consortia development and participation, RENCI brings together leaders in academia, industry, and government
          to address the data challenges and opportunities of the 21st century, such as democratizing data,
          creating sustainable and equitable data science career paths, and bridging the gap between data scientists in the public and private sectors.
        </p>
      </Hero>

      <Container>
        <Grid fluid>
          <Row>
            <Col xs={ 12 } md={ 3 } style={{ position: 'relative' }}>
              <SideMenu items={ consortiaMenuItems.map(item => ({ ...item, path: `#${ item.id }` })) } activeID={ consortium } />
            </Col>
            <Col xs={ 12 } md={ 9 }>
              { consortiaMenuItems.map(item => consortium === item.id && item.component ) }
            </Col>
          </Row>
        </Grid>
      </Container>


    </Fragment>
  )
}

export default ConsortiaPage
