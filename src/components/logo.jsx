import React, { useState, useEffect } from "react"

import styled, { css } from "styled-components"

const InnerText = styled.div`
  @keyframes first-typing {
    from {
      width: 0px;
    }
    to {
      width: 260px;
    }
  }
  @keyframes second-typing {
    from {
      width: 0px;
    }
    to {
      width: 130px;
    }
  }
  @keyframes undo {
    from {
      width: 235px;
    }
    to {
      width: 0px;
    }
  }
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-right: 2px solid white;
    }
    100% {
      border-right: 2px solid white;
    }
  }

  h1,
  h2 {
    color: white;

    height: 30px;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    width: 260px;
    margin: 0 auto;
    letter-spacing: 0.15em;
    white-space: nowrap;
    font-size: 1.4rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: 90px;
    font-family: "Oswald", sans-serif;
  }
  h1.first-type {
    ${props =>
      props.visible == "visible"
        ? css`
            border-right: 2px solid white;
            animation: first-typing 1.7s steps(50, end),
              undo 1.7s 3s steps(50, end) forwards,
              blink-caret 0.75s step-end infinite;
          `
        : css`
            display: none;
          `}
  }

  h2.second-type {
    width: 0px;
    ${props =>
      props.visible == "hidden" &&
      css`
        border-right: 2px solid white;
      `}

    animation: second-typing 1.1s 5s steps(50, end) forwards,
      blink-caret 0.75s 5s step-end infinite;
  }
`
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
      animation: fadeIn 2s ease forwards 0s;

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
  const [visible, setVisible] = useState("visible")
  useEffect(() => {
    setTimeout(() => {
      setVisible("hidden")
    }, 4600)
    return () => clearInterval()
  }, [])
  return (
    <>
      <LogoImg {...props}>
        <div>
          <img src="static/logo.png" alt="Ayar.ro" />
        </div>
      </LogoImg>
      <InnerText visible={visible}>
        <h1 class="first-type">Soon to be unveiled.</h1>
        <h2 class="second-type">@ ayar.ro</h2>
      </InnerText>
    </>
  )
}

export default Logo
