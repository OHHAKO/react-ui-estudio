import styles from "./filter.module.scss";
import React from "react";

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

class Filter extends React.Component<null, { dorm: string }> {
  constructor(props) {
    super(props);
    this.state = { dorm: "All" };
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return (
      <div className={styles.root}>
        <h1> 필터 구현</h1>
        <ul>
          {griffindors.map((stu, i) => (
            <li key={i}>{stu.name}</li>
          ))}
        </ul>
        <h1>
          셀렉박스를 이용한 필터 구현
          <select onChange={(e) => this.setState({ dorm: e.currentTarget.value })}>
            <option>All</option>
            <option>Gryffindor</option>
            <option>Ravenclaw</option>
            <option>Hufflepuf</option>
            <option>Slytherin</option>
          </select>
        </h1>
        <ul>
          {students
            .filter((stu) => (this.state.dorm === "All" ? true : stu.dorm === this.state.dorm))
            .map((stu, i) => (
              <li key={i}>{stu.name}</li>
            ))}
        </ul>
      </div>
    );
  }
}

export default Filter;
