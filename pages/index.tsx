import styles from "./index.module.scss";
import Head from "next/head";
import React from "react";

export default function Home(): React.ReactElement {
  return (
    <>
      <Head>
        <title>Hako Frontend Boilerplate</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className={styles.root}>
        <div>Hello world!</div>
        <div>Welcome to Hako CSS Boilerplate!</div>
      </div>
    </>
  );
}
