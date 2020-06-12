import React from "react";
import Head from "next/head";
import Content from './Content'
import Header from './Header'
import Footer from './Footer'
import Hero from './Hero'
const Layout = ({ children, title, noHeader = false, noFooter = false, heroImage = '' }) => {
  return (
    <div className="body">
      <style jsx>{`
        .body {
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
      `}</style>
      <Head>
        <title>{title}</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap" rel="stylesheet"></link>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={title} key="title" />
        <meta charSet="utf-8" />
      </Head>
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        html, body {
          margin: 0;
          font-family: 'Montserrat', sans-serif;
          min-height: 100vh;
          background-color: #00b0b2;
        }
        html {
          height: 100%;
        }
        #__next {
          min-height: 100%;
        }
      `}</style>
      {!noHeader && <Header />}
      {heroImage && <Hero />}
      <Content>{children}</Content>
      {!noFooter && <Footer />}
    </div>
  );
};

export default Layout;
