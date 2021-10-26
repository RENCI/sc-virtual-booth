import styled, { keyframes } from 'styled-components'

const unfade = keyframes`
  0% {
    filter: opacity(0.0);
    transform: translate3d(0, 2px, 0);
  }
  100% {
    filter: opacity(1.0);
    transform: translate3d(0, 0, 0);
  }
`

export const Section = styled.section`
  margin: 2rem 0;
  animation: ${ unfade } 500ms ease-out forwards;
`
