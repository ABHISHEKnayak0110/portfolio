import React from 'react'
import style from "./Portfolio.module.scss"

function Portfolio() {
  const data :any = [
    {
        title: "Project 1",
        techstack: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/example/project1",
        liveDemo: "https://example-project1-demo.com",
        img: "project1-thumbnail.jpg"
    },
    {
        title: "Project 2",
        techstack: ["React", "Redux", "Node.js", "Express"],
        github: "https://github.com/example/project2",
        liveDemo: "https://example-project2-demo.com",
        img: "project2-thumbnail.jpg"
    },
    {
        title: "Project 3",
        techstack: ["Python", "Django", "PostgreSQL"],
        github: "https://github.com/example/project3",
        liveDemo: "https://example-project3-demo.com",
        img: "project3-thumbnail.jpg"
    },
    {
        title: "Project 4",
        techstack: ["Angular", "TypeScript", "Firebase"],
        github: "https://github.com/example/project4",
        liveDemo: "https://example-project4-demo.com",
        img: "project4-thumbnail.jpg"
    },
    {
        title: "Project 5",
        techstack: ["Java", "Spring Boot", "MongoDB"],
        github: "https://github.com/example/project5",
        liveDemo: "https://example-project5-demo.com",
        img: "project5-thumbnail.jpg"
    }
];


  return (
    <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
  
    <div className={`container ${style.portfolio__container}`}>
      {
        data.map((e:any , i:number) => {
          return(
            <article key={i} className={style.portfolio__item}>
              <div className={style.portfolio__item_image}>
                <img src={e?.image} alt={e?.title}/>
                <h3>{e?.title}</h3>
                <div className={style.techstack}>
                <p>{e?.techstack}</p>
                </div>
                <div className={style.portfolio__item_cta}>
                  <a href={e?.github} className='btn' target='_blank'>Github</a>
                 { e?.liveDemo && <a href={e?.liveDemo} className='btn btn-primary'>Live Demo</a>}
                </div>
              </div>
            </article>
          )
        })
      }
      
    </div>
  </section>
  )
}

export default Portfolio