import React, { useState } from 'react'
import style from "./Navigation.module.scss"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import {BiMessageSquareDetail} from "react-icons/bi"

function Navigation() {
  const [active , setActive] = useState('#')

  const handleClickNav =(path:string) => {
    setActive(path)
  }

  return (
    <nav className ={style.nav} >
      <a href='#' onClick ={()=>handleClickNav("#")}className={`${active === "#" ? style.active : ""}`}><AiOutlineHome/></a>
      <a href='#about' onClick ={()=>handleClickNav("#about")} className={`${active === "#about" ? style.active : ""}`}><AiOutlineUser/></a>
      <a href='#experience' onClick ={()=>handleClickNav("#experience")}  className={`${active === "#experience" ? style.active : ""}`}><BiBook/></a>
      {/* <a href='#services'onClick ={()=>handleClickNav("#services")}  className={`${active === "#services" ?style.active : ""}`}><RiServiceLine/></a> */}
      <a href='#contact' onClick ={()=>handleClickNav("#contact")}  className={`${active === "#contact" ? style.active : ""}`}><BiMessageSquareDetail/></a>

    </nav>
  )
}

export default Navigation