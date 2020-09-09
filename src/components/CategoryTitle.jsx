import React from "react"

import styled, { css } from "styled-components"

const Title = styled.div`
  margin: 100px auto;
  color: white;
  font-size: 1.6rem;
  display: inline-block;
  text-align: center;
  padding-left: 5px;
  font-family: "Oswald", sans-serif;
  font-weight: 400;
  margin-bottom: 50px;
  ::after {
    content: "";
    width: 200px;
    height: 2px;
    background-color: #333;
    margin-left: 10px;
    display: inline-block;
    vertical-align: middle;
  }
  @media only screen and (max-width: 768px) {
    ::after {
      width: 80px;
    }
  }
`
const CategoryNumber = styled.div`
  display: inline-block;
  text-align: center;
  font-size: 1.6rem;
  font-family: "Fira Code", monospace;
  font-weight: 200;
  color: #6fffe9;
`

const CategoryTitle = ({ title, catNo }) => {
  return (
    <>
      <CategoryNumber>{catNo}</CategoryNumber>
      <Title>{title}</Title>
    </>
  )
}

export default CategoryTitle
