import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const icons = {
  hamburger: <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>,
  zoomLogo: <Fragment>
          <clipPath id="a"><path id="path2" d="m-200-175h1e3v562h-1e3z"/></clipPath>
          <clipPath id="b"><circle id="circle5" cx="107" cy="106" r="102"/></clipPath>
          <clipPath id="c"><circle id="circle8" cx="107" cy="106" r="100"/></clipPath>
          <clipPath id="d"><circle id="circle11" cx="107" cy="106" r="92"/></clipPath>
          <clipPath id="e"><path id="path14" d="m135 94.06 26-19c2.27-1.85 4-1.42 4 2v57.94c0 3.84-2.16 3.4-4 2l-26-19zm-88-16.86v43.2a17.69 17.69 0 0 0 17.77 17.6h63a3.22 3.22 0 0 0 3.23-3.2v-43.2a17.69 17.69 0 0 0-17.77-17.6h-63a3.22 3.22 0 0 0-3.23 3.2z" clip-rule="evenodd"/></clipPath>
          <g id="g23" transform="matrix(.11765 0 0 .11765 -.58823 -.47059)" clip-path="url(#b)">
            <path d="m0-1h214v214h-214z" />
          </g>
          <g id="g27" transform="matrix(.11765 0 0 .11765 -.58823 -.47059)" clip-path="url(#c)">
            <path d="m2 1h210v210h-210z" fill="#fff"/>
          </g>
          <g id="g31" transform="matrix(.11765 0 0 .11765 -.58823 -.47059)" clip-path="url(#d)">
            <path d="m10 9h194v194h-194z" />
          </g>
          <g id="g35" transform="matrix(.11765 0 0 .11765 -.58823 -.47059)" clip-path="url(#e)">
            <path d="m42 69h128v74h-128z" fill="#fff" />
          </g>
        </Fragment>
}

export const Icon = ({ icon, size, fill, ...rest }) => {
  return (
    <svg { ...rest } version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={ `${ size }px` } height={ `${ size }px` } viewBox="0 0 24 24" fill={ fill }>
      { icons[icon] }
    </svg>
  )
}

Icon.propTypes = {
  icon: PropTypes.oneOf(Object.keys(icons)),
  size: PropTypes.number.isRequired,
  fill: PropTypes.string.isRequired,
}

Icon.defaultProps = {
  size: 24,
  fill: '#333',
}
