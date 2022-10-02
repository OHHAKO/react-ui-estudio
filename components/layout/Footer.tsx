import styles from "./Footer.module.scss";
import React from "react";

export default function Footer(): React.ReactElement {
  return (
    <footer className={styles.footer}>
      <h1>Profile</h1>
      <ul>
        <li>
          <a href="https://github.com/OHHAKO" target="__blank">
            github
          </a>
        </li>
        <li>
          <a href="https://medium.com/@khk0503" target="__blank">
            medium
          </a>
        </li>
        <li>
          <a href="https://instagram.com/kimhrkeon?igshid=YmMyMTA2M2Y=" target="__blank">
            instagram
          </a>
        </li>
      </ul>
    </footer>
  );
}
