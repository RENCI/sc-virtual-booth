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
      fixed {
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
    } = useStaticQuery(logosQuery)

    const renciLogo = {
      light: renciLogoLight.childImageSharp.fixed,
      dark: renciLogoDark.childImageSharp.fixed,
    }
    const atlanticWaveSdx = atlanticWaveSdxLogo.childImageSharp.fixed
    return { renciLogo, atlanticWaveSdx }
}

