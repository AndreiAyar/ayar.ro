import React, { useRef, useEffect, useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import Logo from "./logo"
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
}
  li {
    display: inline-block;
    margin-top:10px;
    margin-left:30px;
    margin-right:30px;
    height:20px;
  }
  a {
    color: #c5ddfb;
    font-family: "Fira Code", monospace;
    font-size: 0.8rem;
    text-decoration: none;
    vertical-align:middle;
  }

  a:hover {
    color: #6fffe9;
  }
  a span {
    color: #6fffe9;
    vertical-align:middle;
    font-family: "Fira Code", monospace;
    padding: 5px;
    font-size: 0.5rem;
  }
  .dropdown-li{
    position:relative;
    
  }
  .dropdown_work{
    
    display:inline-block;
  }
 
  .dropdown_work:hover #work-seconday-nav{
    visibility: visible;
}

  @media only screen and (min-width: 790px) {
 .dropdown_work:hover{
    margin:-1px;
    background-color:rgba(111, 255, 233, 0.3);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border:solid 1px #6FFFE9;
    border-bottom:0px;
  }
  #work-seconday-nav{
    color:white;
    display:flex;
    flex-direction:column;
    padding:10px;
    width:149px;
    top:20px;
    height:150px;
    left:-57px;
    position:absolute;
    background-color:rgba(111, 255, 233, 0.3);
    border:solid 1px #6FFFE9;
    border-top:0px;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    visibility: hidden;
    
    li{
      margin:5px;
      
    }
  }
  }
  @media only screen and (max-width: 790px) {
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
      right: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .main_ul {
      display: flex;
      flex-direction: column;
      justify-content:space-between;
    }
    
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #c5ddfb;
      font-family: "Fira Code", monospace;
      font-size: 1rem;
      text-decoration: none;
    }
    li {
    display: inline-block;
    margin-top:50px;
    margin-left:30px;
    margin-right:30px;
    height:20px;
  }
    a span {
      display: block;
      color: #5bc0be;
      font-size: 0.6rem;
    }
 

#work-seconday-nav{
    position:static;
    display: none;
    margin-left:-10px;
    ${props =>
    !props.subMenu
      ? css`
           display:none;
            `
      : css`
        display:block;
            `};
    height:150px;

    justify-content:space-between;
    li{
      display:flex;

        justify-content:space-between;
      margin-top:10px;
      margin-bottom:10px;
    }
 
    background-color:rgba(111, 255, 233, 0.3);
    border:solid 1px #6FFFE9;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    
   
}
.dropdown_work{
      margin:0 auto;
      display:  block;
    }
  }

  @keyframes slide-in-anim {
    to {
      transform: translateY(0);
      opacity: 1;
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
          transform: rotate(0deg) scale(0,0);
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
          <ul class="main_ul">
            <li>
              <a href="#">
                <span>{"<View />"} </span>About
              </a>
            </li>
            <li>
              <a href="#cat-title" onClick={() => {
                setOverflow(false)
                setShowMenu(false)
              }}>
                <span>{"<View/>"} </span>Experience
              </a>

            </li>
            <div class="dropdown_work">
              <li class="dropdown-li">
                <a onClick={() => setSubMenu(!subMenu ? true : false)} href="#">
                  <span>{"<View/>"} </span>Work
              </a>
                <ul id="work-seconday-nav">
                  <li>
                    <a href="#">
                      Mobile App
              </a>
                  </li>
                  <li>
                    <a href="#">
                      Advert
              </a>
                  </li>
                  <li>
                    <a href="#">
                      Automation
              </a>
                  </li>
                  <li>
                    <a href="#">
                      Grills
              </a>
                  </li>
                </ul>
              </li>
            </div>
            <li>
              <a href="#">
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
// const Cacat = styled.div`
// display:flex;
// justify-content:space-between;

// `
// const Copii = styled.div`

// `
// // const stilizezheaderu = styled(Header)`

// // `

// //styled components composition

// const paragrafe = css`color:red`;
