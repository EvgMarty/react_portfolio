//импорт BrowserRouter с react-router-dom
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//импорт ScrollToTop
import  ScrollToTop from './utils/scrollToTop'


//Стили
import './css/main.css';

//Компоненты
import Navbar from './components/navbar/Navbar'; //Импортируем Navbar
import Footer from './components/footer/Footer'; //Импортируем Main
import Home from './pages/Home'; //Импортируем Home
import Projects from './pages/Projects'; //Импортируем Projects
import Project from './pages/Project'; //Импортируем Projects
import Skills from './pages/Skills'; //Импортируем Skills
import Contacts from './pages/Contacts'; //Импортируем Contacts





function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Navbar/>

          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/skills' element={<Skills/>} />
            <Route path='/contacts' element={ <Contacts/> } />
            <Route path='/project/:id' element={ <Project/> } />
          </Routes>

        <Footer/>

      </Router>
      
    </div>
  );
}

export default App;
