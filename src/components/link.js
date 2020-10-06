import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'

export const Link = styled(GatsbyLink)``

export const ExternalLink = styled(GatsbyLink).attrs(props => ({
  href: props.to,
  rel: 'noopener noreferrer',
}))``