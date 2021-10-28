import styled from 'styled-components'

export const Rule = styled.hr(({ theme, noMargin = false }) => `
  height: 1px;
  border: solid #cce8f4;
  border-width: 1px 0 0 0;
  margin: ${ noMargin ? 0 : theme.spacing.extraLarge } 0;
`)
