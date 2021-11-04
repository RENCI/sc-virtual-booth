import React, { Fragment, useEffect, useState } from 'react'
import { useLocation } from '@reach/router'
import { Seo } from '../components/seo'
import { Hero } from '../components/hero'
import heroBackground from '../images/hero-data-science.jpg'
import { Container } from '../components/layout'
import { Title } from '../components/typography'
import { SideMenu } from '../components/menu'
import { Container as Grid, Row, Col } from 'react-grid-system'
import { Covid19, Helx } from '../projects'

const projectsMenuItems = [
  { text: 'HeLx', id: 'helx', component: Helx },
  { text: 'COVID-19 Efforts', id: 'covid-19', component: Covid19 },
]

const DataSciencePage = () => {
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
      <Seo
        title="RENCI Data Science"
        description="Every sector of society is undergoing a historic transformation driven by big data. RENCI is committed to transforming data into discoveries by partnering with leading universities, government, and the private sector to create tools and technologies that facilitate data access, sharing, analysis, management, and archiving."
      />
      
      <Hero backgroundImage={ heroBackground }>
        <Title><span className="highlight">Data Science</span></Title>
        <p className="highlight">
        Every sector of society is undergoing a historic transformation driven by big data. RENCI is committed to transforming data into discoveries by partnering with leading universities, government, and the private sector to create tools and technologies that facilitate data access, sharing, analysis, management, and archiving.
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

export default DataSciencePage
