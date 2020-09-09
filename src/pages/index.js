import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"

import styled from 'styled-components'

const Button = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  background:red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Ayar.ro" />

  </Layout>
)

export default IndexPage
