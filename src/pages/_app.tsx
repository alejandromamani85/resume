import "../styles/index.css";
import type { AppProps } from "next/app";
import React from "react";
import Header from "../components/header";
import Container from "../components/container";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Container>
        <Component {...pageProps} />
      </Container>
    </div>
  );
}
export default MyApp;
