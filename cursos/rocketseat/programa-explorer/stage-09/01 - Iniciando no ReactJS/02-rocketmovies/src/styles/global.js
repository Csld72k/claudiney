import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  a {
    text-decoration: none;
  }

  ul, li {
    list-style: none;
  }

  :root {
    font-size: 62.5%;
  }
  
  body {
    font-size: 1.6rem;

    user-select: none ;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Roboto Slab', serif;
    outline: none;
  }

  button, a{
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(.8);
  }
  
  
`;