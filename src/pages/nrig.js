import React, { Fragment } from "react"
import { SEO } from '../components/seo'
import { Hero } from '../components/hero'
import { Container } from '../components/layout'
import { Title } from '../components/typography'

export default () => {
  return (
    <Fragment>
      <SEO title="NRIG" />
      <Hero backgroundImage="https://picsum.photos/1200/306" />

      <Container>
        <Title>NRIG</Title>
      </Container>

    </Fragment>
  )
}
