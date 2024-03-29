import { graphql, useStaticQuery } from 'gatsby'

const heroesQuery = graphql`{
  allFile(filter: {relativePath: {regex: "/hero/"}}) {
    nodes {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
}`

export const useHeroes = () => {
    const { allFile } = useStaticQuery(heroesQuery)
    const heroImagePaths = allFile.nodes.map(node => node.childImageSharp.gatsbyImageData)

    return { heroImagePaths }
}

