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
      fluid(maxWidth: 500) {
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
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  chameleonLogo: file(relativePath: {eq: "chameleon-logo.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  fabricLogo: file(relativePath: {eq: "fabric-logo.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  ncdsLogo: file(relativePath: {eq: "ncds-logo.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  sbdhLogo: file(relativePath: {eq: "sbdh-logo.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  healLogo: file(relativePath: {eq: "heal-logo.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
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
      chameleonLogo,
      fabricLogo,
      healLogo,
      irodsLogo,
      ncdsLogo,
      sbdhLogo,
    } = useStaticQuery(logosQuery)

    const renciLogo = {
      light: renciLogoLight.childImageSharp.fixed,
      dark: renciLogoDark.childImageSharp.fixed,
    }
    const atlanticWaveSdx = atlanticWaveSdxLogo.childImageSharp.fluid
    const biodataCatalyst = biodataCatalystLogo.childImageSharp
    const chameleon = chameleonLogo.childImageSharp.fluid
    const fabric = fabricLogo.childImageSharp.fluid
    const heal = healLogo.childImageSharp.fluid
    const irods = irodsLogo.childImageSharp.fluid
    const ncds = ncdsLogo.childImageSharp.fluid
    const sbdh = sbdhLogo.childImageSharp.fluid
    return {
      renciLogo,
      atlanticWaveSdx,
      biodataCatalyst,
      chameleon,
      fabric,
      heal,
      irods,
      ncds,
      sbdh,
    }
}

