import styles from "./UITable.module.scss";
import { LinkItemType } from "types/link";
import Link from "next/link";
import React from "react";

type Props = {
  linkItems: LinkItemType[];
};

export default function UITable({ linkItems }: Props): React.ReactElement {
  return (
    <ul className={styles.section}>
      {linkItems.map((item) => (
        <li key={item.link}>
          <Link href={"/" + item.link}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}
