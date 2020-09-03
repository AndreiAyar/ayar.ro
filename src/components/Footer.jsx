import React from "react"

import styled, { css } from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;

  margin-top: -200px;
  flex-wrap: wrap;
  @media (orientation: landscape) {
    margin-top: -5%;
  }

  img {
    filter: grayscale(100%);
    width: 50px;
    height: 50px;
  }
`
const Footer = () => {
  return (
    <Container>
      <img src="static/gql.png" />
      <img src="static/react.png" />
      <img src="static/mongo.png" />
    </Container>
  )
}

export default Footer
