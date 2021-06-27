import "../styles/index.css";
import type { AppProps } from "next/app";
import React from "react";
import Header from "../components/header";
import Container from "../components/container";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}
export default MyApp;
