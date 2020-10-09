import React, { Fragment } from "react"
import { SEO } from '../components/seo'
import { Hero } from '../components/hero'
import { Container } from '../components/layout'
import { Title } from '../components/typography'
import heroBackground from '../images/hero-nrig.jpg'

export default () => {
  return (
    <Fragment>
      <SEO title="NRIG" />
      
      <Hero backgroundImage={ heroBackground }>
        <Title><span className="highlight">NRIG</span></Title>
        <p className="highlight">
            brief overview. brief overview. brief overview. brief overview. brief overview.
            brief overview. brief overview. brief overview. brief overview. brief overview.
            brief overview. brief overview. brief overview. brief overview. brief overview.
            brief overview. brief overview. brief overview. brief overview. brief overview.
        </p>
      </Hero>

      <Container>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Container>

    </Fragment>
  )
}
