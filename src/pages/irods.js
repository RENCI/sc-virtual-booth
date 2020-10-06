import React, { Fragment } from 'react'
import { SEO } from '../components/seo'
import { Container } from '../components/layout'
import { Hero } from '../components/hero'
import { Title } from '../components/typography'

export default () => {
  return (
    <Fragment>
      <SEO title="iRODS" />
      <Hero backgroundImage="https://picsum.photos/1200/303" />

      <Container>
        <Title>iRODS</Title>
      </Container>

    </Fragment>
  )
}
