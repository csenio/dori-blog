import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import LOGO from "images/seedling.svg"

const HeaderStyles = styled.div`
  background: ${p => p.theme.colors.green};
  margin-bottom: 20px;

  h1,
  a {
    margin: 0;
    text-decoration: none;
    color: #fff;
  }
`

const Logo = styled.span`
  svg {
    color: ${p => p.theme.colors.greenDark};
    height: 40px;
    font-size: 40px;
  }
`

const Header = () => (
  <HeaderStyles>
    <div
      css={`
        margin: 0 auto;
        max-width: 960px;
        padding: 1.45rem 1.08rem;
      `}
    >
      <h1>
        <Logo>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="seedling"
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
      </h1>
    </div>
  </HeaderStyles>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
