import React, { useEffect, useRef, useState } from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom'
import NavBar from './components/navBar/navBar';
import Hero from './components/home/hero';
import ExamTable from './components/exmaPage/examTables';
import ExamFilter from './components/exmaPage/examFilter';

function App() {

  const [exams, setExams] = useState([]);
  const [student, setStudent]  = useState([]); 
  
  useEffect(()=>{
        const fetchExams = async () => {
            try{
              //Web scarpping exam data
              const examResponse = await fetch("http://localhost:8080/exam/schedule")
              const examData = await examResponse.json(); 
              console.log("Data");
              console.log(examData); 
              setExams(examData);

              // Student account data 
              const studentResponse = await fetch("http://localhost:8080/students/list")
              const studentData = await studentResponse.json(); 
              console.log("Student"); 
              console.log(studentData); 

            }
            catch(error){
              console.log("Error while fetching Exam data: " + error);
            }
        }; 
        fetchExams(); 
  }, [])

  return (
     <div>
        <NavBar />
        <ExamFilter examList={exams}/>
        <ExamTable examData={exams}/>
        {/* <Hero/> */}
     </div>
      
      
       

  );
}

export default App;