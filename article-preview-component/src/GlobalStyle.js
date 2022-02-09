import { createGlobalStyle } from 'styled-components'
import * as fonts from './config/fonts'
import * as colors from './config/colors'

export default createGlobalStyle`

:root{
  font-size: 13px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: ${colors.lightGrayishBlue};
  height: 100%;
  font-family: ${fonts.manrope};

}

`
