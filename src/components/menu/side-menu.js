import React from 'react'
import PropTypes from 'prop-types'
import styled, { useTheme } from 'styled-components'
import { Icon } from '../icon'

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  position: sticky;
  margin-top: 3rem;
  top: 6rem;
`

const MenuItem = styled.a(({ theme, active }) => `
  padding: ${ theme.spacing.extraSmall } 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.25rem;
  margin: 0.25rem 0;
  padding: ${ theme.spacing.small } ${ theme.spacing.medium };
  border-radius: 0.5rem;
  text-decoration: none !important;
  background-color: ${ theme.color.grey.light }${ active ? '66' : '22' };
  transition: background-color 500ms !important;
  &:hover {
    background-color: ${ theme.color.grey.light }55;
  }
  border: 1px solid ${ active ? `${ theme.color.primary.dark }33` : 'transparent' };
`)

export const SideMenu = ({ items, activeID }) => {
  const theme = useTheme()

  return (
    <Nav>
      {
        items.map(item => (
          <MenuItem key={ item.text } href={ item.path } active={ item.id === activeID }>
            <Icon icon="renciDash"
              size={ 12 } margin="0 0.5rem 0 0"
              fill={ item.id === activeID ? theme.color.primary.main : theme.color.grey.light }
              style={{ transform: `scale(${ item.id === activeID ? '1.0' : '0.75' })`, transformOrigin: '100% 100%', marginTop: '0.25rem' }}
            />
            <span>
              { item.text }
            </span>
          </MenuItem>
        ))
      }
    </Nav>
  )
}

SideMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
     text: PropTypes.string.isRequired,
     path: PropTypes.string.isRequired,
   })).isRequired,
}
