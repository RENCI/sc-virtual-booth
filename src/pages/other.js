import React, { Fragment, useEffect, useState } from 'react'
import { useLocation } from '@reach/router'
import { Seo } from '../components/seo'
import { Hero } from '../components/hero'
import heroBackground from '../images/hero-nrig.jpg'
import { Container } from '../components/layout'
import { Title } from '../components/typography'
import { SideMenu } from '../components/menu'
import { Container as Grid, Row, Col } from 'react-grid-system'
import { Covid19, Helx } from '../components/projects'

const projectsMenuItems = [
  { text: 'HeLx', id: 'helx', component: <Helx /> },
  { text: 'COVID-19 Efforts', id: 'covid-19', component: <Covid19 /> },
]

const OtherPage = () => {
  const [project, setProject] = useState('helx')
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      setProject(location.hash.replace('#', ''))
      window.scroll({ top: 400 })
    }
  }, [location.hash])

  return (
    <Fragment>
      <Seo title="Other RENCI Projects" />
      
      <Hero backgroundImage={ heroBackground }>
        <Title><span className="highlight">Other RENCI Projects</span></Title>
      </Hero>

      <Container>
        <Grid fluid>
          <Row>
            <Col xs={ 12 } md={ 3 } style={{ position: 'relative' }}>
              <SideMenu items={ projectsMenuItems.map(item => ({ ...item, path: `#${ item.id }` })) } activeID={ project } />
            </Col>
            <Col xs={ 12 } md={ 9 }>
              { projectsMenuItems.map(item => project === item.id && item.component ) }
            </Col>
          </Row>
        </Grid>
        
      </Container>

    </Fragment>
  )
}

export default OtherPage
