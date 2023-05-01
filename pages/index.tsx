import styles from "./index.module.scss";
import UITable from "components/Home/UITable";
import { LinkItemType } from "types/link";
import React from "react";

const simpleTestItems: LinkItemType[] = [
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

export default function Home(): React.ReactElement {
  return (
    <div className={styles.container}>
      <UITable linkItems={simpleTestItems} />
    </div>
  );
}
