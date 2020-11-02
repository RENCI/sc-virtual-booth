import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Wrapper = styled.ul(({ theme, gap }) => `
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: ${ theme.spacing.large };
`)

const ListGridItem = styled.li(({ theme }) => ``)

export const ListGrid = ({ items, ...props }) => {
  return (
    <Wrapper { ...props }>
      { items.map(item => <ListGridItem key={ item.key }>{ item }</ListGridItem>) }
    </Wrapper>
  )
}

ListGrid.propTypes = {
  items: PropTypes.array.isRequired,
  bullets: PropTypes.oneOf(['none', 'disc', 'circle', 'square'])
}

ListGrid.defaultProps = {
  bullets: 'none',
}
