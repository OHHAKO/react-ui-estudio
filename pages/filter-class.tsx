import styles from "./filter.module.scss";
import StudentsComp from "../components/StudentsComp";
import StudentsComp2 from "../components/StudentsComp2";
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
        <h1> 필터 구현</h1>
        <ul>
          {griffindors.map((stu, i) => (
            <li key={i}>
              {stu.name} (기숙사: {stu.dorm})
            </li>
          ))}
        </ul>

        <input type="text" onChange={this.handleInput}></input>

        <StudentsComp dormitory={this.state.dormitory} students={students} />

        <StudentsComp2 dormitory={this.state.dormitory} students={students} />
      </div>
    );
  }
}

export default Filter;
