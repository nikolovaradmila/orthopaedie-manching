import { createGlobalStyle } from "styled-components"
/* import { setColor, setFont } from "../../styles" */
const Globals = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Courgette|Lato:400,700');
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400&display=swap');
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  box-sizing: inherit;
}
html { 
 font-size: 62.5%;
}
body{

    font-family: 'Josefin Sans', sans-serif;
    font-weight: normal;
    color: ${({ theme }) => theme.palette.darkGrey};
    
 
}

p{
    font-size: 1.6rem;
    line-height: 1.5;
    letter-spacing: 1.5px;
}

 h1{
 font-size:4.5rem;
 line-height:1.2;
 letter-spacing: 2px;
 margin-bottom:0.5rem;
}

h2{
 font-size:2.5rem;
 line-height:1.2;
 letter-spacing: 2px;
 margin-bottom: 2rem;
 color: ${({ theme }) => theme.palette.secondaryOrange};

}

/*
h3{
 font-size:1.5em;line-height:1;margin-bottom:1em
}
h4{
 font-size:1.2em;line-height:1.2;margin-bottom:1.25em;font-weight:bold;
}
h5{
 font-size:1em;margin-bottom:1.5em;font-weight:bold;
}
h6{
 font-size:1em;font-weight:bold;
}
p{
 line-height:1.5;margin:0 0 1.5rem 0;
} */
`

export default Globals
