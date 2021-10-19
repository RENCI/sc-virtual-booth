import React, { Fragment } from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Seo } from '../components/seo'
import { Container as Grid, Row, Col } from 'react-grid-system'
import { Hero } from '../components/hero'
import { Container } from '../components/layout'
import { Title, Heading, Paragraph } from '../components/typography'
import { Button } from '../components/button'
import { Link } from '../components/link'
import heroBackground from '../images/hero-environmental-science.jpg'

const EdsPage = () => {
  const { hurricaneImage } = useStaticQuery(hurricaneImageQuery)

  return (
    <Fragment>
      <Seo title="Earth Data Science" />

      <Hero backgroundImage={ heroBackground }>
        <Title><span className="highlight">Earth Data Science</span></Title>
        <p className="highlight">
          Earth Data Science solutions address the intersection of high performance and high throughput computing with living
          at the coast by applying computational models (such as the tide, storm surge, and wind-wave model <Link to="https://adcirc.org/">ADCIRC</Link>) and data science.
        </p>
      </Hero>
      
      <Container>
        <br />

        <Grid fluid>
          <Row>
            <Col xs={ 12 } lg={ 6 }>
              <Img fluid={ hurricaneImage.childImageSharp.fluid } style={{ height: '700px' }} alt="Overhead view of hurricane Bob" />
            </Col>
            <Col xs={ 12 } lg={ 6 }>
              <Heading>Earth Data Science Research</Heading>
              <Paragraph>
                The Earth Data Science (EDS) group conducts research and applications into coastal hazard and risk problems associated with living along the coast.
                Primarily focused on weather-driven winds, storm surge, and waves, EDS uses state-of-the-art numerical/computational models
                together with data science approaches to characterize the threat posed by tropical cyclones and extra-tropical storms along the US eastern seaboard.
                From barrier islands to engineered levees, small details can matter significantly.
                The <Link to="https://adcirc.org/">ADCIRC</Link> tide, storm-surge, and wind-wave model is the primary engine for EDS’s research and applications.
                Formulated using linear triangular finite elements, ADICRC enables very high-resolution representation of the complexities of the coast.
                Together with academic, federal, state, and industry collaborators, EDS runs the operational ADCIRC Prediction System that provides
                real-time information on storm surge during North Atlantic tropical cyclone events.  
              </Paragraph>

              <Paragraph>
                Specific application areas include optimal, risk-based evacuation modeling; impacts of hurricane rainfall on coastal water level predictions;
                interactions of technology and social mechanisms on risk communication; and climate impacts on coastal risks.
              </Paragraph>
            </Col>
          </Row>
        </Grid>

      </Container>

      <Button cta link to="https://forms.gle/dQL3erSb2QnDVcQAA">Contact EDS</Button>

      <br/><br/><br/><br/>

    </Fragment>
  )
}

const hurricaneImageQuery = graphql`{
  hurricaneImage: file(relativePath: {eq: "hurricane-bob.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}`

export default EdsPage
