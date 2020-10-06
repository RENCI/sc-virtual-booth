import { graphql, useStaticQuery } from 'gatsby'

const logoQuery = graphql`{
    renciLogo: file(relativePath: {regex: "/renci.png/"}) {
        childImageSharp {
            fixed(width: 110) {
                ...GatsbyImageSharpFixed
            }
        }
    }
    renciLogoDark: file(relativePath: {regex: "/renci-dark.png/"}) {
        childImageSharp {
            fixed(width: 110) {
                ...GatsbyImageSharpFixed
            }
        }
    }
}`

export const useBrand = () => {
    const { renciLogo, renciLogoDark } = useStaticQuery(logoQuery)
    const light = renciLogo.childImageSharp.fixed
    const dark = renciLogoDark.childImageSharp.fixed
    return { light, dark }
}
