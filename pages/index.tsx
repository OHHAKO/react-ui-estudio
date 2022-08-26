import styles from "./index.module.scss";
import manul from "../public/assets/pallas.png";
import colors from "../styles/variable.module.scss";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { VictoryArea } from "victory";

const data = [
  { quarter: 1, earnings: 200 },
  { quarter: 2, earnings: 500 },
  { quarter: 3, earnings: 150 },
  { quarter: 4, earnings: 700 },
  { quarter: 5, earnings: 500 },
  { quarter: 6, earnings: 950 },
  { quarter: 7, earnings: 400 },
];

export default function Home(): React.ReactElement {
  return (
    <>
      <Head>
        <title>Hako Frontend Boilerplate</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className={styles.root}>
        <div>Hello world!</div>
        <div>Welcome to Hako CSS Boilerplate!</div>

        <VictoryArea
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
          style={{
            data: {
              fill: colors.green,
              stroke: colors.deepgreen,
              strokeWidth: 2,
            },
          }}
          events={[
            {
              target: "data",
              eventHandlers: {
                onClick: () => {
                  return [
                    {
                      eventKey: "all",
                    },
                  ];
                },
              },
            },
          ]}
          data={data}
          x={"quarter"}
          y={"earnings"}
        />

        <div
          style={{
            background: `no-repeat url(${manul})`,
            width: 500,
            height: 500,
          }}
        />

        <ul>
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
    </>
  );
}
