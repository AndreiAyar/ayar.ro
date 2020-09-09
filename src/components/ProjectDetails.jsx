import React from "react"
import Img from "gatsby-image"

import styled, { css } from "styled-components"
import iosVid from "../images/ios_video.mp4"
import facultyVid from "../images/faculty.mp4"
import estateVid from "../images/default_estate.mp4"
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: max-content;
  grid-gap: 10px;

  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 120px;
  .container_app__ios video {
    margin: 0 auto;
    position: absolute;
    top: 12px;
    left: 1px;
    width: 100%;
    height: 91%;
  }

  .container_app__faculty video {
    margin: 0 auto;
    position: absolute;
    z-index: 10;
    top: 60px;
    left: 4px;
    width: 99%;
  }
  .container_app__estate video {
    margin: 0 auto;
    position: absolute;
    z-index: 20;
    top: 60px;
    left: 4px;
    width: 99%;
  }
  @media only screen and (max-width: 768px) {
    .container_app__faculty video {
      margin: 0 auto;
      position: absolute;
      z-index: 10;
      bottom: 0;
      top: 15.99999%;
      left: 0.333%;
      width: 99.3%;
    }
    .container_app__estate video {
      margin: 0 auto;
      position: absolute;

      bottom: 0;
      top: 15.99999%;
      left: 0.5%;
      width: 99%;
    }
  }
  .project_title,
  h3 {
    color: white;
    font-family: "Oswald", sans-serif;
    font-weight: 400;
    margin-bottom: 10px;
    ${props =>
      props.view == "small" &&
      css`
        ${props =>
          props.alternate
            ? css`
                grid-row: 1/2;
                grid-column: 1/7;
                /* grid-row-start: 1;
            grid-column-start: 1;
            grid-row-end: 2;
            grid-column-end: 7; */
              `
            : css`
                grid-row: 1/2;
                grid-column: 3/12;
                /* grid-row-start: 1;
            grid-column-start: 5;
            grid-row-end: 2;
            grid-column-end: 12; */
              `};
      `}
    ${props =>
      props.view == "large" &&
      css`
        grid-row: 1/2;
        justify-content: center;
        grid-column: 1/-1;
        /* grid-row-start: 1;
            grid-column-start: 1;
            grid-row-end: 2;
            grid-column-end: 7; */
      `}
    span {
      color: #6fffe9;
    }
  }
  .project_description {
    font-family: "Open Sans", sans-serif;
    box-shadow: 0px 5px 30px -6px rgb(0, 0, 0, 0.3);
    border-radius: 5px;
    font-size: 0.8rem;
    color: rgb(181, 184, 191);
    background-color: #1c2541;
    text-align: center;
    grid-column:1/-1;
    height: auto;
    position: relative;
    p {
      margin: 0 auto;
      padding: 0px 30px 10px 30px;
    }
    padding: 5px;
    ${props =>
      props.view == "small" &&
      css`
        ${props =>
          props.alternate
            ? css`
                grid-row: 2;
                grid-column: 1/-1;
              `
            : css`
                grid-row: 2;
                grid-column: 3/12;
              `};
      `}
    ${props =>
      props.view == "large" &&
      css`
        grid-row: 4;
        grid-column: 1/-1;
      `}
  }
  .tags {
    position: absolute;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: auto;
    span {
      margin: 0 5px 5px 0;
      border-radius: 5px;
      /* background-color: #3a506b; */
      padding: 5px 10px 5px 10px;
      background-color: rgba(58, 80, 107, 0.8);
      text-align: center;

      cursor: pointer;

      p {
        font-family: "Open Sans", sans-serif;
        padding: 0;
        z-index: 10;
        opacity: 1;
      }
      a {
        color: white;
        text-decoration: none;
      }
    }
    span:hover {
      background-color: rgba(58, 80, 107, 0.5);
    }
  }

  @media only screen and (max-width: 768px) {
    .project_description {
      grid-row: 4;
      font-size:0.9rem;
      justify-self: center;
      grid-column: 1 / -1;
    }
    .project_title,
    h3 {
      ${props =>
        props.alternate
          ? css`
              grid-row: 1;
              grid-column: 1/10;
              /* grid-row-start: 1;
            grid-column-start: 1;
            grid-row-end: 2;
            grid-column-end: 7; */
            `
          : css`
              grid-row: 1;
              grid-column: 1/9;
              /* grid-row-start: 1;
            grid-column-start: 5;
            grid-row-end: 2;
            grid-column-end: 12; */
            `};
    }
  }
