import React, { Fragment, useEffect, useState } from "react"
import { useTheme } from 'styled-components'
import { useLocation } from "@reach/router"
import { SEO } from '../components/seo'
import { Hero } from '../components/hero'
import { Container, Section } from '../components/layout'
import { Title, Heading, Paragraph } from '../components/typography'
import { Button } from '../components/button'
import { Link } from '../components/link'
import { List } from '../components/list'
import { Icon } from '../components/icon'
import heroBackground from '../images/hero-consortia.jpg'
import { Container as Grid, Row, Col } from 'react-grid-system'

const BioDataCatalyst = () => {
  return (
    <Section>
      <Heading>BioData Catalyst</Heading>

      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
      </Paragraph>
      
      <Button cta>Request a Meeting</Button>
    </Section>
  )
}

const Irods = () => {
  return (
    <Section>
      <Heading>iRODS</Heading>

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

      <Link to="https://irods.org/about/">Consortium Members</Link>

      <Button cta>Request a Meeting</Button>
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

      <Button cta>Request a Meeting</Button>
    </Section>
  )
}

const consortiaMenuItems = [
  { text: 'BioData Catalyst', id: 'bdc', component: <BioDataCatalyst /> },
  { text: 'iRODS', id: 'irods', component: <Irods /> },
  { text: 'NCDS', id: 'ncds', component: <NationalConsortiumfForDataScience /> },
  { text: 'South Big Data Hub', id: 'sbdh', component: <SouthBigDataHub /> },
]

const ConsortiaPage = () => {
  const [consortium, setConsortium] = useState('bdc')
  const theme = useTheme()
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
            brief overview. brief overview. brief overview. brief overview.
            brief overview. brief overview. brief overview. brief overview.
            brief overview. brief overview. brief overview.
        </p>
      </Hero>

      <Container>
        <Grid fluid>
          <Row>
            <Col xs={ 12 } md={ 3 } style={{ position: 'relative' }}>
              <List
                items={ consortiaMenuItems.map(item => (
                  <a
                    key={ item.id }
                    href={ `${ location.pathname }#${ item.id }` }
                    onClick={ () => setConsortium(item.id) }
                  >
                    <Icon icon="renciDash"
                      size={ 12 } margin="0 0.5rem 0 0"
                      fill={ consortium === item.id ? theme.color.primary.main : theme.color.grey.light }
                      style={{ transform: `scale(${ consortium === item.id ? '1.0' : '0.75' })`, transformOrigin: '100% 100%' }}
                    />
                    { item.text }
                  </a>
                )) }
                style={{ position: 'sticky', marginTop: '3rem', top: '6rem', }}
              />
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
