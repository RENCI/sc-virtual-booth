import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Wrapper = styled.ul(({ theme, bullets }) => `
  list-style-type: ${ bullets };
  margin: ${ bullets === 'none' ? 0 : theme.spacing.medium };
`)

const ListItem = styled.li(({ theme }) => `
`)

export const List = ({ items, bullets = 'none', ...props }) => {
  return (
    <Wrapper bullets={ bullets } { ...props }>
      { items.map(item => <ListItem key={ item.key }>{ item }</ListItem>) }
    </Wrapper>
  )
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  bullets: PropTypes.oneOf(['none', 'disc', 'circle', 'square'])
}

List.defaultProps = {
  bullets: 'none',
}
