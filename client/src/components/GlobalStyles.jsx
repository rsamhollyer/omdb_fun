import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*,*::before,*::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
   
    scrollbar-width:thin;
    scrollbar-color:darkgrey;
    scrollbar-track-color: white;
    &::-webkit-scrollbar{
        width:.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color:darkgrey;
    }
    &::-webkit-scrollbar-track {
    background-color: white;
  }

}

body{
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
