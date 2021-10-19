import { useMemo } from 'react'
import ReactMarkdown from 'react-markdown'
import { Link } from './link'

export const Markdown = ({ src }) => {
  const componentMap = useMemo(() => ({
     a: function Anchor({ node, href, children, ...props }) { return <Link to={ href } { ...props }>{ children }</Link> },
  }), [])

  return (
    <ReactMarkdown components={ componentMap }>
      { src }
    </ReactMarkdown>
  )
}
