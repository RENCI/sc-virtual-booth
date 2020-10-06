import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { useScrollPosition } from '../hooks'

const slideIn = keyframes`
    0% {
        opacity: 0.0;
        transform: translate3d(0, -1rem, 0);
    }
    100% {
        opacity: 1.0;
        transform: translate3d(0, 0, 0);
    }
`

const Wrapper = styled.div(({ theme }) => `
  background-color: ${ theme.color.primary.main };
  color: ${ theme.color.white };
  height: 300px;
  position: relative;
  z-index: 0;
`)

const Background = styled.div(({ image, yShift }) => css`
  animation: ${ slideIn } 500ms ease-out forwards;
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
  z-index: 10;
`)

export const Hero = ({ children }) => {
  const { scrollPosition } = useScrollPosition()
  return (
    <Wrapper>
      <Background image="https://picsum.photos/1200/300" yShift={ scrollPosition / 2 } />
      <Contents>
        { children }
      </Contents>
    </Wrapper>
  )
}
