import styled, { css, keyframes } from 'styled-components'

const unfade = keyframes`
    0% {
        opacity: 0.0;
        // transform: translate3d(0, -1rem, 0);
    }
    100% {
        opacity: 1.0;
        // transform: translate3d(0, 0, 0);
    }
`

const CONTAINER_WIDTH = 1080

export const Container = styled.div(({ theme }) => css`
  width: 100%;
  max-width: ${ CONTAINER_WIDTH }px;
  margin: 0 auto;
  padding: ${ theme.spacing.small } ${ theme.spacing.medium };
  animation: ${ unfade } 500ms ease-out forwards;
  @media(min-width: 792px) {
    padding: 3rem 2rem;
  }
`)
