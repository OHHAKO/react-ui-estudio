import styles from "./index.module.scss";
import Link from "next/link";
import React from "react";

export default function Home(): React.ReactElement {
  return (
    <>
      <div className={styles.root}>
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
      </div>
    </>
  );
}
