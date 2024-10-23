import {useState} from 'react';
import Button from "./button";
import { FaList } from 'react-icons/fa';
import {Link} from 'react-router-dom'
import React, { useRef } from 'react';


const NavBar = () => {
  let [open, setOpen] =useState(false);

  return ( 
        <div className='shadow-md w-full fixed top-0 left-0'>
          <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
              <div className='fromt-bold text-2xl cursor-pointer flex items-center 
                  text=gray-800' >
                      <Link to='/'>
                          <span className='text-3xle font-bold'>
                          <p>DOUGLAS EXAM</p>
                          </span>
                      </Link>
              </div>
              <div onClick={()=>setOpen(open!==true)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                <FaList name={open ? 'close': 'menu'}></FaList>  
              </div>
              <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full
              md:w-auto md:pl-0 pl-9 transition-all  duration-500 ease-in ${open ? 'top-20 opacity-100':"top-[-500px]"} md:opacity-100 opacity-0`} >
                <li className='md:ml-8 text-xl md:my-0 my-7'>
                      <Link to='/'>Home</Link>
                  </li>
                  {/* <li className='md:ml-8 text-xl md:my-0 my-7'>
                      <Link to='/paymentForm'>LOGIN</Link>
                  </li> */}
                  <li className='md:ml-8 text-xl md:my-0 my-7'>
                      <Link to='/admin'>Exams</Link>
                  </li>
                  <Button><Link to="/login">Get Started</Link></Button>
              </ul>
          </div>
      </div>
   );
}
 
export default NavBar;