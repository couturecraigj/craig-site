import React from "react";

const Content = ({ children }) => <React.Fragment>
  <style jsx>{`
    div {
      display: flex;
      flex-direction: column;
      padding-top: 1rem;
      align-items: center;
      padding: 0 6rem;
      color: #111111;
      flex-grow: 1
    }
  `}</style>
  <div>{children}</div>
</React.Fragment>;

export default Content;
