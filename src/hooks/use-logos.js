import { graphql, useStaticQuery } from 'gatsby'

const logosQuery = graphql`{
  renciLogoLight: file(relativePath: {eq: "renci.png"}) {
    childImageSharp {
      fixed(width: 110) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  renciLogoDark: file(relativePath: {eq: "renci-dark.png"}) {
    childImageSharp {
      fixed(width: 110) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  atlanticWaveSdxLogo: file(relativePath: {eq: "atlantic-wave-sdx-logo.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  biodataCatalystLogo: file(relativePath: {eq: "biodata-catalyst-logo.png"}) {
    childImageSharp {
      fixed(width: 200) {
        ...GatsbyImageSharpFixed
      }
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  irodsLogo: file(relativePath: {eq: "irods-logo.png"}) {
    childImageSharp {
      fixed(width: 180) {
        ...GatsbyImageSharpFixed
      }
    }
  }
}`

export const useLogos = () => {
    const {
      renciLogoLight,
      renciLogoDark,
      atlanticWaveSdxLogo,
      biodataCatalystLogo,
      irodsLogo,
    } = useStaticQuery(logosQuery)

    const renciLogo = {
      light: renciLogoLight.childImageSharp.fixed,
      dark: renciLogoDark.childImageSharp.fixed,
    }
    const atlanticWaveSdx = atlanticWaveSdxLogo.childImageSharp.fluid
    const biodataCatalyst = biodataCatalystLogo.childImageSharp
    const irods = irodsLogo.childImageSharp.fixed
    return { renciLogo, atlanticWaveSdx, biodataCatalyst, irods }
}

