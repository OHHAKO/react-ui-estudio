import styles from "./index.module.scss";
import manul from "../public/assets/pallas.png";
import Head from "next/head";
import Image from "next/image";
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
        <div className={styles.header}>
          <div className={styles.title}>
            {/* Hako */}
            User interface estudio
          </div>
          <div>by Hako</div>
          <div className={styles.imgWrapper}>
            <Image src={manul} alt="picture" width={250} height={180} />
          </div>
        </div>
        <div className={styles.body}>
          <ul>
            <li>
              <Link href="/chart">Types of charts</Link>
            </li>
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
            <li>
              <Link href="/filter">filter</Link>
            </li>
            <li>
              <Link href="/filter-class">filter(Class component)</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footer}>
          <ul>
            <li>
              <Link href="https://github.com/OHHAKO">Git</Link>
            </li>
            <li>
              <Link href="https://medium.com/@khk0503">Medium</Link>
            </li>
            <li>
              <Link href="https://instagram.com/kimhrkeon?igshid=YmMyMTA2M2Y=">Insta</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
