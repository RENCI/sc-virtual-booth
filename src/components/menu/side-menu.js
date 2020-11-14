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

const MenuItem = styled.a(({ theme }) => `
  padding: ${ theme.spacing.extraSmall } 0;
`)

export const SideMenu = ({ items, activeID }) => {
  const theme = useTheme()

  return (
    <Nav>
      {
        items.map(item => (
          <MenuItem key={ item.text } href={ item.path }>
            <Icon icon="renciDash"
              size={ 12 } margin="0 0.5rem 0 0"
              fill={ item.id === activeID ? theme.color.primary.main : theme.color.grey.light }
              style={{ transform: `scale(${ item.id === activeID ? '1.0' : '0.75' })`, transformOrigin: '100% 100%' }}
            />
            { item.text }
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
