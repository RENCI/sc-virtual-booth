import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Title = styled.h1(({ theme, align }) => `
  margin: ${ theme.spacing.extraLarge } 0 ${ theme.spacing.large } 0;
  // text-transform: uppercase;
  text-align: ${ align };
  font-size: clamp(1.5rem, 5vw, 3rem)
`)

Title.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right']),
}

Title.defaultProps = {
  align: 'left',
}

export const Heading = styled.h2(({ theme }) => `
  margin: ${ theme.spacing.extraLarge } 0 ${ theme.spacing.large } 0;
  // text-transform: uppercase;
  color: ${ theme.color.primary.dark };
`)

export const Subheading = styled.h3(({ theme }) => `
  margin: ${ theme.spacing.extraLarge } 0 ${ theme.spacing.large } 0;
  font-style: italic;
  color: ${ theme.color.grey.dark };
`)

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