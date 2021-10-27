import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Icon } from '../icon'
import { useScrollPosition } from '../../hooks'

const Nav = styled.nav(({ theme, offset }) => `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  position: sticky;
  margin-top: 0;
  margin-bottom: 2rem;
  top: 6rem;
  transform: translateY(${ offset });
  transition: transform 250ms ease-out;
  @media (min-width: 992px) {
    margin-top: 3rem;
    margin-bottom: 0;
  }
`)

const MenuItem = styled.a(({ theme, active }) => `
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  gap: 0.5rem;
  margin: 0.25rem 0;
  border-radius: ${ theme.border.radius };
  text-decoration: none !important;
  background-color: ${ theme.color.grey.light }${ active ? '66' : '22' };
  transition: background-color 500ms !important;
  &:hover {
    background-color: ${ theme.color.grey.light }55;
    & svg {
      transform-origin: 100% 100%;
      transform: scale(1.0);
    }
  }
  border: 1px solid ${ active ? `${ theme.color.primary.dark }33` : 'transparent' };
  & svg {
    transform-origin: 100% 100%;
    transform: scale(${ active ? '1.25' : '0.75' });
    fill: ${ active ? theme.color.primary.main : theme.color.grey.light };
  }
  & > .iconContainer {
    padding: 0.5rem 0.25rem;
    display: flex;
    flex: 0 0 32px;
    justify-content: center;
    align-items: center;
  }
  & > .textContainer {
    padding: 0.5rem 0.25rem;
    flex: 1;
    display: flex,
    justify-content: center;
    align-items: center;
  }
`)

export const SideMenu = ({ items, activeID }) => {
  const scrollPosition = useScrollPosition()

  return (
    <Nav offset={ scrollPosition > 415 ? '2rem' : '0' }>
      {
        items.map(item => (
          <MenuItem key={ item.text } href={ item.path } active={ item.id === activeID }>
            <div className="iconContainer">
              <Icon icon="renciDash" size={ 12 }  />
            </div>
            <div className="textContainer">
              { item.text }
            </div>
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
