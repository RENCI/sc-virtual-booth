import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'

export const ExternalLink = styled.a.attrs(props => ({
  href: props.to,
  target: '_blank',
  rel: 'noopener noreferrer',
}))``

export const Link = ({ to, children, ...props }) => {
  const externalUrlPattern = new RegExp(/^https?:\/\//)
  const match = externalUrlPattern.exec(to)
  const LinkComponent = match ? ExternalLink : GatsbyLink
  return <LinkComponent to={ to } { ...props }>{ children }</LinkComponent>
}
