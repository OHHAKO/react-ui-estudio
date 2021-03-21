import styles from "./filter.module.scss";
import React from "react";

export default function Filter(): React.ReactElement {
  const urlExtract = /https:\/\/[a-z]*.[a-z]*/; //도메인 URL 추출하기
  const domainExtract = /[^https://][a-z]*.[a-z]*/; // 도메인 추출하기

  return (
    <div className={styles.root}>
      <h1>Regular Expression 실습</h1>

      <h2> exec 사용하기</h2>
      <ul>
        <li>{/ab*c/.exec("cbbabbbbcdebc")} </li>
        <li> {/d(abc+)d/g.exec("cdabcd")}</li>
        <li> {/하(코지+)/g.exec("엄마코지아빠코지하코지언니코지")}</li>
        <li> {/[0-9]*-[0-9]*-[0-9].*/.exec("제 번호는010-1234-5678입니다.")}</li>
        <li> {urlExtract.exec("https://github.com/OHHAKO")}</li>
        <li> {domainExtract.exec("https://github.com/OHHAKO")}</li>
      </ul>

      <h2> replace 사용하기</h2>
      <ul>
        <li> {"xdbbdxsqr xdbbdxsqr".replace(/d(b+)d/g, "love")}</li>
        <li> {"010-1234-5678".replace(/-/g, " ")}</li>
      </ul>
    </div>
  );
}
