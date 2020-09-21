import React, { useRef, useEffect, useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import Logo from "./Logo"
 


const MainHeader = styled.div`
  width: 100%;
  height: 70px;
  top: 0;
  position: fixed;
  z-index: 10;
  display: flex;
  background-color: #0b132b;
  justify-content: space-between;
  align-items: center;
  ${props =>
    props.scrollY > 10 && props.scrollY < 201
      ? css`
          box-shadow: 0px 5px 30px -6px rgb(0, 0, 0, 0.3);
          transition: 0.3s cubic-bezier(0.7, 0.1, 0.4, 0.8) 0s;
          transform: translateY(-3px);
        `
      : props.scrollY <= 1
      ? css`
          transform: translateY(0px);
          transition: 0.3s cubic-bezier(0.7, 0.1, 0.4, 0.8) 0s;
          background-color: #0b132b;
        `
      : props.scrollY > 200
      ? css`
          transform: translateY(-70px);
          transition: 0.3s cubic-bezier(0.7, 0.1, 0.4, 0.8) 0s;
          box-shadow: 0px;
        `
      : null}
  @media only screen and (max-width : 790px) {
    align-items: stretch;
  }
`
const NavBar = styled.div`
  height: 45px;
  nav {
    margin-right: 20px;
  }
  nav li {
    display: inline-block;
    margin-right: 15px;
  }
  nav a {
    color: #c5ddfb;
    font-family: "Fira Code", monospace;
    font-size: 0.8rem;
    text-decoration: none;
    display: block;
    width: 100%;
    height: 100%;
    outline: none;
    @media only screen and (min-width: 790px) {
      li:nth-child(1) {
        transform: translateY(-50px);
        animation: slide-in-anim 1s ease forwards 0.5s;
      }
      li:nth-child(2) {
        transform: translateY(-50px);
        animation: slide-in-anim 1s ease forwards 0.35s;
      }
      li:nth-child(3) {
        transform: translateY(-50px);
        animation: slide-in-anim 1s ease forwards 0.45s;
      }
      li:nth-child(4) {
        transform: translateY(-50px);
        animation: slide-in-anim 1s ease forwards 0.55s;
      }
      vertical-align: middle;
    }
   
  }

  nav a span {
    color: #6fffe9;
    font-family: "Fira Code", monospace;

    font-size: 0.5rem;
  }

  li {
    position: relative;
    width: 140px;
    text-align: center;
  }

  .secondary-nav {
    display: none;
    position: absolute;
    left: -1px;
    border: solid 1px #6fffe9;
    border-top: none;
    width: 140px;
    border-radius: 3px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
  .secondary-nav a:hover {


    background-color: rgba(111, 255, 233, 0.3);
  }

  @media only screen and (min-width: 790px) {
    li:hover > ul {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      background-color: rgba(111, 255, 233, 0.3);
    }
    .secondary-nav__li:hover {
      background-color: rgba(111, 255, 233, 0.3);
      border: solid 1px #6fffe9;
      border-bottom: none;
      border-radius: 3px;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
      margin-top: -1px;
    }
  }
  @media only screen and (max-width: 790px) {
    .secondary-nav {
      display: none;
      position: relative;
    }
    nav {
      ${props =>
        !props.showMenu
          ? css`
              bottom: -1;
              transform: translate(100%, 30%);
              opacity: 0;
              transition: all 0.3s cubic-bezier(0.77, 0.2, 0.05, 1);
            `
          : css`
              transform: translateX(0px);
              opacity: 1;
              transition: transform 0.3s cubic-bezier(0.77, 0.2, 0.05, 1);
            `};
      width: 60vw;
      background-color: #1c2541;
      height: 100vh;
      position: fixed;
      z-index:200;
      right: 0;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      flex-direction: column;
    }
    nav li {
      display: block;
      width: 200px;
      margin-bottom: 15px;
    }
    nav a {
      font-size: 1rem;
    }
    .secondary-nav {
      display: none;
      width: 200px;
    }
    ${props =>
      props.subMenu
        ? css`
            .secondary-nav {
              display: flex;
              flex-direction: column;
              margin: 0 auto;
              background-color: rgba(111, 255, 233, 0.3);
            }
            .secondary-nav__li {
              background-color: rgba(111, 255, 233, 0.3);
              border: solid 1px #6fffe9;
              border-bottom: none;
              border-radius: 3px;
              border-bottom-left-radius: 0px;
              border-bottom-right-radius: 0px;
              margin-top: -1px;
            }
          `
        : css`
            .secondary-nav {
              display: none;
            }
            .secondary-nav__li {
              background-color: transparent;
              border: none;
              border-bottom: none;
            }
          `}
    @keyframes slide-in-anim {
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
`

const HamburgerMenu = styled.div`
  @media only screen and (max-width: 790px) {
    display: flex;
    cursor: pointer;
    flex-direction: column;
    width: 70px;
    height: 70px;
    align-items: center;
    justify-content: center;
    position: relative;
    ${props =>
      props.showMenu &&
      css`
        span:first-child {
          transform-origin: 0% 0%;
        }
        span:first-child {
          transform: rotate(45deg) translate(1px, -1px);
        }
        span:nth-child(2) {
          transform: rotate(-45deg) translate(-4px, -2px);
        }
        span:nth-child(3) {
          opacity: 0;
          transform: rotate(0deg) scale(0, 0);
        }
      `}
    span {
      display: block;
      width: 33px;
      height: 2px;
      margin-bottom: 10px;
      position: relative;
      background: #6fffe9;
      border-radius: 3px;
      transition: transform 0.3s cubic-bezier(0.77, 0.2, 0.05, 1),
        opacity 0.3s ease;
    }
  }
`
const Header = ({ siteTitle, overflow, setOverflow }) => {
  const [scrollY, setScrollY] = useState(0)
  const [showMenu, setShowMenu] = useState(false)
  const [subMenu, setSubMenu] = useState(false)
  const refWrapper = useRef()
  const handleScroll = () => {
    window.scrollY > 0 ? setScrollY(window.scrollY) : setScrollY(0)
  }
  const handleClickOutside = event => {
    if (refWrapper && !refWrapper.current.contains(event.target)) {
      // alert('You clicked outside of me!');
      setShowMenu(false)
      setOverflow(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    document.addEventListener("click", handleClickOutside, true)
    return () => {
      document.removeEventListener("click", handleClickOutside, true)
    }
  })
  return (
    <MainHeader overflow={overflow} scrollY={scrollY}>
      <div>
        <Logo left />
      </div>
      <NavBar subMenu={subMenu} showMenu={showMenu} ref={refWrapper}>
        <nav>
          <ul className="primary-nav">
            <li>
              <a href="#overview"  onClick={() => {
                  setOverflow(false)
                  setShowMenu(false)
              }}>
                <span>{"<View/>"} </span> Overview
              </a>
            </li>
 
            <li className="secondary-nav__li">
              <a onClick={() => setSubMenu(!subMenu ? true : false)} href="#">
                <span>{"<View/>"} </span>Work
              </a>
              <ul className="secondary-nav">
                <li>
                  <a href="#project__1"  onClick={() => {
                  setOverflow(false)
                  setShowMenu(false)
                }}>Mobile App</a>
                </li>
                <li>
                  <a href="#project__2"  onClick={() => {
                  setOverflow(false)
                  setShowMenu(false)
                }}>Automation</a>
                </li>
                <li>
                  <a href="#project__3"  onClick={() => {
                  setOverflow(false)
                  setShowMenu(false)
                }}>Real Estate</a>
                </li>
                <li>
                  <a href="#project__4"  onClick={() => {
                  setOverflow(false)
                  setShowMenu(false)
                }}>Faculty Tests</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="mailto:contact@ayar.ro">
                <span>{"<View/>"} </span>Contact
              </a>
            </li>
          </ul>
        </nav>
        <HamburgerMenu
          showMenu={showMenu}
          onClick={() => {
            setOverflow(overflow == false ? true : false)
            setShowMenu(!showMenu ? true : false)
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </HamburgerMenu>
      </NavBar>
    </MainHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

// const MainHeader = styled.div`
//   background: rebeccapurple;
//   marginBottom: 1.45rem;
//   margin:0;

//   p {
//     color:white;

//     &. {
//       color:blue;
//     }
//   }
// `

