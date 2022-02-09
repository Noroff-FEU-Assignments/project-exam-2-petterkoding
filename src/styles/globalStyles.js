import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body{
        height: 100%;
    }

    body{ 
        font-family: 'Outfit', sans-serif;
        background: #fff;
    }

    #root{
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .wrapper{
        flex: 1 0 auto;
    }

    footer{
        flex-shrink: 0;
    }

    h1{
        font-family: 'Outfit', sans-serif;
    }

    button{
        font-family: 'Outfit', sans-serif;
    }
`;

export default GlobalStyle;
