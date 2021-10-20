import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'
import { Icon } from './icon'

const ExternalLinkWrapper = styled.span`
  & > svg {
    opacity: 0.33;
  }
  &:hover svg {
    opacity: 1.0;
  }
`

export const ExternalLink = styled.a.attrs(props => ({
  href: props.to,
  target: '_blank',
  rel: 'noopener noreferrer',
}))``

export const Link = ({ to, children, ...props }) => {
  const mailtoPattern = new RegExp(/^mailto:/)
  const externalUrlPattern = new RegExp(/^https?:\/\//)
  const externalUrlMatch = externalUrlPattern.exec(to)
  const mailtoMatch = mailtoPattern.exec(to)
  
  if (externalUrlMatch || mailtoMatch) {
    return (
      <ExternalLinkWrapper>
        <ExternalLink to={ to } { ...props }>{ children }</ExternalLink>{' '}
        {
          typeof children === 'string' && (
            <Icon icon="externalLink" size={ 12 } />
          )
        }
      </ExternalLinkWrapper>
    )
  }
  return <GatsbyLink to={ to } { ...props }>{ children }</GatsbyLink>
}
