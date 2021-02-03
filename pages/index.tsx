import styles from "./index.module.scss";
import Head from "next/head";
import Link from "next/link";
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

        <ul>
          <li>
            <Link href="/scroll-sticky">sticky banner </Link>
          </li>
          <li>
            <Link href="/scroll-hidden">hidden banner on scrolling </Link>
          </li>
          <li>
            <Link href="/grab-scroll-y">grabbing scroll </Link>
          </li>
          <li>
            <Link href="/grab-scroll-x">grabbing scrollX </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
