import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export const Seo = ({ title, description, keywords = [], meta }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
          }
        }
      }
    `
  )
  
  const metaTitle = title || site.siteMetadata.title
  const metaDescription = description || site.siteMetadata.description
  const metaKeywords = site.siteMetadata.keywords.concat(keywords)
  const { siteUrl } = site.siteMetadata

  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={ metaTitle }
      titleTemplate={`%s | ${ site.siteMetadata.title }`}
      meta={
        [
          { name: `title`, content: metaTitle },
          { name: `description`, content: metaDescription },
          { name: `keywords`, content: metaKeywords },
          // Mobile meta tags
          { name: 'viewport', content: `width=device-width, initial-scale=1` },
          // Open Graph/Facebook meta tags
          { property: `og:title`, content: metaTitle },
          { property: `og:description`, content: metaDescription },
          { property: `og:url`, content: siteUrl },
          { property: `og:type`, content: `website` },
          { property: 'og:site_name', content: metaTitle },
          // Twitter meta tags
          // { name: 'twitter:card', content: 'summary_large_image' },
          // { name: 'twitter:site', content: `@${ twitterUsername }` },
          // { name: 'twitter:creator', content: twitterUsername },
          // { name: 'twitter:title', content: metaTitle },
          // { name: 'twitter:description', content: metaDescription },
        ].concat(meta)
      }
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}
