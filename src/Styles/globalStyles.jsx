import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;
        list-style: none;
        outline: none;
    }

    html {
        min-height: 100vh;
        width: 100%;
        z-index: -1;
    }

    body {
        font-family: "Poppins";
        color: ${(props) => props.theme.colors.text};
        background: ${(props) => props.theme.colors.background};
    }

    button, .search-icon {
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: white;
    }

    .active {
        border-bottom: 1px solid white;
    }

    .auth {
        background: white;
        color: black;
    }

    .loader {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .c-loader {
        text-align: center;
        animation: is-rotating 1s infinite;
        border: 2px solid #e5e5e5;
        border-radius: 50%;
        border-top-color: #7e7e7e;
        height: 20px;
        width: 20px;
    }

    span {
        color: black;
        text-decoration: underline;
        cursor: pointer;
    }

    @keyframes is-rotating {
    to {
        transform: rotate(1turn);
    }
    }   

    

`;
