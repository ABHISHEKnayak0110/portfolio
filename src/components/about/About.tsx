import React from 'react'
import style from "./About.module.scss"
import pic from "../../assets/abhishekphoto.jpg"
import { FaAward } from "react-icons/fa"
import { VscFolderLibrary } from "react-icons/vsc"

function About() {

  const data = [
    {
      title: "Experience",
      icon: <FaAward className={style.about__card_icon} />,
      contain: "2.5 + Year of Experience"
    },
    {
      title: "Achievments",
      icon: <FaAward className={style.about__card_icon} />,
      contain: "2.5 + Year of Experience"
    },
    {
      title: "Project",
      icon: <VscFolderLibrary className={style.about__card_icon} />,
      contain: "2.5 + Year of Experience"
    }

  ]
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className={`container ${style.about__container}`}>
        <div className={`${style.about__img}`}>
          <div className={style.imgDiv}>
            <img src={pic} alt='img'></img>
          </div>
        </div>
        <div className={`${style.about__contain}`}>
          <div className={style.about__cards}>
            {
              data?.map((e , i) => {
                return (
                  <article className={style.about__card} key={i}>
                    {e?.icon}
                    <h5>{e?.title}</h5>
                    <small>{e?.contain}</small>
                  </article>
                )
              })
            }
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas non molestias molestiae delectus voluptatem ex sed nostrum, quia omnis et!</p>
           <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About