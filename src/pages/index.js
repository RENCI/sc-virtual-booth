import React, { Fragment } from "react"
import Img from 'gatsby-image'
import { useTheme } from 'styled-components'
import { SEO } from '../components/seo'
import { Hero } from '../components/hero'
import { Container } from '../components/layout'
import { Title, Heading, Paragraph } from '../components/typography'
import { Button } from '../components/button'
import { Container as Grid, Row, Col } from 'react-grid-system'

export default ({ data }) => {
  const theme = useTheme()
  const sc20Logo = data.file.childImageSharp.fluid

  return (
    <Fragment>
      <SEO title="Home" />
      <Hero backgroundColor={ theme.color.black }>
        <Img
          fluid={ sc20Logo }
          alt="SC20 Virtual Booth Logo"
          style={{ width: '178px', height: '190px', margin: '0 0 1rem 0' }}
        />
        <Heading style={{ color: theme.color.primary.main, fontWeight: 'normal', letterSpacing: '2px' }}>Virtual Booth</Heading>
      </Hero>
      <Container>
        <Title>Home</Title>

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

export const query = graphql`
  {
    file(relativePath: {regex: "/sc20-logo.png/"}) {
      childImageSharp {
        fluid(maxWidth: 400) {
          base64
          tracedSVG
          srcWebp
          srcSetWebp
          originalImg
          originalName
        }
      }
    }
  }
`
