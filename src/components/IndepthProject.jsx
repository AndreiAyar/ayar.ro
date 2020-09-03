import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import CategoryTitle from "./CategoryTitle"
import { css } from "styled-components"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const IndepthProject = ({ id }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              short_title
              date
              description_list
              image {
                childImageSharp {
                  fluid(maxWidth: 700) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const items = []
  for (let i = 0; i <= 100; i++) {
    items.push(<p>Sulea {Math.floor(Math.random(0, 1))}</p>)
  }

  return (
    <>
      <CategoryTitle catNo={"02."} title={"Projects Details"} />
      <div
        css={`
          display: flex;
          align-items: flex-start;
          height: auto;
        `}
      >
        <div
          css={`
            position: -webkit-sticky; /* Safari */
            position: sticky;
            width: 30%;
            top: 0;
            height: 100vh;
          `}
        >
          <Img
            css={`
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
            `}
            fluid={
              data.allMarkdownRemark.edges[id].node.frontmatter.image
                .childImageSharp.fluid
            }
          />
        </div>
        <div
          css={`
            color: white;
          `}
        >
          {items}
        </div>
      </div>
    </>
  )
}
export default IndepthProject
