import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import Image, { Wrapper } from "../components/HeadShot"
import SEO from "../components/Seo"

const ImageWrapper = styled.div`
  margin-bottom: 1.45rem;
  display: flex;
  width: 100%;

  justify-content: center;
  height: auto;
  & ${Wrapper} {
    width: 100%;
    & img {
      width: 100%;
    }
    & svg {
      width: 100%;
      height: auto;
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello this is my site</h1>
    <h2>Who am I?</h2>
    <p>
      Thanks for asking. I am a developer located in Wichita, KS. I work with a
      number of languages but mainly find myself working in Salesforce and
      JavaScript. Most of my expertise is around React, Nodejs, Apex and
      focusing on building things that will eventually not need to be managed
    </p>
    <p>
      Oh since this is my website check out this headshot I made of myself.
      Below 👇👇👇👇 (Hover over it to see what it does) also it changes based on your theme (light or dark)
    </p>
    <ImageWrapper>
      <Image />
    </ImageWrapper>
    <p>Probably too big but hey it is my site</p>
    <h2>Interests</h2>
    <ul>
      <li>Photography</li>
      <li>Art</li>
      <li>Weight-lifting (I actually lifted 385lbs x4 before shoulder surgery)</li>
      <li>Process Improvement</li>
    </ul>
    <p>Give me a shoot sometime if you want to talk or you would like me assistance</p>
  </Layout>
)

export default IndexPage
