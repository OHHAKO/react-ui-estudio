import React from "react";

class StudentsComp2 extends React.Component<null, { dormitory: string; students: any[] }> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1>input text를 이용한 필터 구현</h1>
        <ul>
          {this.props.students
            .filter((stu) => stu.dorm === this.props.dormitory)
            .map((stu, i) => (
              <li key={i}>{stu.name}</li>
            ))}
        </ul>
      </>
    );
  }
}

export default StudentsComp2;
