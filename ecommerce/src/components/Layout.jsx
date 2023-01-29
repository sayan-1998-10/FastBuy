import Head from "next/head";
import React from "react";
import { Footer, Navbar } from ".";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>FastBuy</title>
      </Head>
      <div className="wrapper">
        <header>
          <Navbar />
        </header>
        <main className="main-container">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Layout;
