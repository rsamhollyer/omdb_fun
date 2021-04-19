import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*,*::before,*::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    font-family: 'Shippori Mincho', serif;
}
a{
  text-decoration:none;
  color:#333;
}
img{
    display:block;
}
input{ 
    font-weight: bold;
    font-family: 'Shippori Mincho', serif;
}
h3{
    font-size:1.2rem;
    }

`;

export default GlobalStyles;
