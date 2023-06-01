//Стили
import './style.css'

import githubBlack from './github-black.png'

const BtnGitHub = ({link}) => {
   return ( 
      <a className="btn-outline" target="_blank"  rel="noreferrer" href={link}>
         <img src={githubBlack} alt=""  height="25px" width="25px"  />
         GitHub repo
      </a>
    );
}
 
export default BtnGitHub;