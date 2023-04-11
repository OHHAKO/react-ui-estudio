import styles from "./UITable.module.scss";
import Link from "next/link";
import React from "react";

const UI_ITEM = [
  { title: "Types of charts", link: "chart" },
  {
    title: "Sticky banner",
    link: "scroll-sticky",
  },
  {
    title: "Hidden banner on scrolling",
    link: "scroll-hidden",
  },
  {
    title: "Grabbing scrollY",
    link: "grab-scroll-y",
  },
  {
    title: "Grabbing scrollX",
    link: "grab-scroll-x",
  },
  {
    title: "Filter Data",
    link: "filter",
  },
  {
    title: "Filter Data(Class component)",
    link: "filter-class",
  },
  {
    title: "scroll parallax",
    link: "scroll-parallax",
  },
];

export default function UITable(): React.ReactElement {
  return (
    <section className={styles.section}>
      <ul>
        {UI_ITEM.map((item) => (
          <li key={item.link}>
            <Link href={"/" + item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
