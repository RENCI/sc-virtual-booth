import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Wrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const MenuItem = styled(Link)(({ theme }) => `
  color: #eee;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: ${ theme.spacing.md };
  text-transform: uppercase;
  transition: background-color 250ms;
  &:hover {
    background-color: ${ theme.color.grey.dark };
  }
`)

export const Menu = ({ items }) => {
  return (
    <Wrapper>
      { items.map(item => <MenuItem to={ item.path } key={ item.text } >{ item.text }</MenuItem>) }
    </Wrapper>
  )
}

Menu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
     text: PropTypes.string.isRequired,
     path: PropTypes.string.isRequired,
   })).isRequired,
}
