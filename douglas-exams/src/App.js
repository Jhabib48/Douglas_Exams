import React, { useEffect, useRef, useState } from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom'
import NavBar from './components/navBar/navBar';
import Hero from './components/home/hero';
import CreateAccount from './components/accountPage/createAccountPage';
import Login from './components/accountPage/login';
import Exams from './components/exmaPage/exam';
import ExamFilter from './components/exmaPage/examFilter';
import ExamTable from './components/exmaPage/examTables';
import axios from "axios";

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


  const createStudentAccount = async (studentFirstName, studentLastName, studentPassword, studentEmail) => {
    const url = 'http://localhost:8080/students/add'

    try{
      const newStudent = {
        studentFirstName, 
        studentLastName, 
        studentPassword, 
        studentEmail
      }
      const {data, status} = await axios.post(url, newStudent); 
      
      if(status == 200){
        console.log(data); 
        setStudent([...student, data]); 
      }

    }catch(error){
        console.log("Error when adding new user: " + error); 
      }
  }


  // This is used for checking is user exits to log in 
  // and this also is used for checking if the details of new user exist, mainly the email
  const checkIfStudentExist = async (studentEmail, studentPassword)=>{
    const ifStudentExist = student.some( student => student.studentEmail == studentEmail && student.studentPassword == studentPassword); 
    if(ifStudentExist){
      console.log("Student exist!")
    }
    else{
      throw new Error("Student does not exist!")
    }
  }



  return (
     <div>
          <NavBar />
          <Routes>
            <Route path='/' element={<Hero/>}/>
            <Route  path='/exams' element={<Exams examList={exams}/>}/>
            <Route path='/login' element={<Login/>}/>
            {/* <Route path='/createAccount' element={<CreateAccount addNewStudent={createStudentAccount}/>}/> */}
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