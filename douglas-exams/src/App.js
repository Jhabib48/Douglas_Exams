import React, { useEffect, useRef, useState } from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom'
import NavBar from './components/navBar/navBar';
import Hero from './components/home/hero';
import ExamTable from './components/exmaPage/examTables';
import ExamFilter from './components/exmaPage/examFilter';
import CreateAccount from './components/accountPage/createAccountPage';
import Login from './components/accountPage/login';
import Exams from './components/exmaPage/exam';

function App() {

  const [exams, setExams] = useState([]);
  const [student, setStudent]  = useState([]); 

  // This is ment to check if a user is logged in
  // That way we can close or hid specifc components 
  const [logged, setLogged] = useState(false); 

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