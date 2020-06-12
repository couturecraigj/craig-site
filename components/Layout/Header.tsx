import React from "react";
import Link from "next/link";
const Header = () => (
  <React.Fragment>
    <style jsx>{`
      .header {
        height: 3rem;
        padding: 2px 3rem;
        background-color: #3f647e;
        color: #d9d9d9;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: center;
      }
      .header .link {
        color: #edf3af;
        text-decoration: none;
      }
      
      .header .line {
        width: 100%;
        border: 0;
        height: 1px;
        background-image: linear-gradient(to right, #3f647e, #d9d9d9, #3f647e);
      }
      .header .title {
        display: flex;
        align-items: center;
        padding: 0 1rem;
        margin: 0 50px;
        width: 100%;
        height: 100%;
        font-weight: 700;
        font-size: 1.5rem;
      }
    `}</style>
    <div className="header">
      <div className="title">
        <div>Craig Couture</div>
        <Link href="/blog">
          <a className="link" href="/blog">
            Blog
          </a>
        </Link>
      </div>
      <div className="line" />
    </div>
  </React.Fragment>
);

export default Header;
