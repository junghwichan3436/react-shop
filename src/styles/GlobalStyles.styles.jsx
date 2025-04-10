import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const Globalstyles = createGlobalStyle`
  ${reset}

  *{
    box-sizing: border-box;
  }


  ul,li {
    list-style: none;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  :root{
    --light-color: #fff;
    --dark-color:#000;
    --border-color:#ccc;
    --accent-color:#dc143c;
  }

  html {
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
  }

  @media screen and (max-width: 600px) {
    .menu {
      display: none;
    }
  }
`;

export default Globalstyles;
