import React from 'react'
import style from "./Skills.module.scss"
import {BsPatchCheckFill} from 'react-icons/bs'
function Skills() {

    const frontend =[
        { name: "HTML", level: "Experienced" },
        { name: "CSS", level: "Experienced" },
        { name: "JavaScript", level: "Experienced" },
        { name: "TypeScript", level: "Experienced" },
        { name: "React", level: "Experienced" },
        { name: "Redux", level: "Experienced" },
        { name: "Next.js", level: "Experienced" },
        { name: "SCSS", level: "Experienced" },
        { name: "Tailwind CSS", level: "Experienced" },
        { name: "Material UI", level: "Intermediate" }
    ]
    
    const backend =[
        { name: "Node Js", level: "Experienced" },
        { name: "Express Js", level: "Experienced" },
        { name: "Mongo DB", level: "Experienced" },
        { name: "Java", level: "Intermediate" },
        { name: "Redis", level: "Experienced" },
        { name: "Docker", level: "Intermediate" },
        { name: "Postman", level: "Experienced" },
        { name: "GitHub", level: "Experienced" }
    ]
    
  return (
  <section id='#skills'>
      <h5>What Skills I Have</h5>
      <h2>Skills</h2>
     <div className={`container ${style.skill__container}`}>
         <div className={`${style.frontend__skill}`}>
             <h3>Frontend Development</h3>
             <div className={`${style.skill_contain}`}>
                 {
                     frontend.map((e:any , index :number) => {
                         return(
                            <article className={`${style.skills_details}`} key ={index} >
                            <BsPatchCheckFill className={style.slills__details_icon}/>
                            <div>
                            <h4>{e?.name}</h4>
                            <small className={"text-light"}>{e?.level}</small>
                            </div>
                           
                         </article>
                         )
                     })
                 }
                
             </div>
         </div>
         <div className={`${style.backend__skill}`}>
             <h3>Backend Development</h3>
             <div className={`${style.skill_contain}`}>
                 {
                     backend.map((e:any , index :number) => {
                         return(
                            <article className={`${style.skills_details}`} key ={index} >
                            <BsPatchCheckFill className={style.slills__details_icon}/>
                             <div>
                             <h4>{e?.name}</h4>
                            <small className={"text-light"}>{e?.level}</small>
                             </div>
                        </article>
                         )
                     })
                 }
                
             </div>
         </div>
     </div>
  </section>
  )
}

export default Skills