import React from "react";

type Props = {
  dormitory: string;
  students: any[];
};

class StudentsComp extends React.Component<Props> {
  render() {
    return (
      <>
        <ul>
          {this.props.students
            .filter((stu) =>
              this.props.dormitory === "All" ? true : stu.dorm === this.props.dormitory,
            )
            .map((stu, i) => (
              <li key={i}>
                {stu.name} (기숙사: {stu.dorm})
              </li>
            ))}
        </ul>
      </>
    );
  }
}

export default StudentsComp;
