import React from "react";
import PropTypes from "prop-types"
import styled from 'styled-components'
import { Link } from "gatsby"

const HeaderWrapper = styled.div`
  height: 3rem;
  padding: 2px 5rem;
  background-color: #3f647e;
  color: #d9d9d9;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
  & .link {
    color: #edf3af;
    text-decoration: none;
    margin: 0 .2rem;
  }
  & .line {
    width: 100%;
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, #3f647e, #d9d9d9, #3f647e);
  }
  & .active {
    color: #d9d9d9;
  }
  & .title {
    display: flex;
    align-items: center;
    padding: 0 1rem;
    margin: 0 50px;
    width: 100%;
    height: 100%;
    font-weight: 700;
    font-size: 1.5rem;
  }
  @media (prefers-color-scheme: dark) {
    background: #41295a;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #2F0743, #41295a);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #2F0743, #41295a); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    & .line {
      height: 0;
    }
    & .link {
      color: #dde2a5;
    }
    & .active {
      color: #eae9e9;
    }
    
  }
`

const Header = ({ siteTitle }) => (
  <React.Fragment>
    <HeaderWrapper>
      <div className="title">
      <Link
          to="/"
          className="link"
          activeClassName="active"
        >
          {siteTitle}
        </Link>
        <Link
          to="/blog"
          activeClassName="active"
          className="link"
        >
          Blog
        </Link>
        <Link
          to="/projects"
          activeClassName="active"
          className="link"
        >
          Projects &amp; Sites
        </Link>
      </div>
      <div className="line" />
    </HeaderWrapper>
  </React.Fragment>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
