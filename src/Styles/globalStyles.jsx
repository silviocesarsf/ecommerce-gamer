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
        color: black;
    }

    .active {
        /* margin-bottom: 1rem; */
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

    .search-btn {
        font-size: 1.2em;
        color: black;
        position: relative;
        top: 50%;
        right: 4%;
        cursor: pointer;
    }

    span {
        text-decoration: underline;
        cursor: pointer;
    }

`;
