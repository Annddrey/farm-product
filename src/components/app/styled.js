import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");

html {
    height: 100%;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  body {
    position: relative;
    min-height: 100%;
    font-family: "Inter", sans-serif;
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
    color: #333333;
    background-color: #ffffff;
  }

  @keyframes tick {
    0% {
      transform: scale(0.5);
    }
    80% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
`;
