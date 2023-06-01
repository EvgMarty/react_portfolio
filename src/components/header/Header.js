//Стили
import './style.css';
//CV
import AnswersList from "./CV_Junior_Frontend_Martyniuk.docx"


const Header = () => {
   return ( 
      <header className="header">
        <div className="header__container">
         <h1 className="header__title">
            <strong>  Hi, my name is <em>Eugene</em> </strong><br />
            a frontend developer
         </h1>
         <div className="header__text">
            <p>with passion for learning and creating</p>
         </div>
         <a href={AnswersList} download className="btn">Download CV</a>
        </div>
      </header>
    );
}
 
export default Header;