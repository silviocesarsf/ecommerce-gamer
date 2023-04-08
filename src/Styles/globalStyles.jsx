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
    }

    .active {
        margin-bottom: 1rem;
        border-bottom: 1px solid white;
    }

    span {
        text-decoration: underline;
        font-weight: bold;
        cursor: pointer;
    }

`;
