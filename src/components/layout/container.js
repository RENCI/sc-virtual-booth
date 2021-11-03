import styled, { css, keyframes } from 'styled-components'

const unfade = keyframes`
  0% {
    opacity: 0.0;
  }
  100% {
    opacity: 1.0;
  }
`

const CONTAINER_WIDTH = 1080

export const Container = styled.div(({ theme }) => css`
  width: 100%;
  max-width: ${ CONTAINER_WIDTH }px;
  margin: 0 auto;
  animation: ${ unfade } 500ms ease-out forwards;
  padding: ${ theme.spacing.medium } ${ theme.spacing.medium };
  @media(min-width: 792px) {
    padding: ${ theme.spacing.extraLarge } ${ theme.spacing.extraLarge };
  }
`)
