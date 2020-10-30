import { graphql, useStaticQuery } from 'gatsby'

const heroesQuery = graphql`{
  allFile(filter: {relativePath: {regex: "/hero/"}}) {
    nodes {
      childImageSharp {
        original {
          src
        }
      }
    }
  }
}`

export const useHeroes = () => {
    const { allFile } = useStaticQuery(heroesQuery)
    const heroImagePaths = allFile.nodes.map(node => node.childImageSharp.original.src)

    return { heroImagePaths }
}

