import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto Condensed", sans-serif;
    }

    html, body{
    font-family: "Roboto Condensed", sans-serif;
    padding: 0px !important;
    margin: 0px !important;
        }

`
export default GlobalStyle;