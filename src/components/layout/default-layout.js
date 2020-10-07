import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Menu, MobileMenu } from '../menu'
import { useWindowWidth } from '@react-hook/window-size'
import './style.css'
import menuItems from '../../menu'
import { useBrand } from '../../hooks'
import backgroundLines from '../../images/background-lines.png'
import { Paragraph } from '../../components/typography'

const MOBILE_THRESHHOLD = 792

const Wrapper = styled.div(({ theme }) => `
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: linear-gradient(to bottom, white 0%, white 33%, ${ theme.color.extended.mist } 100%);
`)

const Brand = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  padding: 2rem;
`

const Header = styled.header(({ theme }) => `
  background-color: ${ theme.color.white };
  color: ${ theme.color.black };
  display: flex;
  flex-direction: row;
  justify-content: space-between;100%
  align-items: stretch;
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.25));
  position: sticky;
  top: 0;
  z-index: 1;
`)

const Main = styled.main`
  flex: 1;
  width: 100%;
  z-index: 0;
  background-image: url(${ backgroundLines });
  background-size: 1200px;
  background-repeat: no-repeat;
  background-position: 100% 100%;
`

const Footer = styled.footer(({ theme }) => `
  padding: 2rem 2rem;
  background-color: ${ theme.color.white };
  color: ${ theme.color.black };
  text-align: center;
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.25));
`)

export const DefaultLayout = ({ children }) => {
  const windowWidth = useWindowWidth()
  const { light: logo } = useBrand()
  
  return (
    <Wrapper>
      <Header>
        <Brand>
          <Img fixed={ logo } style={{ width: '82.5px', height: '54px', margin: 0 }} />
        </Brand>
        { windowWidth <= MOBILE_THRESHHOLD  ? <MobileMenu items={ menuItems } /> : <Menu items={ menuItems } /> }
      </Header>
      <Main>
        { children }
      </Main>
      <Footer>
        <Paragraph align="center" width="600px">
          RENCI (Renaissance Computing Institute) develops and deploys advanced technologies
          to enable research discoveries and practical innovations.
          RENCI partners with researchers, government, and industry to engage and solve the problems
          that affect North Carolina, our nation, and the world.
        </Paragraph>
        &copy; { new Date().getFullYear() } 
      </Footer>
    </Wrapper>
  )
}

