import React, { Fragment } from 'react'
import styled from 'styled-components'
import { SEO } from '../components/seo'
import { Container, Section } from '../components/layout'
import { Hero } from '../components/hero'
import { Title, Heading, Subheading } from '../components/typography'
import { List } from '../components/list'
import { ExternalLink } from '../components/link'
import heroBackground from '../images/hero-irods.jpg'
import { VideoPlayer } from '../components/video-player'

const documents = {
  general: [
    { text: 'iRODS Data Management Model', path: 'https://irods.org/images/data_management_model.jpg' },
    { text: 'Core: Integration Layer', path: 'https://irods.org/images/core_integration_layer.jpg' },
    { text: 'Data Lifecycle', path: 'https://irods.org/images/data_lifecycle_diagram.jpg' },
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

const videos = [
  { text: 'Overview', path: 'https://www.youtube.com/watch?v=_5eVd3NJ5BU' },
]

const playlists = [
  { text: 'UGM 2019', path: 'https://www.youtube.com/playlist?list=PL29FhEN41mZObEclkgMab9ROIeb19fL56' },
  { text: 'UGM 2020', path: 'https://www.youtube.com/playlist?list=PL29FhEN41mZPxeQLdPBYTq8Ze9yEDK0Tz' },
]

export default () => {
  return (
    <Fragment>
      <SEO title="iRODS" />
      
      <Hero backgroundImage={ heroBackground }>
        <Title><span className="highlight">iRODS</span></Title>
        <p className="highlight">
            brief overview. brief overview. brief overview. brief overview.
            brief overview. brief overview. brief overview.
        </p>
      </Hero>
      
      <Container>
        <Section>
          <Heading>Documents</Heading>

          <Subheading>General</Subheading>

          <List items={ documents.general.map(item => (
            <ExternalLink to={ item.path } key={ item.path } style={{ display: 'flex', justifyContent:'flex-start', alignItems: 'center', gap: '2rem' }}>
              <img src={ item.path } width="75px" alt="" /> { item.text }
            </ExternalLink>
          )) } />
          
          <Subheading>Patterns</Subheading>

          <List items={ documents.patterns.map(item => (
            <ExternalLink to={ item.path } key={ item.path } style={{ display: 'flex', justifyContent:'flex-start', alignItems: 'center', gap: '2rem' }}>
              <img src={ item.path } width="75px" alt="" /> { item.text }
            </ExternalLink>
          )) } />

          <Subheading>Capabilities</Subheading>

          <List items={ documents.capabilities.map(item => (
            <ExternalLink to={ item.path } key={ item.path } style={{ display: 'flex', justifyContent:'flex-start', alignItems: 'center', gap: '2rem' }}>
              <img src={ item.path } width="75px" alt="" /> { item.text }
            </ExternalLink>
          )) } />

        </Section>

        <Section>
          <Heading>Videos</Heading>

          <Subheading>iRODS Overview</Subheading>
          <List items={ videos.map(item => <VideoPlayer url={ item.path } key={ item.path } />) } />

          <Subheading>UGM Playlists</Subheading>
          <List items={ playlists.map(item => <ExternalLink to={ item.path } key={ item.path }>{ item.text }</ExternalLink>) } />

        </Section>

      </Container>

    </Fragment>
  )
}
