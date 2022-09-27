import styles from "./Layout.module.scss";
import manul from "public/assets/pallas.png";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactElement;
};

export default function Layout({ children }: Props): React.ReactElement {
  return (
    <>
      <Head>
        <title>Hako Frontend Boilerplate</title>
        <link rel="icon" href="/assets/pallas.png" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>
          <Link href="/">User interface estudio</Link>
        </h1>
        <div className={styles.imgWrapper}>
          <Image src={manul} alt="picture" width={120} height={80} />
          <span className={styles.author}>by Hako</span>
        </div>
      </header>

      <main>{children}</main>

      <footer className={styles.footer}>
        <ul>
          <li>
            <a href="https://github.com/OHHAKO" target="__blank">
              Git
            </a>
          </li>
          <li>
            <a href="https://medium.com/@khk0503" target="__blank">
              Medium
            </a>
          </li>
          <li>
            <a href="https://instagram.com/kimhrkeon?igshid=YmMyMTA2M2Y=" target="__blank">
              Instagram
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
