import style from "./AncherButton.module.scss"
//  import resume from "../../assets/abhishek.pdf"
function AncherButton() {
  return (
    <div className={style.ancherButton} >
        <a href='' className="btn">Download Csv</a>
        <a href='#contact' className="btn btn-primary">Let's Talk</a>
    </div>
  )
}

export default AncherButton