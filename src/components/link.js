import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'

export const Link = styled(GatsbyLink)``

export const ExternalLink = styled.a.attrs(props => ({
  href: props.to,
  target: '_blank',
  rel: 'noopener noreferrer',
}))``