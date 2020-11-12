import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { navigate } from '@reach/router'

const RIPPLE_DURATION = 500 // in milliseconds

export const Wrapper = styled.button(({ theme, cta, small, inverted }) => `
  background-color: ${ inverted ? theme.color.white : theme.color.primary.main };
  background-image: linear-gradient(
    120deg,
    ${ inverted ? theme.color.white : theme.color.primary.main },
    ${ inverted ? theme.color.extended.mist : theme.color.extended.ocean }
  );
  color: ${ inverted ? theme.color.primary.dark : theme.color.white };
  padding: ${ small ? theme.spacing.xs : theme.spacing.sm } ${ small ? theme.spacing.sm : theme.spacing.md };
  border-radius: ${ theme.border.radius };
  border: ${ inverted ? `1px solid ${ theme.color.primary.dark }` : '0' };
  cursor: pointer;
  transition: filter 250ms;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
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
`)

const rippleEffect = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(10);
    opacity: 0;
  }
`

const Ripple = styled.span`
  position: absolute;
  left: -1;
  top: -1;
  transform: translate(-50%, -50%);
  content: "";
  display: block;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: #ffffff99;
  pointer-events: none;
  animation: ${ RIPPLE_DURATION }ms ease 1 forwards ${ rippleEffect };
`

export const Button = ({ cta, link, to, children, ...props }) => {
  const [coords, setCoords] = useState({ x: -1, y: -1 })
  const [isRippling, setIsRippling] = useState(false)

  const handleClick = event => {
    const { left, top, width, height } = event.target.getBoundingClientRect()
    const { clientX, clientY } = event
    if (clientX === 0 && clientY === 0) {
      setCoords({ x: width / 2 - 15, y: height / 2  - 15}) // unsure why `-15` offset is needed here
    } else {
      setCoords({ x: clientX - left - 15, y: clientY - top - 15 }) // unsure why `-15` offset is needed here
    }

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
      // delay navigation to see a bit of the rippling effect on the button
      setTimeout(openLink, 250)
    }
    // remove that timeout
    return clearTimeout(openLink)
  }

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true)
      setTimeout(() => setIsRippling(false), RIPPLE_DURATION)
    } else {
      setIsRippling(false)
    }
  }, [coords])

  useEffect(() => {
      if (!isRippling) setCoords({ x: -1, y: -1 })
    }, [isRippling])

  return (
    <Wrapper onClick={ handleClick } className={ cta ? 'cta' : null } { ...props }>
      { isRippling ? <Ripple style={{ left: coords.x, top: coords.y }} /> : null }
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
