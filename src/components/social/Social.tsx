import style from "./Social.module.scss"
import { BsLinkedin} from "react-icons/bs";
import { FaGithub} from "react-icons/fa";

function Social() {
    const socialData =[
        {
            img : <BsLinkedin/>,
            name : "Linkdin",
            url : "https://www.linkedin.com/in/abhishek-nayak-322057218/"
        },
        {
            img : <FaGithub/>,
            name : "Github",
            url : ""
        }
    ]
  return (
    <div className={style.header__social}>
      {
          socialData?.map((data:any , i :number) => {
              return <a href={data?.url} key ={i} target="_blank">
                  {data.img}
                 </a>
          })
      }
    </div>
  )
}

export default Social