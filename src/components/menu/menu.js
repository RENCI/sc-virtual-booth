import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from '../link'

const Wrapper = styled.nav`
  display: flex;
  flex-direction: row;
  font-size: clamp(10pt, 1vw, 12pt);
`

const MenuItem = styled(Link)(({ theme }) => `
  color: ${ theme.color.black };
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: ${ theme.spacing.md };
  text-transform: uppercase;
  transition: background-color 500ms, color 500ms;
  &:hover, &:focus {
    transition: background-color 250ms, color 250ms;
    background-color: #e6e6e6;
  }
  &.active {
    background-color: #ddd;
    color: ${ theme.color.primary.darkest };
  }
`)

export const Menu = ({ items }) => {
  return (
    <Wrapper>
      { items.map(item => <MenuItem to={ item.path } key={ item.text } activeClassName="active">{ item.text }</MenuItem>) }
    </Wrapper>
  )
}

Menu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
     text: PropTypes.string.isRequired,
     path: PropTypes.string.isRequired,
   })).isRequired,
}
