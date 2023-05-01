import Layout from "components/layout/Layout";
import type { AppProps } from "next/app";
import Script from "next/script";
import React from "react";

import { ParallaxProvider } from "react-scroll-parallax";
import "styles/base.scss";

const structuredData = {
  "@context": "http://schema.org/",
  "@type": "People",
  name: "User interface estudio", // 사이트 이름
  description: "This page is for test good user interface and web performance", // 설명
  url: "https://front-action-boilerplate-ohhako.vercel.app/",
  publisher: {
    "@type": "People",
    name: "Hako Kim",
  },
  sameAs: ["https://github.com/OHHAKO", "https://medium.com/@khk0503"],
};

export default function JudgementSimulatorApp({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  return (
    <>
      <Script
        id="web-json-ld"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      ></Script>
      <ParallaxProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ParallaxProvider>
    </>
  );
}
