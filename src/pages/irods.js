import React, { Fragment } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Seo } from '../components/seo'
import { Container, Section } from '../components/layout'
import { Heading, Subheading, Subsubheading } from '../components/typography'
import { Button } from '../components/button'
import { List } from '../components/list'
import { ListGrid } from '../components/list-grid'
import { Link } from '../components/link'
import { VideoPlayer } from '../components/video-player'

const StackedLink = styled(Link)(({ theme }) => `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  & object {
    flex: 1;
    // pointer-events: none;
  }
  object, img {
    max-height: calc(100% - 2.5rem);
    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.25));
    transition: filter 250ms;
  }
  &:hover object, &:hover img {
    filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.25));
  }
  & > .title {
    text-align: center;
  }
`)

const documents = {
  membership: [
    { text: 'Members Benefit Sheet', path: 'https://irods.org/images/members_benefit_sheet.jpg' },
  ],
  general: [
    { text: 'Core Integration layer', path: 'https://irods.org/images/core_integration_layer.jpg' },
    { text: 'Data Lifecycle', path: 'https://irods.org/images/data_lifecycle_diagram.jpg' },
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
    { text: 'User Group Meeting 2021', path: 'https://www.youtube.com/playlist?list=PL29FhEN41mZP8LhLnShmP48SBAY4nHxQ1' },
  ]
}

const additionalInfo = [
  { text: 'iRODS Website', path: 'https://irods.org/' },
  { text: 'iRODS GitHub', path: 'https://github.com/irods' },
  { text: 'iRODS Consortium Members', path: 'https://irods.org/about' },
]

const IrodsPage = () => {
  const data = useStaticQuery(circleOfLifeQuery)
  const circleOfLifeImage = data.file.childImageSharp

  return (
    <Fragment>
      <Seo
        title="iRODS" 
        description="The Integrated Rule-Oriented Data System (iRODS) is open-source data management software that enables research and commercial organizations, government agencies, and mission critical environments worldwide to test, document, control, and protect their data."
      />

      <Heading hidden>iRODS</Heading>

      <Link to="https://irods.org">
        <GatsbyImage image={ circleOfLifeImage.gatsbyImageData } alt="iRODS - Data Centric, Metadata Driven" />
      </Link>
            
      <Container>
        <Button cta link to="https://forms.gle/AKzyUj1yWPgPuXU4A">Request a Meeting</Button>

        <br /><br />

        <VideoPlayer url={ videos.overview.path } key={ videos.overview.path } />

        <Section>
          <Subheading>Documents</Subheading>

          <Subsubheading>Membership</Subsubheading>

          <ListGrid items={ documents.membership.map(item => (
            <StackedLink to={ item.path } key={ item.path }>
              <img src={ item.path } width="100%" alt="" />
              <span>{ item.text }</span>
            </StackedLink>
          )) } />

          <Subsubheading>General</Subsubheading>

          <ListGrid items={ documents.general.map(item => (
            <StackedLink to={ item.path } key={ item.path }>
              {
                item.path.endsWith('.pdf') ? (
                  <object type="application/pdf" data={ item.path } width="100%" height="240px">
                    Download <Link to={ item.path }>{ item.text }</Link>
                  </object>
                ) : <img src={ item.path } width="100%" alt="" />
              }
              <div className="title">{ item.text }</div>
            </StackedLink>
          )) } />
          
          <Subsubheading>Patterns</Subsubheading>

          <ListGrid items={ documents.patterns.map(item => (
            <StackedLink to={ item.path } key={ item.path }>
              <img src={ item.path } width="100%" alt="" />
              <span>{ item.text }</span>
            </StackedLink>
          )) } />

          <Subsubheading>Capabilities</Subsubheading>

          <ListGrid items={ documents.capabilities.map(item => (
            <StackedLink to={ item.path } key={ item.path }>
              <img src={ item.path } width="100%" alt="" />
              <span>{ item.text }</span>
            </StackedLink>
          )) } />

        </Section>

        <Section>
          <Subheading>Other Videos</Subheading>
          <List bullets="disc" items={ videos.other.map(item => <Link to={ item.path } key={ item.path }>{ item.text }</Link>) } />
        </Section>

        <Section>
          <Subheading>Additional Info</Subheading>
          <List bullets="disc" items={ additionalInfo.map(item => <Link to={ item.path } key={ item.path }>{ item.text }</Link>) } />

        </Section>

      </Container>

    </Fragment>
  )
}

const circleOfLifeQuery = graphql`{
  file(relativePath: {eq: "hero-irods.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}`

export default IrodsPage
