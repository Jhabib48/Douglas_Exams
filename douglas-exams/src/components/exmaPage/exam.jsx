import React, { useState } from "react";
import ExamFilter from "./examFilter";
import ExamTable from "./examTables";

const Exams = ({ examList }) => {
  const [selectedCourse, setSelectedCourse] = useState("");
  
  return (
    <div>
      <ExamFilter examList={examList} setCourse={setSelectedCourse} />
      <ExamTable examData={examList} selectedCourse={selectedCourse}  />
    </div>
  );
};

export default Exams;
