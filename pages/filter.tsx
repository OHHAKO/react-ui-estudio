import styles from "./filter.module.scss";
import React, { useState } from "react";

export default function Filter(): React.ReactElement {
  const [dorm, setDorm] = useState("All");
  //TODO: 1. 데이터를 filter하여 일부 데이터만 출력
  //TODO: 2. 데이터를 출력하고 select box로 선택 출력

  const students = [
    {
      name: "harry",
      dorm: "Gryffindor",
    },
    {
      name: "luna lovegood",
      dorm: "Ravenclaw",
    },
    {
      name: "hermione",
      dorm: "Gryffindor",
    },
    {
      name: "digoric",
      dorm: "Hufflepuf",
    },
    {
      name: "Draco Malfoy",
      dorm: "Slytherin",
    },
  ];

  const griffindors = students.filter((stu) => stu.dorm === "Gryffindor");

  return (
    <div className={styles.root}>
      <h1> 필터 구현</h1>
      {griffindors.map((stu, i) => (
        <li key={i}>{stu.name}</li>
      ))}
      <br /> <br />
      <h1>셀렉박스를 이용한 필터 구현</h1>
      <select onChange={(e) => setDorm(e.currentTarget.value)}>
        <option>All</option>
        <option>Gryffindor</option>
        <option>Ravenclaw</option>
        <option>Hufflepuf</option>
        <option>Slytherin</option>
      </select>
      {students
        .filter((stu) => (dorm === "All" ? true : stu.dorm === dorm))
        .map((stu, i) => (
          <li key={i}>{stu.name}</li>
        ))}
    </div>
  );
}
