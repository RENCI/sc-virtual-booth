import React, { Fragment } from 'react'
import styled from 'styled-components'
import { useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { SEO } from '../components/seo'
import { Container, Section } from '../components/layout'
import { Hero } from '../components/hero'
import { Heading, Subheading } from '../components/typography'
import { Button } from '../components/button'
import { List } from '../components/list'
import { ListGrid } from '../components/list-grid'
import { Link } from '../components/link'
import { VideoPlayer } from '../components/video-player'
import { useLogos } from '../hooks'

const StackedLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & embed {
     margin-bottom: 1rem;
     pointer-events: none;
  }
  & > span {
    display: block;
    text-align: center;
  }
`

const documents = {
  general: [
    { text: 'Members Benefit Table', path: 'https://irods.org/uploads/members_benefit_sheet.pdf' },
    { text: 'iRODS Data Management Model', path: 'https://irods.org/images/data_management_model.jpg' },
  ],
  patterns: [
    { text: 'Data to Compute', path: 'https://irods.org/images/pattern_data_to_compute.jpg' },
    { text: 'Compute to Data', path: 'https://irods.org/images/pattern_compute_to_data.jpg' },
    { text: 'Synchronization', path: 'https://irods.org/images/pattern_synchronization.jpg' },
    { text: 'Data Transfer Nodes', path: 'https://irods.org/images/pattern_data_transfer_nodes.png' },
  ],
  capabilities: [
    { text: 'Automated Ingest - Filesystem Scanner', path: 'https://irods.org/images/capability_automated_ingest_filesystem_scanner.jpg' },
    { text: 'Automated Ingest - Landing Zone', path: 'https://irods.org/images/capability_automated_ingest_landing_zone.jpg' },
    { text: 'Storage Tiering', path: 'https://irods.org/images/capability_storage_tiering.jpg' },
    { text: 'Indexing', path: 'https://irods.org/images/capability_indexing.png' },
    { text: 'Publishing', path: 'https://irods.org/images/capability_publishing.png' },
    { text: 'Provenance', path: 'https://irods.org/images/capability_provenance.png' },
  ],
}

const videos = { 
  overview: { text: 'Overview', path: 'https://www.youtube.com/watch?v=_5eVd3NJ5BU' },
  other: [
    { text: 'iRODS in Production', path: 'https://www.youtube.com/playlist?list=PL29FhEN41mZObEclkgMab9ROIeb19fL56' },
    { text: 'User Group Meeting 2020', path: 'https://www.youtube.com/playlist?list=PL29FhEN41mZPxeQLdPBYTq8Ze9yEDK0Tz' },
  ]
}

const additionalInfo = [
  { text: 'irods.org', path: 'https://irods.org/' },
  { text: 'https://github.com/irods', path: 'https://github.com/irods' },
  { text: 'iRODS Consortium Members', path: 'https://irods.org/about' },
]

export default () => {
  const { irods } = useLogos()
  const data = useStaticQuery(circleOfLifeQuery)
  const circleOfLifeImage = data.file.childImageSharp.fluid

  return (
    <Fragment>
      <SEO title="iRODS" />

      <Link to="https://irods.org">
        <Img fluid={ circleOfLifeImage } style={{ height: `25vw` }} imgStyle={{ objectFit: 'contain' }} alt="iRODS - Data Centric, Metadata Driven" />
      </Link>
            
      <Container>
        <Button cta link to="https://forms.gle/cHxswNxrqoZMwJtJA">Request a Meeting</Button>

        <br /><br />

        <VideoPlayer url={ videos.overview.path } key={ videos.overview.path } />

        <Section>
          <Heading>Documents</Heading>

          <Subheading>General</Subheading>

          <ListGrid items={ documents.general.map(item => (
            <StackedLink to={ item.path } key={ item.path }>
              {
                item.path.endsWith('.pdf') ? (
                  <Link to={ item.path }>
                    <embed src={ item.path } type="application/pdf" width="100%" height="240px" />
                  </Link>
                ) : <img src={ item.path } width="100%" alt="" />
              }
              <span>{ item.text }</span>
            </StackedLink>
          )) } />
          
          <Subheading>Patterns</Subheading>

          <ListGrid items={ documents.patterns.map(item => (
            <StackedLink to={ item.path } key={ item.path }>
              <img src={ item.path } width="100%" alt="" />
              <span>{ item.text }</span>
            </StackedLink>
          )) } />

          <Subheading>Capabilities</Subheading>

          <ListGrid items={ documents.capabilities.map(item => (
            <StackedLink to={ item.path } key={ item.path }>
              <img src={ item.path } width="100%" alt="" />
              <span>{ item.text }</span>
            </StackedLink>
          )) } />

        </Section>

        <Section>
          <Heading>Other Videos</Heading>
          <List items={ videos.other.map(item => <Link to={ item.path } key={ item.path }>{ item.text }</Link>) } />
        </Section>

        <Section>
          <Heading>Additional Info</Heading>
          <List items={ additionalInfo.map(item => <Link to={ item.path } key={ item.path }>{ item.text }</Link>) } />

        </Section>

      </Container>

    </Fragment>
  )
}

const circleOfLifeQuery = graphql`{
  file(relativePath: {eq: "hero-irods.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 800) {
        base64
        tracedSVG
        srcWebp
        srcSetWebp
        originalImg
        originalName
      }
    }
  }
}`