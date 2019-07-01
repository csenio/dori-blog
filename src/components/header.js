import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Flex from "./flex"

const HeaderStyles = styled.div`
  background: ${p => (p.isWhite ? p.theme.colors.white : p.theme.colors.green)};
  height: 90px;
  h3,
  a {
    margin: 0;
    text-decoration: none;
    color: ${p => (p.isWhite ? p.theme.colors.black : p.theme.colors.white)};
    transition: color 0.15s;
  }
  h3 {
    font-size: 35px;
  }
  transition: background 0.15s;
`

const Logo = styled.span`
  svg {
    color: ${p =>
      p.isWhite ? p.theme.colors.green : p.theme.colors.greenDark};
    height: 35px;
    font-size: 35px;
  }
`

const Header = ({ isWhite }) => (
  <HeaderStyles isWhite={isWhite}>
    <Flex
      css={`
        height: 100%;
        margin: 0 auto;
        max-width: 960px;
        padding: 0 16px;
        align-items: center;
        justify-content: space-between;
      `}
    >
      <h3>
        <Logo isWhite={isWhite}>
          <svg
            aria-hidden="true"
            focusable="false"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M64 96H0c0 123.7 100.3 224 224 224v144c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320C288 196.3 187.7 96 64 96zm384-64c-84.2 0-157.4 46.5-195.7 115.2 27.7 30.2 48.2 66.9 59 107.6C424 243.1 512 147.9 512 32h-64z"
            />
          </svg>
        </Logo>
        <Link to="/">dori</Link>
      </h3>
    </Flex>
  </HeaderStyles>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
