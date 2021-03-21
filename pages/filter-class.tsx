import styles from "./filter.module.scss";
import HogwartsStudents from "../components/HogwartsStudents";
import React from "react";

class Filter extends React.Component<null, { dorm: string; dormitory: string }> {
  constructor(props) {
    super(props);
    this.state = { dorm: "All", dormitory: "All" };
  }

  handleInput = (e) => {
    this.setState({ dormitory: e.target.value });
  };

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
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
        <h1> griffindors 학생</h1>
        <ul>
          {griffindors.map((stu, i) => (
            <li key={i}>
              {stu.name} (기숙사: {stu.dorm})
            </li>
          ))}
        </ul>
        <h1>입력값을 이용한 필터 동작</h1>
        <h2>
          기숙사를 입력하세요 <input type="text" onChange={this.handleInput} />
        </h2>
        <HogwartsStudents dormitory={this.state.dormitory} students={students} />
      </div>
    );
  }
}

export default Filter;