`

const ProjectDetails = ({ data }) => {
  return data.node.frontmatter.id == 1 ? (
    <RenderProject view={"small"} data={data} />
  ) : data.node.frontmatter.id == 2 ? (
    <RenderProject view={"small"} data={data} />
  ) : data.node.frontmatter.id == 3 ? (
    <RenderProject view={"large"} data={data} />
  ) : (
    data.node.frontmatter.id == 4 && (
      <RenderProject view={"large"} data={data} />
    )
  )
}

const RenderProject = ({ view, data }) => {
  const getTarget = tag => {
    let newTag = tag.toLowerCase().trim()
    let result
    console.log("called", newTag)
    switch (newTag) {
      case "graphql":
        result = "https://graphql.org/"
        break
      case "apollo":
        result = "https://www.apollographql.com/"
        break
      case "reactjs":
        result = "https://reactjs.org/"
        break
      case "knex":
        result = "http://knexjs.org/"
        break
      case "sqllite":
        result = "https://www.npmjs.com/package/sqlite3"
        break
      case "expressjs":
        result = "https://expressjs.com/"
        break
      case "electronjs":
        result = "https://www.electronjs.org/"
        break
      case "react native":
        result = "https://reactnative.dev/"
        break
      case "mongoosejs odm":
        result = "https://mongoosejs.com/"
        break
      case "mongodb":
        result = "https://www.mongodb.com/"
        break
      case "styled components":
        result = "https://styled-components.com/"
        break
      case "robotjs":
        result = "https://github.com/octalmage/robotjs/"
        break
    }

    return result
  }
  const alternate = () => {
    const id = data.node.frontmatter.id
    return id % 2 == 0
  }
  return (
    <>
      <Container view={view} alternate={alternate()}>
        <div
          id={`project__${data.node.frontmatter.id}`}
          className="project_title"
          // className={["project_title", `id_${data.node.frontmatter.id}`].join(
          //  " "
          // )}
        >
          <span>Current Project</span>
          <h3>{data.node.frontmatter.title}</h3>
        </div>

        {/* {console.log(data.node.frontmatter.image.childImageSharp.fluid)} */}
        <div
          css={`
            @media only screen and (max-width: 768px) {
              grid-row: 2/3;
              justify-self: center;
              grid-column: 1 / -1;
              ${
                view == "small"
                  ? css`
                      width: 350px;
                      margin: 0 auto;
                      grid-row: 2/4;
                      position: relative;
                    `
                  : css`
                      width: 100%;
                      margin: 0 auto;
                      grid-row: 2;
                      grid-column: 1/-1;
                      position: relative;
                    `
              }
            }
     
           ${
             view == "small"
               ? css`
                   width: 350px;
                   margin: 0 auto;
                   grid-row: 1/4;
                   position: relative;
                 `
               : css`
                   width: 700px;
                   margin: 0 auto;
                   grid-row: 2;
                   grid-column: 1/-1;
                   position: relative;
                 `
           }
           }/* grid-row: 1/4;
            position: relative; */
          `}
        >
          {data?.node?.frontmatter?.image?.childImageSharp?.fluid &&
          data.node.frontmatter.id == 1 ? (
            <div className="container_app__ios">
              <video autoPlay loop muted playsInline preload>
                <source src={iosVid} type="video/mp4" />
              </video>
              <Img
                css={`
                  object-fit: cover;
                  margin: 0 auto;
                `}
                fluid={data.node.frontmatter.image.childImageSharp.fluid}
              />
            </div>
          ) : data.node.frontmatter.id == 3 ? (
            <div class="container_app__estate">
              <video autoPlay loop muted playsInline preload>
                <source src={estateVid} type="video/mp4" />
              </video>
              <Img
                css={`
                  @media only screen and (max-width: 768px) {
                    grid-row: 2/3;
                    justify-self: center;
                    grid-column: 1 / -1;
                    width: 100%;
                  }
                  width: 100%;

                  position: relative;
                `}
                fluid={data.node.frontmatter.image.childImageSharp.fluid}
              />
            </div>
          ) : data.node.frontmatter.id == 4 ? (
            <div class="container_app__faculty">
              <video autoPlay loop muted playsInline preload>
                <source src={facultyVid} type="video/mp4" />
              </video>
              <Img
                css={`
                  @media only screen and (max-width: 768px) {
                    grid-row: 2/3;
                    justify-self: center;
                    grid-column: 1;
                    width: 100%;
                  }
                  width: 100%;
                  margin: 0 auto;
                  grid-row: 10;
                  position: relative;
                `}
                fluid={data.node.frontmatter.image.childImageSharp.fluid}
              />
            </div>
          ) : (
            <Img
              css={`
                @media only screen and (max-width: 768px) {
                  grid-row: 2/3;
                  justify-self: center;
                  grid-column: 1 / -1;
                  width: 300px;
                }
                width: 300px;
                margin: 0 auto;
                grid-row: 1/4;
                position: relative;
              `}
              fluid={data.node.frontmatter.image.childImageSharp.fluid}
            />
          )}
        </div>
        <div className="project_description">
          {data.node.frontmatter.description_list.map(desc => (
            <>
              <p>{desc}</p>
            </>
          ))}
          <div className="tags">
            {data?.node?.frontmatter?.tags &&
              data.node.frontmatter.tags.split(",").map(tag => (
                <span>
                  <a href={getTarget(tag)} target="_blank">
                    <p>{tag}</p>
                  </a>
                </span>
              ))}

            {/* {[data.node.frontmatter.tags].map(tag => (
              console.log(tag)
          ))} */}
          </div>
        </div>
      </Container>
    </>
  )
}

export default ProjectDetails
