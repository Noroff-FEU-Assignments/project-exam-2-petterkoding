import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Outfit', sans-serif;
        background: #fff;
    }

    h1{
        margin-bottom: 2rem;
        font-family: 'Outfit', sans-serif;
    }

    button{
        font-family: 'Outfit', sans-serif;
    }
`;

export default GlobalStyle;
