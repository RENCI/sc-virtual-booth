import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const icons = {
  github: <path d="m11.999 0c-6.6266 0-11.999 5.5087-11.999 12.304 0 5.4361 3.4381 10.047 8.2069 11.675 0.60038 0.11263 0.81921-0.26737 0.81921-0.59365 0-0.29156-0.010431-1.0658-0.016706-2.0922-3.3379 0.74325-4.0422-1.6496-4.0422-1.6496-0.54588-1.4208-1.3327-1.7992-1.3327-1.7992-1.0896-0.76362 0.082492-0.7485 0.082492-0.7485 1.2045 0.08761 1.838 1.2682 1.838 1.2682 1.0704 1.88 2.809 1.3369 3.4926 1.0227 0.10901-0.79533 0.41843-1.3377 0.76176-1.6451-2.6646-0.31042-5.4663-1.3664-5.4663-6.0809 0-1.343 0.46779-2.4412 1.2354-3.3015-0.12383-0.31121-0.53556-1.562 0.11715-3.2562 0 0 1.0078-0.33082 3.3003 1.2614 0.95697-0.27266 1.9839-0.40936 3.0042-0.4139 1.0188 0.00416 2.0458 0.14132 3.0042 0.4139 2.2911-1.5922 3.2967-1.2614 3.2967-1.2614 0.65492 1.6942 0.24309 2.945 0.11924 3.2562 0.7691 0.8603 1.2339 1.9585 1.2339 3.3015 0 4.7267-2.806 5.7668-5.4795 6.0711 0.43094 0.37992 0.81479 1.1307 0.81479 2.2788 0 1.6443-0.01463 2.9714-0.01463 3.3747 0 0.32931 0.21584 0.71226 0.82511 0.59218 4.7648-1.6307 8.2001-6.2389 8.2001-11.673 0-6.7956-5.3733-12.304-12.001-12.304"/>,
  hamburger: <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>,
  renciDash: <path d="m0-0.3762 20.14 24.376h3.8604v-4.1967z" />,
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

export const Icon = ({ icon, size, fill, margin, style, ...rest }) => {
  return (
    <svg { ...rest } version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={ `${ size }px` } height={ `${ size }px` } viewBox="0 0 24 24" fill={ fill }
      style={{
        margin: margin,
        transition: 'all 250ms',
        ...style,
      }}
    >
      { icons[icon] }
    </svg>
  )
}

Icon.propTypes = {
  icon: PropTypes.oneOf(Object.keys(icons)),
  size: PropTypes.number.isRequired,
  fill: PropTypes.string.isRequired,
  margin: PropTypes.string.isRequired,
}

Icon.defaultProps = {
  size: 24,
  fill: '#333',
  margin: '0',
}
