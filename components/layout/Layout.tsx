import Footer from "./Footer";
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
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>
            <Link href="/">User Interface Estudio</Link>
          </h1>
          <div className={styles.imgWrapper}>
            <Image src={manul} alt="picture" width={120} height={80} />
            <span className={styles.author}>by Hako</span>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 50 1440 220">
          <path
            fill="black"
            fillOpacity="1"
            d="M0,96L120,117.3C240,139,480,181,720,186.7C960,192,1200,160,1320,144L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg>
      </header>

      {/* <Parallax translateY={["0px", "500px"]}>
        <div className={styles.blah2}>울ㄹ랄랄라</div>
      </Parallax> */}
      {/* <header className={styles.header}>
        <h1 className={styles.title}>
          <Link href="/">User interface estudio</Link>
        </h1>
        <div className={styles.imgWrapper}>
          <Image src={manul} alt="picture" width={120} height={80} />
          <span className={styles.author}>by Hako</span>
        </div>
      </header> */}

      <main>{children}</main>

      <Footer />
    </>
  );
}
