import React from "react";
import ExamFilter from "./examFilter";
import ExamTable from "./examTables";

const Exams = ({examList}) => {
    return ( 
        <>
            <ExamFilter examList={examList}/>
            <ExamTable examData={examList}/>
          
        </>
     );
}
 
export default Exams;