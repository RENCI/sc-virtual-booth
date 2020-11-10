import React, { Fragment } from "react"
import { useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { SEO } from '../components/seo'
import { Container as Grid, Row, Col } from 'react-grid-system'
import { Hero } from '../components/hero'
import { Container } from '../components/layout'
import { Title, Heading, Paragraph } from '../components/typography'
import { Button } from '../components/button'
import heroBackground from '../images/hero-environmental-science.jpg'

export default () => {
  const { hurricaneImage } = useStaticQuery(hurricaneImageQuery)

  return (
    <Fragment>
      <SEO title="Earth Data Science" />

      <Hero backgroundImage={ heroBackground }>
        <Title><span className="highlight">Earth Data Science</span></Title>
        <p className="highlight">
            RENCI catalyzes data-driven discoveries in Earth science.
            Our nationally-recognized subject matter experts lead and contribute to projects that advance
            fundamental science and inform decision making in areas such as natural disasters, water, oceans, climate, and weather. 
        </p>
      </Hero>
      
      <Container>
        <br /><br />

        <Paragraph width="600px" center>
          Earth Data Science solutions that address the intersection of high performance and high throughput computing with living
          at the coast by applying computational models such as the tide, storm surge and wind-wave model ADCIRC and data science.
        </Paragraph>

        <br /><br />

        <Grid fluid>
          <Row>
            <Col xs={ 12 } md={ 7 } lg={ 6 }>
              <Img fluid={ hurricaneImage.childImageSharp.fluid } style={{ height: '700px' }} alt="Overhead view of hurricane Bob" />
            </Col>
            <Col xs={ 12 } md={ 5 } lg={ 6 }>
              <Heading>Earth Data Science Research</Heading>
              <Paragraph>
                The Earth Data Science (EDS) group conducts research and applications into coastal hazard and risk problems associated with living along the coast.
                Primarily focused on weather-driven winds, storm surge, and waves, EDS uses state-of-the-art numerical/computational models
                together with data science approaches to characterize the threat posed by tropical cyclones and extra-tropical storms along the US eastern seaboard.
                From barrier islands to engineered levees, small details can matter significantly.
                The ADCIRC tide, storm-surge, and wind-wave model is the primary engine for EDS’s research and applications.
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

      <Button cta link to="#">Connect with EDS</Button>

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