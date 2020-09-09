import React, { useEffect, useState } from "react"
import styled, { css } from "styled-components"
import CategoryTitle from "./CategoryTitle"
import { graphql, useStaticQuery } from "gatsby"
import Next from "../images/next.svg"
const Projects = styled.div`
  width: 100%;
`

const ProjectsList = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
  }
  ul {
    padding: 0;
    margin: 0;
  }
  li {
    list-style: none;
    margin: 0;
  }
  button {
    font-family: "Fira Code", monospace;
    font-size: 0.7rem;
    padding-top: 0px;
    padding-right: 20px;
    padding-left: 20px;
    text-align: left;
    background-color: Transparent;
    outline: none;
    border: none;
    cursor: pointer;
    height: 50px;
    border-left: 2px solid #333;
    :hover {
      background-color: #3a506b;
      transition: all ease-in 300ms;
    }
    span {
      display: inline-block;
      text-align: left;
    }
    @media only screen and (min-width: 768px) {
      span {
        width: 100px;
      }
    }
  }
  & .${`activeSlider`} {
    content: " ";
    display: inline-block;
    width: 2px;
    position: absolute;
    height: 50px;
    background-color: #6fffe9;
    transform: translateY(calc(50px * ${props => props.activeButton}));
    transition: all ease-in 300ms;
  }
  @media only screen and (max-width: 768px) {
    ul {
      display: flex;
      flex-direction: row;
      overflow-x: scroll;
      ::-webkit-scrollbar {
        height: 1px;
      }
    }
    & .${`activeSlider`} {
      display: none;
    }
    button {
      border-left: none;
    }
    & .${`list_with_button`} {
      li:not(:nth-child(${props => props.activeButton + 1})) {
        border-top: 2px solid #333;
      }
      li:nth-child(${props => props.activeButton + 1}) {
        height: 80px;
        border-top: 2px solid #6fffe9;
        border-left: none;
        transition: all linear 500ms;
      }
    }
  }
`
const ProjectDetails = styled.div`
  @media only screen and (min-width: 768px) {
    padding-left: 35px;
  }
  padding-top: 5px;
  h3 {
    color: white;
    font-family: "Oswald", sans-serif;
    font-weight: 400;
  }
  ul {
    display: block;
    position: relative;
  }
  li {
    font-family: "Open Sans", sans-serif;
    color: #9da0aa;
    line-height: 1.7;
    font-size: 16px;
    padding-left: 30px;
    padding-bottom: 10px;
  }
  li:before {
    content: "►";
    left: 0;
    position: absolute;
    margin-right: 15px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    h4 {
      color: white;
      font-family: "Oswald", sans-serif;
      font-weight: 400;
    }
    h4:after {
      content: " 👇";
    }
  }
  img {
    transform: rotate(90deg);
    /* animation: 3s ease-in-out animate-arrow, 1s 3s ease-in-out infinite alternate arrow-up-down;
    animation-direction: alternate; */
    animation: 0.5s ease-in-out infinite alternate arrow-up-down;
    width: 7%;
  }

  @media only screen and (min-width: 768px) {
    div {
      width:300px;
      margin:0 auto;
       
    }
  }
  @keyframes arrow-up-down {
    from {
      opacity: 0.5;
      transform: translateY(0%) rotate(90deg);
    }
    to {
      transform: translateY(10%) rotate(90deg);
    }
  }
  @keyframes animate-arrow {
    0% {
      opacity: 0.7;
      transform: translateY(-300px) translateX(-100px) rotate(0deg);
    }
    50% {
      opacity: 0.8;
      transform: translateY(-300px) translateX(500px) rotate(90deg);
    }
    80% {
      opacity: 0.9;
      transform: translateY(50px) translateX(500px) rotate(170deg);
    }
    100% {
      opacity: 1;
    }
  }
`
const IndividualProject = ({ activeButton, buttonHandler }) => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___id], order: ASC }) {
        edges {
          node {
            frontmatter {
              id
              title
              short_title
              date
              description_list
            }
          }
        }
        totalCount
      }
    }
  `)

  return (
    <>
      <ProjectsList  activeButton={activeButton}>
        <span className="activeSlider"></span>
        <ul className="list_with_button">
          {data.allMarkdownRemark.edges.map(({ node }, index) => (
            <li className="short_title" key={index}>
              <button onClick={() => buttonHandler(index)}>
                <span
                  style={{
                    color: index == activeButton ? "#6FFFE9" : "#9DA0AA",
                  }}
                >
                  {node.frontmatter.short_title}
                </span>
              </button>
            </li>
          ))}
        </ul>
        <ProjectDetails>
          <h3>
            {data.allMarkdownRemark.edges[activeButton].node.frontmatter.title}
          </h3>
          <ul>
            {data.allMarkdownRemark.edges[
              activeButton
            ].node.frontmatter.description_list.map((description, index) => (
              <li key={index}>{description}</li>
            ))}
          </ul>
          <a
            href={activeButton == 0 ? '#project__1' : activeButton == 1 ? '#project__2' : activeButton == 2 ? "#project__3" : activeButton == 3 && "#project__4"}
            css={`
              text-decoration: none;
             
            `}
          >
            <div
              css={`
                cursor: pointer;
              `}
            >
              {" "}
              <h4>In App Demonstration </h4>
              <img src={Next} />{" "}
            </div>
          </a>
        </ProjectDetails>
      </ProjectsList>
    </>
  )
}

const ProjectsOverview = ({ activeButton, setActiveButton }) => {
  const buttonHandler = current => {
    setActiveButton(current)
  }
  return (
    <>
      <Projects>
        <CategoryTitle catNo={"01."} title={"Projects overview"} />
        <IndividualProject
          buttonHandler={buttonHandler}
          activeButton={activeButton}
        />
      </Projects>
    </>
  )
}

export default ProjectsOverview
