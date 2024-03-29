import React, { Fragment, useEffect, useState } from 'react'
import { useLocation } from '@reach/router'
import { Seo } from '../components/seo'
import { Hero } from '../components/hero'
import heroBackground from '../images/hero-health-science.jpg'
import { Container } from '../components/layout'
import { Title } from '../components/typography'
import { SideMenu } from '../components/menu'
import { Container as Grid, Row, Col } from 'react-grid-system'
import { BioDataCatalyst, DataTranslator, TranslationalScience } from '../projects'

const projectsMenuItems = [
  { text: 'NHLBI BioData Catalyst', id: 'bdc', component: BioDataCatalyst },
  { text: 'NCATS Biomedical Data Translator', id: 'data-translator', component: DataTranslator },
  { text: 'Translational Science', id: 'txscience', component: TranslationalScience },
]

const ClinicalInformaticsPage = () => {
  const [project, setProject] = useState('bdc')
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
        title="Clinical Informatics"
        description="RENCI leverages systems and technologies to fight disease and improve health. Our expert teams lead cross-cutting efforts to advance fundamental research and support meaningful improvements in clinical practice."
      />
      
      <Hero backgroundImage={ heroBackground }>
        <Title><span className="highlight">Clinical Informatics</span></Title>
        <p className="highlight">
          RENCI leverages systems and technologies to fight disease and improve health.
          Our expert teams lead cross-cutting efforts to advance fundamental research and support meaningful improvements in clinical practice.
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

export default ClinicalInformaticsPage
