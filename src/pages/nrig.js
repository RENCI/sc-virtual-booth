import React, { Fragment, useEffect, useState } from 'react'
import { useLocation } from '@reach/router'
import { Seo } from '../components/seo'
import { Hero } from '../components/hero'
import heroBackground from '../images/hero-nrig.jpg'
import { Container } from '../components/layout'
import { Title } from '../components/typography'
import { SideMenu } from '../components/menu'
import { Container as Grid, Row, Col } from 'react-grid-system'
import { AtlanticWaveSdx, ChameleonCloud, CiCompass, Fabric, FlyNet, Iris, Poseidon } from '../projects'

const projectsMenuItems = [
  { text: 'FABRIC', id: 'fabric', component: Fabric },
  { text: 'Chameleon Cloud', id: 'chameleon-cloud', component: ChameleonCloud },
  { text: 'Atlantic Wave SDX', id: 'atlantic-wave-sdx', component: AtlanticWaveSdx },
  { text: 'CI Compass', id: 'ci-compass', component: CiCompass },
  { text: 'Poseidon', id: 'poseidon', component: Poseidon },
  { text: 'FlyNet', id: 'flynet', component: FlyNet },
  { text: 'IRIS', id: 'iris', component: Iris },
]

const NrigPage = () => {
  const [project, setProject] = useState('fabric')
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      setProject(location.hash.replace('#', ''))
      window.scroll({ top: 400 })
    }
  }, [location.hash])

  return (
    <Fragment>
      <Seo
        title="Network Research"
        description="RENCI creates cyberinfrastructure solutions that enhance scientific research. With expertise in networking, architectures, distributed systems, and applications, our work enables secure and efficient collaboration and data management for cutting-edge computer science and data-intensive domain research. "
      />
      
      <Hero backgroundImage={ heroBackground }>
        <Title><span className="highlight">Network Research</span></Title>
        <p className="highlight">
          RENCI creates cyberinfrastructure solutions that enhance scientific research.
          With expertise in networking, architectures, distributed systems, and applications,
          our work enables secure and efficient collaboration and data management for
          cutting-edge computer science and data-intensive domain research.
        </p>
      </Hero>

      <Container>
        <Grid fluid>
          <Row>
            <Col xs={ 12 } md={ 4 } style={{ position: 'relative' }}>
              <SideMenu items={ projectsMenuItems.map(item => ({ ...item, path: `#${ item.id }` })) } activeID={ project } />
            </Col>
            <Col xs={ 12 } md={ 8 }>
              { projectsMenuItems.map(item => project === item.id && <item.component key={ `section-${ item.id }` } /> ) }
            </Col>
          </Row>
        </Grid>
        
      </Container>

    </Fragment>
  )
}

export default NrigPage
