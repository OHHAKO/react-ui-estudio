import Layout from "components/layout/Layout";
import type { AppProps } from "next/app";
import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import "styles/base.scss";

export default function JudgementSimulatorApp({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  return (
    <ParallaxProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ParallaxProvider>
  );
}
