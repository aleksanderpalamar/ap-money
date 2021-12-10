import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --background: #f0f2f5;
  --input-background: #e7e9ee;
  --border-color: #d7d7d7;
  --text-body: #969CB3;
  --text-title: #363F5F;
  --shape: #FFFFFF;
  --red: #E62E4D;
  --green: #33CC95;
  --blue: #5429CC;
  --blue-light: #6933ff;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body, input, button, textarea {
  font-family: 'Poppins', sans-serif;
  font-height: 400;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 600;
}

html {
  @media (max-width: 1080px) {
    font-size: 93.75%; // 15px
  }
  @media (max-width: 720px) {
    font-size: 85.5%; // 14px
  }
}

body {
  background: var(--background);
  -webkit-font-smoothing: antialiased;
}

button {
  cursor: pointer;
}

[disabled] {
  cursor: not-allowed;
  opacity: 0.6;
}

.modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
}
.react-modal-content {
  background: var(--background);
  width: 100%;
  max-width: 576px;
  padding: 3rem;
  position: relative;
  border-radius: 0.25rem;
}

.react-modal-close {
border: 0;
position: absolute;
top: 1.5rem;
right: 1.5rem;
padding: 0.5rem;
cursor: pointer;
background: transparent;

transition: filter 0.2s;

  &:hover {
    filter: brightness(0.6);
  }
}

`;
