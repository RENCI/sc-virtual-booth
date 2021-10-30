import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { navigate } from '@reach/router'

const RIPPLE_DURATION = 500 // in milliseconds

export const Wrapper = styled.button(({ theme, cta, small, inverted }) => `
  background-color: ${ inverted ? theme.color.white : theme.color.primary.dark }99;
  color: ${ inverted ? theme.color.primary.dark : theme.color.white };
  padding: ${ small ? theme.spacing.xs : theme.spacing.sm } ${ small ? theme.spacing.sm : theme.spacing.md };
  border-radius: ${ theme.border.radius };
  border: ${ inverted ? `1px solid ${ theme.color.primary.dark }` : '0' };
  cursor: pointer;
  transition: filter 250ms, transform 250ms;
  text-transform: uppercase;
  position: relative;
  outline: 0;
  &:disabled {
    background-color: ${ theme.color.grey.main };
    cursor: default;
  }
  &:not(:disabled):hover {
    filter: brightness(1.1);
  }
  &:not(:disabled):active, &:not(:disabled):focus {
    filter: drop-shadow(0 0 4px ${ theme.color.primary.dark }66);
  }
  &.cta {
    display: block;
    margin: ${ theme.spacing.large } auto;
    padding: ${ theme.spacing.medium } ${ theme.spacing.large };
    font-size: 110%;
  }
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    left: 100%;
    top: 0;
    height: 100%;
    width: calc(100% + 1rem);
    transform: translate(-20px, 0);
    transform-origin: 0 50%;
    transition: transform 250ms, background-color 500ms;
    background-color: ${ theme.color.primary.darker }33;
    clip-path: polygon(1rem 0, 100% 0, 100% 100%, 0 100%);
    z-index: -1;
  }
  &:hover {
    &::before {
      background-color: ${ theme.color.primary.darker }66;
      transform: translate(-30px, 0);
      transition: transform 250ms 100ms, background-color 500ms;
    }
  }
  &:focus {
    &::before {
      background-color: ${ theme.color.primary.darker }cc;
      transform: translate(-100%, 0);
      transition: transform 250ms 100ms, background-color 1000ms;
    }
  }
`)

export const Button = ({ cta, link, to, children, ...props }) => {
  const [coords, setCoords] = useState({ x: -1, y: -1 })

  const handleClick = event => {
    // here, we check if the linked path is internal or external to this site,
    // and we'll define this openLink function accordingly
    let openLink
    if (link && to) {
      // check URL pattern
      const externalUrlPattern = new RegExp(/^https?:\/\//)
      const match = externalUrlPattern.exec(to)
      if (match) {
        // if the link is external, open link in new tab/window
        openLink = () => window.open(to, '_blank')
      } else {
        // if the link is internal, use Reach Router to navigate
        openLink = () => navigate(to)
      }
      // delay navigation to see a bit of the slide effect on the button
      setTimeout(openLink, 250)
    }
    // remove that timeout
    return clearTimeout(openLink)
  }

  return (
    <Wrapper onClick={ handleClick } className={ cta ? 'cta' : null } { ...props }>
      { children }
    </Wrapper>
  )
}

Button.propTypes = {
  cta: PropTypes.bool.isRequired,
  link: PropTypes.bool.isRequired,
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
}

Button.defaultProps = {
  cta: false,
  link: false,
  to: '',
}
