import React, { useEffect, useRef, useState } from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom'
import NavBar from './components/navBar/navBar';
import Hero from './components/home/hero';
import ExamTable from './components/exmaPage/examTables';
import ExamFilter from './components/exmaPage/examFilter';

function App() {

  const [exams, setExams] = useState([]);

  useEffect(()=>{
        const fetchExams = async () => {
            try{
              const response = await fetch("http://localhost:8080/exam/schedule")
              const data = await response.json(); 
              console.log("Data");
              console.log(data); 
              setExams(data);

            }
            catch(error){
              console.log("Error while fetching Exam data: " + error);
            }
        }; 
        fetchExams(); 
  }, [])

  return (
     <div>
        {/* <NavBar /> */}
        <ExamFilter examList={exams}/>
        
        {/* <ExamTable examData={exams}/> */}

     </div>
      
       //<Hero/>
       

  );
}

export default App;