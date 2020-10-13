import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { useScrollPosition } from '../hooks'

const bgZoom = keyframes`
    0% {
        opacity: 0.0;
        transform: perspective(500px) translateZ(0px);
    }
    100% {
        opacity: 1.0;
        transform: perspective(500px) translateZ(20px);
    }
`

const contentZoom = keyframes`
    0% {
        opacity: 0.0;
        transform: perspective(500px) translateZ(-20px);
    }
    100% {
        opacity: 1.0;
        transform: perspective(500px) translateZ(0px);
    }
`

const Wrapper = styled.div(({ theme }) => `
  background-color: ${ theme.color.grey.light };
  border-style: solid;
  border-color: ${ theme.color.primary.dark };
  border-width: ${ theme.spacing.extraSmall } 0;
  color: ${ theme.color.white };
  height: 400px;
  position: relative;
  z-index: 0;
  overflow: hidden;
`)

const Background = styled.div(({ color, image, yShift }) => css`
  background-color: ${ color };
  animation: ${ bgZoom } 500ms ease-out forwards;
  background-image: url(${ image });
  background-size: cover;
  background-position: center calc(50% + ${ yShift }px);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`)

const Contents = styled.div(({ theme }) => css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  z-index: 1;
  padding: 2rem;
  animation: ${ contentZoom } 750ms ease-out forwards;
  & .highlight {
    transition: background-color 250ms;
    background-color: ${ theme.color.primary.darkest }bb;
    padding: ${ theme.spacing.small } ${ theme.spacing.medium };
    line-height: 1.5;
    box-decoration-break: clone;
    max-width: 100%;
    border-radius: ${ theme.border.radius };
    @media (min-width: 992px) {
      width: 75%;
      max-width: 800px;
    }
  }
  &:hover .highlight {
    background-color: ${ theme.color.primary.darkest }dd;
  }
`)

export const Hero = ({ backgroundImage, backgroundColor, children }) => {
  const scrollPosition = useScrollPosition()
  return (
    <Wrapper>
      <Background color={ backgroundColor } image={ backgroundImage } yShift={ scrollPosition / 2 } />
      <Contents>
        { children }
      </Contents>
    </Wrapper>
  )
}
