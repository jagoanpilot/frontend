import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
// import { PancakeTheme } from 'packages/uikit/dist/theme'
import { PancakeTheme } from 'packages/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'DXRigraf', sans-serif;
  }
  body {
    /* background-color: ${({ theme }) => theme.colors.primary}; */
    background-color: #200641;

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
