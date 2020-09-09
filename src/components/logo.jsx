import React from "react"

import styled, { css } from "styled-components"
import logo from "../images/logo.png"
const LogoImg = styled.div`
  ${props =>
    props.center &&
    css`
      position: absolute;
      width: 200px;

      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -webkit-filter: blur(50px);
      -moz-filter: blur(50px);
      -o-filter: blur(50px);
      -ms-filter: blur(50px);
      filter: blur(50px);
      /*   animation: fadeIn 1s ease forwards 0s  , fadeOut 3s ease forwards 2.3s  ;*/
      animation: fadeIn 1s ease forwards 0s;
      @keyframes fadeOut {
        to {
          -webkit-filter: blur(50px);
          -moz-filter: blur(50px);
          -o-filter: blur(50px);
          -ms-filter: blur(50px);
          filter: blur(50px);
          opacity: 0.5;
        }
      }
      @keyframes fadeIn {
        to {
          -webkit-filter: blur(0px);
          -moz-filter: blur(0px);
          -o-filter: blur(0px);
          -ms-filter: blur(0px);
          filter: blur(0px);
          opacity: 1;
        }
      }

      @keyframes name-anim_front {
        0% {
          opacity: 0;
        }
        90% {
          opacity: 0;
        }
        95% {
          opacity: 0.5;
        }
        100% {
          opacity: 1;
        }
      }
      @keyframes name-anim_back {
        0% {
          opacity: 0;
        }
        90% {
          opacity: 0;
        }
        95% {
          opacity: 0.2;
        }
        100% {
          opacity: 0.4;
        }
      }
    `}
  ${props =>
    props.left &&
    css`
     @media only screen and (min-width : 790px) {
   width:70px;
   height:70px;
   margin-left:30px;
  }
  @media only screen and (max-width : 790px) {
   width:50px;
   height:50px;
   margin-left:10px;
  }
    #first-text, #second-text{
        opacity:0;
        animation: logo-in-anim 1s ease forwards 0.8s;
    }
    @keyframes logo-in-anim {
    to{
        opacity:1;
    }
    `}
`
const Logo = props => {
  return (
    <LogoImg {...props}>
      <div>
        <img src={logo} alt="Ayar.ro" />
      </div>
    </LogoImg>
  )
}

export default Logo
