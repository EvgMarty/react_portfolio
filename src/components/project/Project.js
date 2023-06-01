import { NavLink } from "react-router-dom";

const Project = ({title, img, id}) => {
   return ( 

      <NavLink to={`/project/${id}`}>
         <li className="project">
               <img className="project--img" src={img} alt={title} />
               <h3 className="project__title">{title}</h3>
         </li>
      </NavLink>
      
   );
      
}
 
export default Project;