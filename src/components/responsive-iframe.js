import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  margin-bottom: 2rem;
  position: relative;
  height: 0;
  & iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`
export const ResponsiveIframe = props => {
  return (
    <Wrapper>
      <iframe title={ props.title } frameBorder="0" allowFullScreen={ true } { ...props }></iframe>
    </Wrapper>
  )
}

ResponsiveIframe.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
}
