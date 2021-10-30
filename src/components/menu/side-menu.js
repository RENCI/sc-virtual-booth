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
  // border: 1px solid ${ active ? `${ theme.color.primary.dark }11` : `${ theme.color.primary.dark }66` };
  border: 1px solid ${ theme.color.primary.dark }${ active ? 'ff' : '66' };
  border-radius: ${ theme.border.radius };
  text-decoration: none !important;
  background-color: #e9f0f3;
  color: ${ active ? '#e9f0f3' : theme.color.primary.dark } !important;
  transform: perspective(500px) translate3d(0, 0, ${ active ? '10px' : 0 });
  transition: all 500ms !important;
  font-weight: normal;
  font-size: 90%;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    left: 100%;
    top: 0;
    height: 100%;
    width: calc(100% + 1rem);
    transform: translate(${ active ? '-100%' : '-20px' });
    transform-origin: 0 50%;
    transition: transform 250ms, background-color 500ms;
    background-color: ${ active ? `${ theme.color.primary.dark }cc` : `${ theme.color.primary.dark }11` };
    clip-path: polygon(1rem 0, 100% 0, 100% 100%, 0 100%);
    z-index: -1;
  }
  &:hover, &:focus {
    transition: all 150ms !important;
    color: ${ active ? '#e9f0f3' : theme.color.primary.dark } !important;
    transform: perspective(500px) translate3d(0, 0, 10px);
    &::before {
      transform: translate(${ active ? '-100%' : '-30px' });
      transition: transform 250ms, background-color 1000ms;
    }
  }
  & svg {
    transition: all 250ms 250ms !important;
    transform-origin: 100% 100%;
    transform: scale(${ active ? '1.25' : '0.75' });
    fill: ${ active ? theme.color.primary.main : theme.color.grey.main };
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
              <Icon icon="renciDash" size={ 12 } role="presentation" />
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
