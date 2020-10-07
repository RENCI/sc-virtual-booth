import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { useScrollPosition } from '../hooks'

const zoomIn = keyframes`
    0% {
        opacity: 0.0;
        transform: perspective(500px) translateZ(0px);
    }
    100% {
        opacity: 1.0;
        transform: perspective(500px) translateZ(20px);
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
  animation: ${ zoomIn } 500ms ease-out forwards;
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

const Contents = styled.div(({ theme }) => `
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
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
