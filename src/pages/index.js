import React, { Fragment } from "react"
import { useTheme } from 'styled-components'
import { SEO } from '../components/seo'
import { Hero } from '../components/hero'
import { Container } from '../components/layout'
import { Heading, Paragraph } from '../components/typography'
import { Button } from '../components/button'
import { Container as Grid, Row, Col } from 'react-grid-system'
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
        <Heading style={{ color: theme.color.primary.main, fontWeight: 'normal', letterSpacing: '2px', margin: 'auto' }}>Virtual Booth</Heading>
      </Hero>
      
      <Container>
        <Button cta>Request a Meeting</Button>

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
              <Heading>WE DO DATA SCIENCE</Heading>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim
              </Paragraph>
              <Heading>CYBERINFRASTRUCTURE</Heading>
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
