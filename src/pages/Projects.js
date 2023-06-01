import Project from '../components/project/Project'  //Импортируем Project
import {projects} from '../helpers/projectsList';//Импортируем масив projects

const Projects = () => {
   return ( 
      <main className="section" id="projects">
        <div className="container">
         <h2 className="title-1">Projects</h2>
         <ul className="projects">

            {/* Рендер проекта перебор масива методом map и передаем пропс в Project */}

            {projects.map( (project) => {
               return <Project key={project.id} title={project.title} img={project.img} id={project.id} />
            })}
            

         </ul>
        </div>
      </main>
    );
}
 
export default Projects;