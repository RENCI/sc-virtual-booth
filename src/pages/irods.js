import React, { Fragment } from 'react'
import { SEO } from '../components/seo'
import { Container, Section } from '../components/layout'
import { Hero } from '../components/hero'
import { Title, Heading } from '../components/typography'
import { List } from '../components/list'
import { ExternalLink } from '../components/link'

const documents = [
  { text: 'iRODS Data Management Model', path: 'https://irods.org/images/data_management_model.jpg' },
  { text: 'Core: Integration Layer', path: 'https://irods.org/images/core_integration_layer.jpg' },
]

const links = [
  { text: 'Data Lifecycle', path: 'https://irods.org/images/data_lifecycle_diagram.jpg' },
  { text: 'Pattern:  Data to  Compute', path: 'https://irods.org/images/pattern_data_to_compute.jpg' },
  { text: 'Pattern:  Compute to Data', path: 'https://irods.org/images/pattern_compute_to_data.jpg' },
  { text: 'Pattern:  Synchronization', path: 'https://irods.org/images/pattern_synchronization.jpg' },
  { text: 'Pattern:  Data Transfer Nodes', path: 'https://irods.org/images/pattern_data_transfer_nodes.png' },
  { text: 'Capability:  Automated Ingest - Filesystem Scanner', path: 'https://irods.org/images/capability_automated_ingest_filesystem_scanner.jpg' },
  { text: 'Capability:  Automated Ingest - Landing Zone', path: 'https://irods.org/images/capability_automated_ingest_landing_zone.jpg' },
  { text: 'Capability:  Storage Tiering', path: 'https://irods.org/images/capability_storage_tiering.jpg' },
  { text: 'Capability:  Indexing', path: 'https://irods.org/images/capability_indexing.png' },
  { text: 'Capability:  Publishing', path: 'https://irods.org/images/capability_publishing.png' },
  { text: 'Capability:  Provenance', path: 'https://irods.org/images/capability_provenance.png' },
]

const videos = [
  { text: 'Overview', path: '' },
  { text: 'iRODS in Production from UGM2019', path: 'https://www.youtube.com/playlist?list=PL29FhEN41mZObEclkgMab9ROIeb19fL56' },
  { text: 'iRODS in Production from UGM2020', path: 'https://www.youtube.com/playlist?list=PL29FhEN41mZPxeQLdPBYTq8Ze9yEDK0Tz' },
]

export default () => {
  return (
    <Fragment>
      <SEO title="iRODS" />
      <Hero backgroundImage="https://picsum.photos/1200/303" />

      <Container>
        <Title>iRODS</Title>

        <Section>
          <Heading>Documents</Heading>
          <List items={ documents.map(item => <ExternalLink to={ item.path } key={ item.path }>{ item.text }</ExternalLink>) } />
        </Section>

        <Section>
          <Heading>Links</Heading>
          <List items={ links.map(item => <ExternalLink to={ item.path } key={ item.path }>{ item.text }</ExternalLink>) } />
        </Section>

        <Section>
          <Heading>Videos</Heading>
          <List items={ videos.map(item => <ExternalLink to={ item.path } key={ item.path }>{ item.text }</ExternalLink>) } />
        </Section>

      </Container>

    </Fragment>
  )
}
