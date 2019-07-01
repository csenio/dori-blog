import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./header"
import Flex from "./flex"

const Main = styled.main`
  min-height: calc(100vh - (90px + 16px + 16px));
  width: calc(100% - 32px);
  max-width: 960px;
  margin: 0 auto;
  overflow: auto;
  padding: 16px;
`

const Background = styled.div`
  /* background: ${p => p.theme.colors.black}; */
`

const Footer = styled.div`
  background: ${p => p.theme.colors.black};
  color: #fff;

  a {
    color: ${p => p.theme.colors.green};
  }
`

const Layout = ({ children, isWhite }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header isWhite={isWhite} />
      <Background>
        <Main>{children}</Main>
        <Footer>
          <Flex
            px="16px"
            css={`
              margin: 0 auto;
              max-width: 960px;
              height: 100px;
              align-items: center;
              justify-content: flex-start;
            `}
          >
            © {new Date().getFullYear()} handmade with ♥️ by{" "}
            <a href="https://github.com/jescowuester/"> @jsco</a>
          </Flex>
        </Footer>
      </Background>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
