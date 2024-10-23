import React, { useState } from 'react'
import "./nav.css"
import {AiOutlineHome,AiOutlineUser,AiOutlineBook,AiOutlineMessage,AiOutlineCustomerService} from "react-icons/ai";
const Nav = () => {
  const [active,setActive]=useState("#");
  return (
    <nav>
      <a href='#' onClick={()=>{setActive("#")}}className={active==="#"?"active":""}><AiOutlineHome/></a>
      <a href='#about'onClick={()=>{setActive("#about")}}className={active==="#about"?"active":""}><AiOutlineUser/></a>
      <a href='#experience'onClick={()=>{setActive("#experience")}}className={active==="#experience"?"active":""}><AiOutlineBook/></a>
      <a href='#contact'onClick={()=>{setActive("#contact")}}className={active==="#contact"?"active":""}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav