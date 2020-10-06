import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Title = styled.h2`
  text-transform: uppercase;
`

export const Heading = styled.h3`
  text-transform: uppercase;
`

export const Paragraph = styled.p(({ align, width, maxWidth }) => `
  text-align: ${ align };
  width: ${ width };
  max-width: ${ maxWidth };
  margin: 1rem auto 2rem auto;
`)

Paragraph.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right']),
  width: PropTypes.string.isRequired,
  maxWidth: PropTypes.string.isRequired,
}

Paragraph.defaultProps = {
  align: 'left',
  width: '100%',
  maxWidth: '100%',
}