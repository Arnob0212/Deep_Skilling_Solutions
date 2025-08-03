import React from "react";

function CourseDetails() {
  const courses = [
    { name: "Angular", date: "4/5/2021" },
    { name: "React", date: "6/3/2021" }
  ];

  return (
    <div className="section">
      <h1>Course Details</h1>
      {courses.map((course, index) => (
        <div key={index}>
          <h1>{course.name}</h1>
          <p>{course.date}</p>
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;
