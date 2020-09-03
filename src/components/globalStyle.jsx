import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@font-face {
	font-family:'Decovar Regular24'; 
	src:url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/Decovar-VF.ttf');
}

@font-face {
	font-family: 'Decovar Draw'; 
	src:url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/DecovarDRAW-VF.ttf');
}
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {

    overflow-x:${props => props.overflow && css `hidden`};
    overflow-y:${props => props.overflow && css `hidden`};
    width: 100%;
    height: 100vh;
    background-color: #0b132b;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  /* width */
   
 
  ::-webkit-scrollbar {
    width:  ${props => props.scrollbarSize}px ;
    display: ${props => props.overflow && css `none`};

}

/* Track */
::-webkit-scrollbar-track {
  background: #1C2541; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #3A506B;  
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #c5ddfb; 
 
}`



export default GlobalStyle;