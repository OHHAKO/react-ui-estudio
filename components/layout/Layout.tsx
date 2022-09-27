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
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>
          User interface estudio <span className={styles.author}>by Hako</span>
        </h1>
        <div className={styles.imgWrapper}>
          <Image src={manul} alt="picture" width={250} height={180} />
        </div>
      </header>

      <main>{children}</main>

      <footer className={styles.footer}>
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
      </footer>
    </>
  );
}
