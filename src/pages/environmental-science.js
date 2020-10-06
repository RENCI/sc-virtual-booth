import React, { Fragment } from "react"
import { SEO } from '../components/seo'
import { Container as Grid, Row, Col } from 'react-grid-system'
import { Hero } from '../components/hero'
import { Container } from '../components/layout'
import { Title, Heading, Paragraph } from '../components/typography'
import { Button } from '../components/button'

export default () => {
  return (
    <Fragment>
      <SEO title="Environmental Science" />
      <Hero backgroundImage="https://picsum.photos/1200/302" />
      <Container>
        <Title>Environmental Science</Title>

        <Button cta>Our Work</Button>

        <br /><br />

        <Paragraph align="center" width="500px">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </Paragraph>

        <br /><br /><br />

        <Grid fluid>
          <Row>
            <Col xs={ 12 } md={ 7 } lg={ 6 }>
              <img src="https://picsum.photos/600/400" alt="placeholder" />
            </Col>
            <Col xs={ 12 } md={ 5 } lg={ 6 }>
              <Heading>Earth Data Science Research</Heading>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim
              </Paragraph>
              
              <Heading>Coastal Hazard and Risk Modeling</Heading>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim
              </Paragraph>
            </Col>
          </Row>
        </Grid>

      </Container>
    </Fragment>
  )
}
