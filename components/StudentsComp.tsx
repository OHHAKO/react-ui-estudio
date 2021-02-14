import React from "react";

class StudentsComp extends React.Component<null, { dormitory: string; students: any[] }> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1>셀렉박스를 이용한 필터 구현</h1>
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
