import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

import Logo from "./Logo"

import GlobalStyle from "./GlobalStyle"

import styled, { css } from "styled-components"
import ProjectsOverview from "./ProjectsOverview"
import IndepthProject from "./IndepthProject"

import { gsap } from "gsap"

import { ScrollTrigger } from "gsap/ScrollTrigger"
const IntroText = styled.div`
  transform: translateY(-50px);
  opacity: 0;
  filter: blur(5px);
  animation: slide-in-anim 1s ease forwards 0.2s;

  h4 {
    font-family: "Fira Code", monospace;
    font-weight: 200;
    color: #6fffe9;
    animation: grow 4s linear infinite;
  }
  h1 {
    font-family: "Oswald", sans-serif;
    font-weight: 200;
    /* font-size:72px; */
    font-size: 86px;
    color: white;
    animation: grow 4s linear infinite;
  }
  h2 {
    font-family: "Oswald", sans-serif;
    font-weight: 200;
    /* font-size:48px; */
    font-size: 56px;
    color: #b5b8bf;
    animation: grow 4s linear infinite;
  }
  p {
    font-family: "Open Sans", sans-serif;
    color: #9da0aa;
    max-width: 600px;
    line-height: 1.7;
    /* font-size:16px; */
    font-size: 20px;
  }

  .contact_btn {
    display: inline-block;
    background-color: transparent;
    border: solid 1px #6fffe9;
    border-radius: 3px;
    color: #6fffe9;
    padding: 20px 30px 20px 30px;
    font-family: "Fira Code", monospace;
    text-decoration: none;
    outline: none;
  }
  .contact_btn:hover {
    background-color: rgba(111, 255, 233, 0.3);
    border: solid 1px #6fffe9;
  }

  @keyframes slide-in-anim {
    to {
      transform: translateY(0);
      filter: blur(0);
      opacity: 1;
    }
  }
  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 56px;
    }
    h2 {
      font-size: 36px;
    }
    p {
      font-size: 16px;
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
    window.history.replaceState({}, document.title, "/" );
    const timer = setTimeout(() => {
      setLoaded(true)
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }, 1000) //3500
    return () => clearTimeout(timer)
  }, [])

  // const Test = React.createRef()
  // useEffect(() => {
  //   const allSection = Array.from(document.querySelectorAll('section'));
  //   gsap.registerPlugin(ScrollTrigger)
  //   allSection.forEach(element => {
  //     if (element.className !== 'intro') {
  //       element.style.visibility='hidden';
  //     //  element.style.transform="translateY(300px)"
  //       element.style.filter = 'blur(50px)';
  //     }
  //     gsap.to(element, {
  //       scrollTrigger: {
  //         trigger: element,
  //       },
  //       opacity: 1,
  //       visibility: 'visible',
  //       filter: "blur(0px)",
  //       y: [0],
  //       durationn: 0.5,
  //       ease: "back.Out",
  //     })
  //     console.log(element)
  //   });

  // },[loaded])
  return (
    <>
      <div
        className="container"
        style={{ position: "relative", minHeight: "100vh", margin: "10px;" }}
      >
        {!loaded && (
          <Logo
            style={{
              transition: "0.3s cubic-bezier(0.7, 0.1, 0.4, 0.8) 0s",
            }}
            center
          />
        )}
        <GlobalStyle overflow={overflow} scrollbarSize={!loaded ? 0 : 10} />
        {loaded && (
          <>
            <Header
              overflow={overflow}
              setOverflow={setOverflow}
              siteTitle={data.site.siteMetadata.title}
            />
            <main
              css={`
                margin: 120px auto;
                max-width: 960px;
                padding: 0 1.0875rem 1.45rem;
                @media only screen and (max-width: 768px) {
                  margin: 100px auto;
                }
              `}
            >
              <section className="intro">
                <IntroText>
                  <h4>Hello there! I'm</h4>
                  <h1>Andrei Ayar.</h1>
                  <h2>
                    And my ambition driven goal is to build to help others. 
                  </h2>
                  <p>
                    Since the first moments I encountered any issue through my
                    discoveries of the computers, I've wondered how that button
                    works, or how the computer managed that window resize.
                  </p>
                  <p>
                    {" "}
                    Based on my hunger of knowledge, I tried to discover
                    everything as a pure hobby, aside of my education path or
                    employment status. That, combined with passion of
                    discovering more while building, got me into liking to help
                    others, into solving their day to day issues, by using
                    technology.
                  </p>
                  <p>Follow me trough this journey, based simply on the passion of the electronic world, to find out more.</p>
                  <div>
                    <a className="contact_btn" href="mailto:contact@ayar.ro">
                      Contact Me
                    </a>
                  </div>
                </IntroText>
              </section>
              <section id="overview">
                <ProjectsOverview
                  setActiveButton={setActiveButton}
                  activeButton={activeButton}
                />
              </section>
              <section id="work_details">
                <IndepthProject />
              </section>
              {children}
            </main>
            <footer
              style={{
                position: "relative",
                height: "50px",
                margin: "0 auto",
                textAlign: "center",
                color: "#B5B8BF",
                fontFamily: "Oswald",
                width: "100%",
              }}
            >
              © {new Date().getFullYear()}, Built by Ayar Andrei
              {` `}
            </footer>
          </>
        )}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
