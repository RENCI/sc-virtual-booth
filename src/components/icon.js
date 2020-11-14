import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

export const icons = {
  hamburger: <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>,
  renciDash: <path d="m0-0.3762 20.14 24.376h3.8604v-4.1967z" />,
  zoomLogo: <Fragment>
          <clipPath id="a"><path id="path2" d="m-200-175h1e3v562h-1e3z"/></clipPath>
          <clipPath id="b"><circle id="circle5" cx="107" cy="106" r="102"/></clipPath>
          <clipPath id="c"><circle id="circle8" cx="107" cy="106" r="100"/></clipPath>
          <clipPath id="d"><circle id="circle11" cx="107" cy="106" r="92"/></clipPath>
          <clipPath id="e"><path id="path14" d="m135 94.06 26-19c2.27-1.85 4-1.42 4 2v57.94c0 3.84-2.16 3.4-4 2l-26-19zm-88-16.86v43.2a17.69 17.69 0 0 0 17.77 17.6h63a3.22 3.22 0 0 0 3.23-3.2v-43.2a17.69 17.69 0 0 0-17.77-17.6h-63a3.22 3.22 0 0 0-3.23 3.2z" clipRule="evenodd"/></clipPath>
          <g id="g23" transform="matrix(.11765 0 0 .11765 -.58823 -.47059)" clipPath="url(#b)">
            <path d="m0-1h214v214h-214z" />
          </g>
          <g id="g27" transform="matrix(.11765 0 0 .11765 -.58823 -.47059)" clipPath="url(#c)">
            <path d="m2 1h210v210h-210z" fill="#fff"/>
          </g>
          <g id="g31" transform="matrix(.11765 0 0 .11765 -.58823 -.47059)" clipPath="url(#d)">
            <path d="m10 9h194v194h-194z" />
          </g>
          <g id="g35" transform="matrix(.11765 0 0 .11765 -.58823 -.47059)" clipPath="url(#e)">
            <path d="m42 69h128v74h-128z" fill="#fff" />
          </g>
        </Fragment>,
  // www
  email: <Fragment>
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </Fragment>,
  facebook: <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>,
  github: <path d="m11.999 0c-6.6266 0-11.999 5.5087-11.999 12.304 0 5.4361 3.4381 10.047 8.2069 11.675 0.60038 0.11263 0.81921-0.26737 0.81921-0.59365 0-0.29156-0.010431-1.0658-0.016706-2.0922-3.3379 0.74325-4.0422-1.6496-4.0422-1.6496-0.54588-1.4208-1.3327-1.7992-1.3327-1.7992-1.0896-0.76362 0.082492-0.7485 0.082492-0.7485 1.2045 0.08761 1.838 1.2682 1.838 1.2682 1.0704 1.88 2.809 1.3369 3.4926 1.0227 0.10901-0.79533 0.41843-1.3377 0.76176-1.6451-2.6646-0.31042-5.4663-1.3664-5.4663-6.0809 0-1.343 0.46779-2.4412 1.2354-3.3015-0.12383-0.31121-0.53556-1.562 0.11715-3.2562 0 0 1.0078-0.33082 3.3003 1.2614 0.95697-0.27266 1.9839-0.40936 3.0042-0.4139 1.0188 0.00416 2.0458 0.14132 3.0042 0.4139 2.2911-1.5922 3.2967-1.2614 3.2967-1.2614 0.65492 1.6942 0.24309 2.945 0.11924 3.2562 0.7691 0.8603 1.2339 1.9585 1.2339 3.3015 0 4.7267-2.806 5.7668-5.4795 6.0711 0.43094 0.37992 0.81479 1.1307 0.81479 2.2788 0 1.6443-0.01463 2.9714-0.01463 3.3747 0 0.32931 0.21584 0.71226 0.82511 0.59218 4.7648-1.6307 8.2001-6.2389 8.2001-11.673 0-6.7956-5.3733-12.304-12.001-12.304"/>,
  instagram: <Fragment>
              <path d="m12 2.1624c3.2041 0 3.5836 0.012242 4.8491 0.069974 1.17 0.053397 1.8053 0.24884 2.2282 0.41317a3.7179 3.7179 0 0 1 1.3798 0.89766 3.7179 3.7179 0 0 1 0.89766 1.3798c0.16434 0.42284 0.35982 1.0582 0.41318 2.2282 0.05773 1.2654 0.06997 1.6449 0.06997 4.8491 0 3.2042-0.01224 3.5836-0.06997 4.8491-0.0534 1.17-0.24889 1.8053-0.41318 2.2282a3.9739 3.9739 0 0 1-2.2774 2.2774c-0.42284 0.16434-1.0582 0.35982-2.2282 0.41318-1.2652 0.05773-1.6446 0.06997-4.8491 0.06997-3.2045 0-3.5838-0.01224-4.8491-0.06997-1.17-0.0534-1.8053-0.24889-2.2282-0.41318a3.7179 3.7179 0 0 1-1.3798-0.89766 3.718 3.718 0 0 1-0.89766-1.3798c-0.16434-0.42284-0.35982-1.0582-0.41317-2.2282-0.057732-1.2653-0.069974-1.6449-0.069974-4.8491 0-3.2042 0.012242-3.5836 0.069974-4.8491 0.053397-1.17 0.24884-1.8053 0.41317-2.2282a3.7179 3.7179 0 0 1 0.89775-1.3798 3.718 3.718 0 0 1 1.3798-0.89766c0.42284-0.16434 1.0582-0.35982 2.2282-0.41317 1.2654-0.057732 1.6449-0.069974 4.8491-0.069974m0-2.1621c-3.259 0-3.6678 0.013814-4.9475 0.072213-1.2773 0.058304-2.1496 0.26113-2.9128 0.55779a5.8822 5.8822 0 0 0-2.1254 1.3841 5.8822 5.8822 0 0 0-1.3845 2.1254c-0.29642 0.76333-0.49925 1.6356-0.55731 2.9129-0.058637 1.2797-0.072451 1.6885-0.072451 4.9475 0 3.259 0.013814 3.6678 0.072451 4.9475 0.058304 1.2773 0.26113 2.1496 0.55779 2.9128a5.8822 5.8822 0 0 0 1.3841 2.1254 5.8821 5.8821 0 0 0 2.1254 1.3841c0.76333 0.29666 1.6356 0.49949 2.9128 0.55779 1.2799 0.058399 1.6886 0.072213 4.9475 0.072213s3.6678-0.01381 4.9475-0.07221c1.2773-0.0583 2.1496-0.26113 2.9128-0.55779a6.136 6.136 0 0 0 3.5095-3.5095c0.29666-0.76333 0.49949-1.6356 0.55779-2.9128 0.0584-1.2799 0.07221-1.6886 0.07221-4.9475 0-3.259-0.01381-3.6678-0.07221-4.9475-0.0583-1.2773-0.26113-2.1496-0.55779-2.9128a5.8821 5.8821 0 0 0-1.3841-2.1254 5.8821 5.8821 0 0 0-2.1256-1.3844c-0.76333-0.29642-1.6356-0.49925-2.9129-0.55731-1.2797-0.058637-1.6885-0.072451-4.9475-0.072451z"/>
              <path d="m12 5.838a6.1621 6.1621 0 1 0 6.1621 6.1621 6.1621 6.1621 0 0 0-6.1621-6.1621zm0 10.162a3.9999 3.9999 0 1 1 4-3.9999 4 4 0 0 1-4 3.9999z"/>
              <circle cx="18.406" cy="5.5945" r="1.44"/>
            </Fragment>,
  link: <Fragment>
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
        </Fragment>,
  linkedIn: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>,
  rss: <Fragment>
        <path d="M0 0h24v24H0z" fill="none" />
        <circle cx="6.18" cy="17.82" r="2.18" />
        <path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z" />
      </Fragment>,
  slack: <g stroke-width=".19544">
          <path d="m5.0427 15.167c0 1.3876-1.1336 2.5212-2.5212 2.5212s-2.5212-1.1336-2.5212-2.5212 1.1336-2.5212 2.5212-2.5212h2.5212z"/>
          <path d="m6.3131 15.167c0-1.3876 1.1336-2.5212 2.5212-2.5212s2.5212 1.1336 2.5212 2.5212v6.3127c0 1.3876-1.1336 2.5212-2.5212 2.5212s-2.5212-1.1336-2.5212-2.5212z"/>
          <path d="m8.8343 5.0427c-1.3876 0-2.5212-1.1336-2.5212-2.5212s1.1336-2.5212 2.5212-2.5212 2.5212 1.1336 2.5212 2.5212v2.5212z"/>
          <path d="m8.8343 6.3131c1.3876 0 2.5212 1.1336 2.5212 2.5212s-1.1336 2.5212-2.5212 2.5212h-6.3127c-1.3876 0-2.5212-1.1336-2.5212-2.5212s1.1336-2.5212 2.5212-2.5212z"/>
          <path d="m18.958 8.8343c0-1.3876 1.1336-2.5212 2.5212-2.5212s2.5212 1.1336 2.5212 2.5212-1.1336 2.5212-2.5212 2.5212h-2.5212z"/>
          <path d="m17.688 8.8343c0 1.3876-1.1336 2.5212-2.5212 2.5212s-2.5212-1.1336-2.5212-2.5212v-6.3127c0-1.3876 1.1336-2.5212 2.5212-2.5212s2.5212 1.1336 2.5212 2.5212z"/>
          <path d="m15.167 18.958c1.3876 0 2.5212 1.1336 2.5212 2.5212s-1.1336 2.5212-2.5212 2.5212-2.5212-1.1336-2.5212-2.5212v-2.5212z"/>
          <path d="m15.167 17.688c-1.3876 0-2.5212-1.1336-2.5212-2.5212s1.1336-2.5212 2.5212-2.5212h6.3127c1.3876 0 2.5212 1.1336 2.5212 2.5212s-1.1336 2.5212-2.5212 2.5212z"/>
      </g>,
  twitter: <path d="m7.8436 20.89c8.4389 0 13.057-6.9981 13.057-13.057 0-0.19688 0-0.39376-0.0089-0.59063 0.8949-0.64433 1.6735-1.4587 2.2909-2.3804-0.82331 0.36691-1.7093 0.60853-2.64 0.72487 0.94859-0.56379 1.6735-1.4676 2.0225-2.5415-0.88595 0.52799-1.8703 0.90385-2.9174 1.1097-0.84121-0.8949-2.0314-1.4497-3.3469-1.4497-2.5326 0-4.5908 2.0583-4.5908 4.5908 0 0.35796 0.04475 0.70697 0.11634 1.047-3.8123-0.18793-7.195-2.0225-9.4591-4.7967-0.39376 0.68012-0.61748 1.4676-0.61748 2.3088 0 1.5929 0.81436 2.9979 2.0404 3.8212-0.75172-0.026847-1.4587-0.23267-2.0762-0.57274v0.062643c0 2.2194 1.584 4.0807 3.678 4.5013-0.38481 0.10739-0.78751 0.16108-1.2081 0.16108-0.29532 0-0.58168-0.02685-0.8591-0.08054 0.58168 1.8256 2.282 3.15 4.2866 3.1858-1.575 1.235-3.5528 1.9688-5.7005 1.9688-0.36691 0-0.73382-0.0179-1.0918-0.06264 2.0225 1.2887 4.4387 2.0493 7.025 2.0493" strokeWidth=".08949"/>,
  youtube: <path d="m12.018 4.2598s-7.1225 0.0014421-8.8984 0.48047c-0.97992 0.26358-1.7518 1.0391-2.0137 2.0254-0.47579 1.7875-0.47656 5.5176-0.47656 5.5176s7.7069e-4 3.7298 0.47656 5.5176c0.2619 0.98613 1.0338 1.7617 2.0137 2.0254 1.776 0.4789 8.8984 0.48047 8.8984 0.48047s7.1206-0.001572 8.8965-0.48047c0.98005-0.26371 1.7518-1.0393 2.0137-2.0254 0.47592-1.7877 0.47656-5.5176 0.47656-5.5176s-6.42e-4 -3.7301-0.47656-5.5176c-0.2619-0.98626-1.0336-1.7618-2.0137-2.0254-1.7758-0.47903-8.8965-0.48047-8.8965-0.48047zm-2.3301 4.6367 5.9531 3.3867-5.9531 3.3867v-6.7734z"/>,
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
