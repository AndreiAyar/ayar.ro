
import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from './Footer'
import "./layout.css"

import Logo from './logo'

import GlobalStyle from "./globalStyle"

import styled, { css } from 'styled-components'
import ProjectsOverview from "./ProjectsOverview"
import IndepthProject from "./IndepthProject"

import { gsap } from "gsap"

import { ScrollTrigger } from "gsap/ScrollTrigger"
const IntroText = styled.div`
  transform: translateY(-50px);
  opacity:0;
  filter:blur(5px);
  animation: slide-in-anim 1s ease forwards 0.2s;

h4{
  font-family: 'Fira Code', monospace;
  font-weight:200;
  color: #6FFFE9;
  animation: grow 4s linear infinite;
}
h1{
  font-family: 'Oswald', sans-serif;
  font-weight:200;
  /* font-size:72px; */
  font-size:86px;
  color:white;
  animation: grow 4s linear infinite;
}
h2{
  font-family: 'Oswald', sans-serif;
  font-weight:200;
  /* font-size:48px; */
  font-size:56px;
  color:#B5B8BF;
  animation: grow 4s linear infinite;
}
p{
  font-family: 'Open Sans', sans-serif;
  color:#9DA0AA;
  max-width: 500px;
  line-height:1.7;
  /* font-size:16px; */
  font-size:20px;
}
button{
  width:170px;
  height:60px;
  background-color:transparent;
  border:solid 1px #6FFFE9;
  border-radius:3px;
  color:#6FFFE9;
  font-family: 'Fira Code', monospace;
  text-decoration: none;
  outline:none;
}
button:hover{
  background-color:rgba(111, 255, 233, 0.3);
  border:solid 1px #6FFFE9;
}
  
  @keyframes slide-in-anim {
    
 to{
   transform: translateY(0);
   filter:blur(0);
   opacity:1;
 }
  }
  @media only screen and (max-width : 768px) {
    h1{
      font-size:56px
    }
    h2{
      font-size:36px
    }
    p{
      font-size:16px
    }
 
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [loaded, setLoaded] = useState(false)
  const [overflow, setOverflow] = useState(false)
  const [activeButton, setActiveButton] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      //  setLoaded(true)
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

    }, 3500);//3500
    return () => clearTimeout(timer);
  }, []);

  // const Test = React.createRef()
  useEffect(() => {
    const allSection = Array.from(document.querySelectorAll('section'));
    gsap.registerPlugin(ScrollTrigger)
    allSection.forEach(element => {
      if (element.className !== 'intro') {
        element.style.visibility = 'hidden';
        //  element.style.transform="translateY(300px)"
        element.style.filter = 'blur(50px)';
      }
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
        },
        opacity: 1,
        visibility: 'visible',
        filter: "blur(0px)",
        y: [0],
        durationn: 0.5,
        ease: "back.Out",
      })
      console.log(element)
    });

  }, [loaded])
  return (
    <>
      <div className='container' style={{   minHeight: '100vh',  }}>
        {!loaded && <><Logo style={{
          transition: '0.3s cubic-bezier(0.7, 0.1, 0.4, 0.8) 0s',
        }} center />
        
        </>
        }
        <GlobalStyle overflow={overflow} scrollbarSize={!loaded ? 0 : 10} />
        
      </div>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
