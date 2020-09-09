import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

import CategoryTitle from "./CategoryTitle"
import { css } from "styled-components"
import ProjectDetails from './ProjectDetails'
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
      allMarkdownRemark(sort: { fields: [frontmatter___id], order: ASC }) {
        edges {
          node {
            frontmatter {
              id
              title
              short_title
              date
              description_list
              tags
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
 
  // data.allMarkdownRemark.edges.map(x=>console.log(x))
  //console.log(data.allMarkdownRemark.edges)

  return (
    <>
      <CategoryTitle catNo={"02."} title={"Projects Details"} />
      {data.allMarkdownRemark.edges.map(individualProject => (
        <ProjectDetails data={individualProject} />
      ))}
    </>
  )
}
export default IndepthProject
