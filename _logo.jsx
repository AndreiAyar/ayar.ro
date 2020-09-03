import React from "react"

import styled, { css } from "styled-components"

const Logo = styled.div`
  ${props =>
    props.center &&
    css`
      position: absolute;
      width: 100px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: fadeOut 1s ease forwards 3.3s;

      path  {
        /*top right*/
        stroke-dasharray: 250;
        stroke-dashoffset: 250;
        animation: line-anim 1s ease forwards 0.3s;
      }
      path:nth-child(5) {
        /*right middle*/
        opacity: 1;
        stroke-dasharray: 250;
        stroke-dashoffset: 250;
        animation: line-anim 1s ease forwards 0.6s;
      }
      path:nth-child(4) {
        /*right bottom*/
        opacity: 1;
        stroke-dasharray: 250;
        stroke-dashoffset: 250;
        animation: line-anim 1s ease forwards 0.9s;
      }
      path:nth-child(3) {
        /*left bottom*/
        opacity: 1;
        stroke-dasharray: 250;
        stroke-dashoffset: 250;
        animation: line-anim 1s ease forwards 1.2s;
      }

      path:nth-child(6) {
        /*left middle*/
        opacity: 1;
        stroke-dasharray: 250;
        stroke-dashoffset: 250;
        animation: line-anim 1s ease forwards 1.5s;
      }
      path:nth-child(2) {
        /*top left*/
        opacity: 1;
        stroke-dasharray: 250;
        stroke-dashoffset: 250;
        animation: line-anim 1s ease forwards 1.8s;
      }

      path:nth-child(7) {
        animation: name-anim_back 3s ease-in 1 normal forwards;
      }
      path:nth-child(8) {
        animation: name-anim_front 3s ease-in 1 normal forwards;
      }
      mask path {
        opacity: 0;
      }
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
      @keyframes line-anim {
        to {
          stroke-dashoffset: 0;
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
    svg{
        opacity:0;
        animation: logo-in-anim 1s ease forwards 0.5s;
        width: 40px;
        margin:10px 0 0 30px;
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
export default props => {
  return (
    <Logo {...props}>
      <svg
        width="500"
        height="500"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M71.3945 388L143.129 190.285L150.781 210.892L87.0162 388H71.3945Z"
          stroke="white"
          stroke-width="30"
        />
        <path
          d="M195.167 122L240.476 246.63H224.823L179.514 122H195.167Z"
          stroke="white"
          stroke-width="30"
        />
        <path
          d="M277.193 122.21L344.022 304.27H328.417L261.588 122.21H277.193Z"
          stroke="white"
          stroke-width="30"
        />
        <path
          d="M366.802 373.82L372.125 388H284.372L279.715 373.82H366.802Z"
          stroke="white"
          stroke-width="30"
        />
        <path
          d="M268.741 323.94H173.789L181.237 305.35H262.125L268.741 323.94Z"
          stroke="white"
          stroke-width="30"
        />
        <path
          d="M149.407 388L162.052 353.94H177.622L164.978 388H149.407Z"
          stroke="white"
          stroke-width="30"
        />
        <path
          d="M293.683 388H278.482L264.688 353.94H279.891L293.683 388Z"
          stroke="white"
          stroke-width="30"
        />
        <path
          d="M424.203 121.99L367.403 208.09L363.634 196.906L412.552 121.99H424.203Z"
          stroke="white"
          stroke-width="30"
        />
      </svg>
    </Logo>
  )
}
