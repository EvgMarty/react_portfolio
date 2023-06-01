//Стили
import './style.css'

//Картинки
import instagram from "./../../img/icon/instagram.png";
import telegram from "./../../img/icon/telegram.png";
import github from "./../../img/icon/github.png";
import linkedin from "./../../img/icon/linkedin.png";

const Footer = () => {
   return ( 
      <footer className="footer">
        <div className="footer__container">
         <ul className="social">
            <li className="social__item">
               <a href="https://www.instagram.com/ev.marty/"><img src={instagram} alt="Link" /></a>
            </li>
            <li className="social__item">
               <a href="https://t.me/martyynn"><img src={telegram} alt="Link" /></a>
            </li>
            <li className="social__item">
               <a href="https://github.com/EvgMarty"><img src={github} alt="Link" /></a>
            </li>
            <li className="social__item">
               <a href="https://www.linkedin.com/in/evgmarty/"><img src={linkedin} alt="Link" /></a>
            </li>
         </ul>
         <div className="copiright">
            <p>© 2023 Rect-Portfolio</p>
         </div>
        </div> 
      </footer>

    );
}
 
export default Footer;