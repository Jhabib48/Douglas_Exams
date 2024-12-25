import React, { useEffect, useRef, useState } from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom'
import NavBar from './components/navBar/navBar';
import Hero from './components/home/hero';
import CreateAccount from './components/accountPage/createAccountPage';
import Login from './components/accountPage/login';
import Exams from './components/exmaPage/exam';
import ExamFilter from './components/exmaPage/examFilter';
import ExamTable from './components/exmaPage/examTables';

function App() {

  const [exams, setExams] = useState([]);
  const [student, setStudent]  = useState([]); 

  // This is ment to check if a user is logged in
  // That way we can close or hid specifc components 
  const [logged, setLogged] = useState(false); 

  useEffect(()=>{
    const fetchExams = async () => {
      try {
        const response = await fetch("http://localhost:8080/exam/schedule");
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setExams(data);
      } catch (error) {
        console.error("Error fetching exams:", error);
      }
    };

    const fetchStudents = async () => {
      try {
        const response = await fetch("http://localhost:8080/students/list");
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setStudent(data);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };
  
    fetchExams();
    fetchStudents();
  }, [])

  return (
     <div>
          <NavBar />
          <Routes>
            <Route path='/' element={<Hero/>}/>
            <Route  path='/exams' element={<Exams examList={exams}/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/createAccount' element={<CreateAccount/>}/>
          </Routes>
  
          {/* <CreateAccount/> */}
          {/* <Hero/> */}
          {/* <ExamFilter examList={exams}/>
          <ExamTable examData={exams}/> */}
          {/* <Hero/> */}
          {/* <Login/> */}
     </div>
      
      
       

  );
}

export default App;