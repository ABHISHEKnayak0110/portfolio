import React from 'react'
import AncherButton from '../ancherButton/AncherButton'
import Social from '../social/Social'
import style from "./Header.module.scss"
import myPic from "../../assets/abhishekphoto.jpg"
function Header() {
  return (
    <header>
     <div className={`container ${style.header__container}`}>
       <h5>Hello I'm</h5>
       <h1>Abhishek Nayak</h1>
       <h5>Fullstack Developer</h5>
       <AncherButton/>
       <div className={style.myPic}>
       <img src={myPic} alt="mypic" />
     </div>
     <a href='#contact' className={style.scroll__down}>Scroll Down</a>
     <Social/>
     </div>
    </header>
  )
}

export default Header