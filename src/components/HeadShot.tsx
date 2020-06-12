import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Hair from "../assets/Colorized-Headshot-Hair.svg"
import Skin from "../assets/Colorized-Headshot-Skin.svg"
import Eyebrows from "../assets/Colorized-Headshot-Eyebrows.svg"
import Eyes from "../assets/Colorized-Headshot-Eyes.svg"
import SkinShadows from "../assets/Colorized-Headshot-Skin-Shadows.svg"
import Lips from "../assets/Colorized-Headshot-Lips.svg"
import Pupils from "../assets/Colorized-Headshot-Pupils.svg"

export const Wrapper = styled.div`
  position: relative;
  & .overlay,
  .overlay > * {
    pointer-events: none;
  }
  & svg {
    position: absolute;
    pointer-events: none;
    top: 0;
    left: 0;
    right: 0;
  }
  & .hair g {
    fill: #755844;
    &:hover {
      fill: #fdea68;
    }
  }
  & .skin g {
    fill: #eeb999;
    &:hover {
      fill: #eaa378;
    }
  }
  & .eyebrows g {
    fill: #9d785d;
    &:hover {
      fill: #d1a149;
    }
  }
  & .eyes g {
    fill: white;
    &:hover {
      fill: #f8abb4;
    }
  }
  & .skin-shadows g {
    fill: #e0ad8f;
    &:hover {
      fill: #d4a488;
    }
  }
  & .lips g {
    fill: #d79582;
    &:hover {
      fill: #e47e61;
    }
  }
  & .pupils g {
    fill: #392117;
    &:hover {
      fill: #a1caf1;
    }
  }
  & .layer g {
    position: absolute;
    transition: fill 0.6s ease;
    pointer-events: visiblePainted;
    top: 0;
    left: 0;
    right: 0;
  }
  @media (prefers-color-scheme: dark) {
    & .overlay,
    .overlay > * {
      pointer-events: none;
    }
    & svg {
      position: absolute;
      pointer-events: none;
      top: 0;
      left: 0;
      right: 0;
    }
    & .hair g {
      fill: #312821;
      &:hover {
        fill: #756c2a;
      }
    }
    & .skin g {
      fill: #9a7b67;
      &:hover {
        fill: #906c57;
      }
    }
    & .eyebrows g {
      fill: #886851;
      &:hover {
        fill: #98722d;
      }
    }
    & .eyes g {
      fill: #ada9a9;
      &:hover {
        fill: #a26a71;
      }
    }
    & .skin-shadows g {
      fill: #8e705f;
      &:hover {
        fill: #886a59;
      }
    }
    & .lips g {
      fill: #8e6053;
      &:hover {
        fill: #9c5c49;
      }
    }
    & .pupils g {
      fill: #29150d;
      &:hover {
        fill: #30587d;
      }
    }
    & .layer g {
      position: absolute;
      transition: fill 0.6s ease;
      pointer-events: visiblePainted;
      top: 0;
      left: 0;
      right: 0;
    }
  }
`

const HeadshotImage = () => {
  const data = useStaticQuery(graphql`
    query PlaceHolderImage {
      placeholderImage: file(
        relativePath: { eq: "Colorized Headshot Overlay.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  // console.log(width / data.placeholderImage.childImageSharp.fluid.aspectRatio)
  return (
    <Wrapper
      aspectRatio={data.placeholderImage.childImageSharp.fluid.aspectRatio}
    >
      <div className="hair layer">
        <Hair />
      </div>
      <div className="skin layer">
        <Skin />
      </div>
      <div className="eyebrows layer">
        <Eyebrows />
      </div>
      <div className="eyes layer">
        <Eyes />
      </div>
      <div className="skin-shadows layer">
        <SkinShadows />
      </div>
      <div className="lips layer">
        <Lips />
      </div>
      <div className="pupils layer">
        <Pupils />
      </div>
      <Img
        className="overlay"
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    </Wrapper>
  )
}



export default HeadshotImage
