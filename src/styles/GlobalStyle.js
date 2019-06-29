import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  html, body{
    font-family: Source Sans Pro;
    color: ${p => p.theme.colors.black}
  }

  h1,h2,h3,h4,h5{
    font-weight: 600;
  }
`
