import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import { MDXProvider } from "@mdx-js/react";

const mdComponents = {
  h1: (props) => <h1 style={{ color: "#edf3af" }} {...props} />,
  h2: (props) => <h2 style={{ color: "#3f647e" }} {...props} />,
  hr: (props) => (
    <div style={{ width: "100%", margin: ".5rem 2rem", padding: "0 3rem" }}>
      <hr
        style={{
          border: 0,
          height: "2px",
          background: "#333",
          backgroundImage: "linear-gradient(to right, #00b0b2, #688fad, #00b0b2)",
        }}
        {...props}
      />
    </div>
  ),
  wrapper: ({ children, ...props }) => {
    if (children.map) console.log(children.map((child) => child.props.mdxType));
    return (
      <>
        <Head>
          <title>{props.title}</title>
        </Head>
        {children}
      </>
    );
  },
};

export default ({ Component, pageProps }) => {
  console.log(pageProps, Component);
  const props = {
    ...pageProps,
    isMDXComponent: Component.isMDXComponent,
  };
  return (
    <MDXProvider components={mdComponents}>
      {Component.isMDXComponent ? (
        <Layout title="Craig Couture">
          <Component {...props} />
        </Layout>
      ) : (
        <Layout title={Component.title}>
          <Component {...props} />
        </Layout>
      )}
    </MDXProvider>
  );
};
