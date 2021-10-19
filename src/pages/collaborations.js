import React, { Fragment, useEffect, useState } from "react"
import { useLocation } from "@reach/router"
import { Seo } from '../components/seo'
import { Hero } from '../components/hero'
import { Container } from '../components/layout'
import { Title } from '../components/typography'
import { SideMenu } from '../components/menu'
import heroBackground from '../images/hero-collaborations.jpg'
import { Container as Grid, Row, Col } from 'react-grid-system'
import { BioDataCatalystCoordinatingCenter, Heal, Irods, NationalConsortiumfForDataScience, SouthBigDataHub } from '../components/projects'

const collaborationMenuItems = [
  { text: 'NHLBI BioData Catalyst', id: 'bdc', component: <BioDataCatalystCoordinatingCenter /> },
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
