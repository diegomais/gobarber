import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale !important;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;

/**
 * box-sizing: Defines how the width and height of an element are calculated. Note: border-box includes content, padding and border.
 * min-height: Set the minimum height of #root element to 100% pixels. Note: This prevents the app to use all viewport.
 * -webkit-font-smoothing: Smooth the font on the level of the pixel.
 * -moz-osx-font-smoothing: Render text with grayscale antialiasing.
 * cursor: Specifies the mouse cursor to be displayed when pointing over an element. Note: The cursor is a pointer and indicates a link when pointing over a button.
 */
