import React, { Fragment } from "react"
import { useTheme } from 'styled-components'
import { SEO } from '../components/seo'
import { Hero } from '../components/hero'
import { Container } from '../components/layout'
import { Heading, Paragraph } from '../components/typography'
import { Container as Grid, Row, Col } from 'react-grid-system'
import { Button } from '../components/button'
import { List } from '../components/list'
import sc20Logo from '../images/sc20-logo.png'

export default () => {
  const theme = useTheme()

  return (
    <Fragment>
      <SEO title="Home" />

      <Hero backgroundColor={ theme.color.black }>
        <img
          src={ sc20Logo }
          alt="SC20 Virtual Booth Logo"
          style={{ width: '178px', height: '190px', margin: 'auto' }}
        />
        <Heading style={{ color: theme.color.primary.main, fontWeight: 'normal', letterSpacing: '2px', margin: 'auto' }}>RENCI's Virtual Booth</Heading>
      </Hero>
      
      <Container>
        <Paragraph align="center" width="600px">
          SC20 &mdash; this year’s International Conference for High Performance Computing, Networking, Storage, and Analysis &mdash; will be held virtually Nov. 9-19, 2020.
          RENCI’s virtual booth highlights the newest advances from our researchers. 
        </Paragraph>
        
        <Paragraph align="center" width="600px">
          We look forward to this yearly gathering of the HPC community for the opportunity to connect with others and to build future collaborations.
          If our work interests you, please click the contact button on the page of interest, and one of our researchers will reach out to you shortly. 
        </Paragraph>

        <br /><br /><br />

        <Grid fluid>
          <Row>
            <Col xs={ 12 } md={ 7 } lg={ 6 }>
              <img src="https://picsum.photos/600/800" alt="placeholder" />
            </Col>
            <Col xs={ 12 } md={ 5 } lg={ 6 }>
              <Heading>WE DO DATA SCIENCE</Heading>
              <Paragraph>
                Every sector of society is undergoing a historic transformation driven by big data.
                RENCI is committed to transforming data into discoveries by partnering with leading universities, government, and
                the private sector to create tools and technologies that facilitate data access, sharing, analysis, management, and archiving. 
              </Paragraph>
              
              <Paragraph>
                Our efforts in data science span multiple initiatives and domain areas, including: 
              </Paragraph>

              <List bullets="disc"
                items={ [
                    'The Networking and Research Infrastructure Group (NRIG) and its $20 million NSF grant, FABRIC, along with other major projects such as DyNamo, IRIS, and Panorama 360.',
                    'iRODS, open source data management software used by research, commercial, and governmental organizations worldwide.',
                    'Cutting-edge health science research, including the NHLBI BioData Catalyst project, NCATS’ Biomedical Data Translator, and multiple translational science projects. ',
                    'Earth Data Science solutions that address the intersection of high performance and high throughput computing with Earth research by utilizing computational tools such as the storm surge and wind-wave model ADCIRC. ',
                    'National initiatives - such as the South Big Data Hub and the National Consortium for Data Science (NCDS) - that connect the data science community to each other and important resources.',
                  ] }
              />
            </Col>
          </Row>
        </Grid>

        <Button cta>Request a Meeting</Button>

      </Container>
    </Fragment>
  )
}
