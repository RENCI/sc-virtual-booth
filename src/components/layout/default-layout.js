import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'
import styled, { useTheme } from 'styled-components'
import { useWindowWidth } from '@react-hook/window-size'
import { useHeroes, useLogos, useScrollPosition } from '../../hooks'
import { Link } from '../link'
import { Icon } from '../icon'
import { Menu, MobileMenu } from '../menu'
import menuItems from '../../menu'
import backgroundLines from '../../images/background-lines.png'
import { Paragraph } from '../typography'
import './style.css'

//

const MOBILE_THRESHHOLD = 919
const COMPACT_HEADER_SCROLL_THRESHOLD = 200

//

const Wrapper = styled.div(({ theme }) => `
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: linear-gradient(to bottom, white 0%, white 33%, ${ theme.color.extended.mist } 100%);
`)

//

const Brand = styled(Link)(({ compact }) => `
  font-weight: bold;
  text-transform: uppercase;
  transition: padding 250ms;
  padding: 0;
  margin: auto 1rem;
`)

Brand.propTypes = {
  compact: PropTypes.oneOf([0, 1]).isRequired,
}

Brand.defaultProps = {
  compact: 0,
}

//

const Header = styled.header(({ theme, height }) => `
  background-color: ${ theme.color.white };
  color: ${ theme.color.black };
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.25));
  position: sticky;
  top: 0;
  z-index: 1;
  max-height: ${ height };
  min-height: ${ height };
  transition: min-height 250ms;
`)

//

const Main = styled.main(({ theme, yShift }) => `
  flex: 1;
  width: 100%;
  z-index: 0;
  transform: translateY(${ yShift });
  transition: transform 250ms;
  background-image: url(${ backgroundLines });
  background-size: 1200px;
  background-repeat: no-repeat;
  background-position: 100% 100%;
  & a {
    color: ${ theme.color.primary.dark };
    text-decoration: underline;
    text-decoration-color: ${ theme.color.primary.dark }66;
    transition: text-decoration-color 250ms;
    text-underline-offset: 2px;
  }
  & a:hover {
    text-decoration-color: ${ theme.color.primary.dark };
  }
`)

//

const SocialLinks = styled(Paragraph)(({ theme }) => `
  text-align: center;
  & > * {
    margin: 0 1rem;
  }
`)

//

const Footer = styled.footer(({ theme }) => `
  padding: 2rem 2rem;
  background-color: ${ theme.color.white };
  color: ${ theme.color.black };
  text-align: center;
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.25));
  ${ SocialLinks } {
    filter: opacity(0.2);
    transition: filter 250ms;
  }
  &:hover {
    ${ SocialLinks } {
      filter: opacity(0.85);
    }
  }
`)

//

export const DefaultLayout = ({ children }) => {
  const windowWidth = useWindowWidth()
  const scrollPosition = useScrollPosition()
  const { renciLogo } = useLogos()
  const { heroImagePaths } = useHeroes()
  const theme = useTheme()

  return (
    <Wrapper>
      <Helmet>
        { heroImagePaths.map(path => <link key={ path } rel="prefetch" src={ path } />) }
      </Helmet>
      <Header height={ scrollPosition > COMPACT_HEADER_SCROLL_THRESHOLD ? '4rem' : '6rem' }>
        <Brand to="/">
          <Img fixed={ renciLogo.light } style={{ width: '82.5px', height: '54px', margin: 0 }} />
        </Brand>
        { windowWidth <= MOBILE_THRESHHOLD  ? <MobileMenu items={ menuItems } /> : <Menu items={ menuItems } /> }
      </Header>
      <Main yShift={ scrollPosition > COMPACT_HEADER_SCROLL_THRESHOLD ? '1.75rem' : '0' }>
        { children }
      </Main>
      <Footer>
        <Paragraph align="center" width="600px">
          RENCI (Renaissance Computing Institute) develops and deploys advanced technologies
          to enable research discoveries and practical innovations.
          RENCI partners with researchers, government, and industry to engage and solve the problems
          that affect North Carolina, our nation, and the world.
        </Paragraph>

        &copy; RENCI { new Date().getFullYear() }

        <SocialLinks>
          <Link to="https://twitter.com/renci"><Icon icon="twitter" size={ 24 } fill={ theme.color.primary.dark } /></Link>
          <Link to="https://facebook.com/renci.org"><Icon icon="facebook" size={ 24 } fill={ theme.color.primary.dark } /></Link>
          <Link to="https://www.linkedin.com/company/renaissance-computing-institute"><Icon icon="linkedIn" size={ 24 } fill={ theme.color.primary.dark } /></Link>
          <Link to="https://github.com/renci/sc-virtual-booth"><Icon icon="github" size={ 24 } fill={ theme.color.primary.dark } /></Link>
        </SocialLinks>

      </Footer>
    </Wrapper>
  )
}

