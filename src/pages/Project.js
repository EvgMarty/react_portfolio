import BtnGitHub from '../components/btnGitHub/BtnGitHub';

import { useParams } from 'react-router-dom';
import {projects} from '../helpers/projectsList'
import { NavLink } from 'react-router-dom';

const Project = () => {
   const {id} = useParams();
   const project = projects[id]

      return ( 
      <main className="section ">
      <div className="container">
         <div className="project--details">
            <h1 className="title-1">{project.title}</h1>
            <NavLink to={`https://${project.projLinc}`}  target="_blank" className="project--details__wraper" >
               <img  className="project--details__wraper--img" src={project.img} alt="" />
            </NavLink>
            
            
            <div className="project--details__desc">
               <p>Skills: {project.skuills}</p>
            </div>

            <BtnGitHub link={`https://${project.gitHubLinc}`} />

         </div>
      </div>
   </main>
    );
}
 
export default Project;