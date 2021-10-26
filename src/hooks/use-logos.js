import { graphql, useStaticQuery } from 'gatsby'

const logosQuery = graphql`{
  renciLogoLight: file(relativePath: {eq: "renci.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FIXED)
    }
  }
  renciLogoDark: file(relativePath: {eq: "renci-dark.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FIXED)
    }
  }
  atlanticWaveSdxLogo: file(relativePath: {eq: "atlantic-wave-sdx-logo.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  biodataCatalystLogo: file(relativePath: {eq: "biodata-catalyst-logo.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  irodsLogo: file(relativePath: {eq: "irods-logo.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  chameleonLogo: file(relativePath: {eq: "chameleon-logo.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  fabricLogo: file(relativePath: {eq: "fabric-logo.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  ncdsLogo: file(relativePath: {eq: "ncds-logo.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  sbdhLogo: file(relativePath: {eq: "sbdh-logo.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  healLogo: file(relativePath: {eq: "heal-logo.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  helxLogo: file(relativePath: {eq: "helx-logo.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
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
      helxLogo,
      irodsLogo,
      ncdsLogo,
      sbdhLogo,
    } = useStaticQuery(logosQuery)

    const renciLogo = {
      light: renciLogoLight.childImageSharp.fixed,
      dark: renciLogoDark.childImageSharp.fixed,
    }
    const atlanticWaveSdx = atlanticWaveSdxLogo.childImageSharp
    const biodataCatalyst = biodataCatalystLogo.childImageSharp
    const chameleon = chameleonLogo.childImageSharp
    const fabric = fabricLogo.childImageSharp
    const heal = healLogo.childImageSharp
    const helx = helxLogo.childImageSharp
    const irods = irodsLogo.childImageSharp
    const ncds = ncdsLogo.childImageSharp
    const sbdh = sbdhLogo.childImageSharp
    return {
      renciLogo,
      atlanticWaveSdx,
      biodataCatalyst,
      chameleon,
      fabric,
      heal,
      helx,
      irods,
      ncds,
      sbdh,
    }
}

