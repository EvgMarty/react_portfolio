//Создаем масив с проктами 

//Картинки
import todo from '../img/projects/todo.png';
import basket from '../img/projects/basket-js.png';
import boucy from '../img/projects/boucy.png';


const projects = [

   {
      id: 0,
      title: 'Todo List',
      skuills: 'НTML, CSS, JS , Adaptive layout',
      img: todo,
      projLinc: 'evgmarty.github.io/tasksFoToday/',
      gitHubLinc: 'github.com/EvgMarty/tasksFoToday',
   },

   {
      id: 1,
      title: 'Basket',
      skuills: 'НTML, CSS, JS , Adaptive layout',
      img: basket,
      projLinc: 'evgmarty.github.io/basket/',
      gitHubLinc: 'github.com/EvgMarty/basket',
   },

   {
      id: 2,
      title: 'Boucy',
      skuills: 'НTML, CSS,',
      img: boucy,
      projLinc: 'evgmarty.github.io/Bouncy/',
      gitHubLinc: 'github.com/EvgMarty/Bouncy',
   },

  
];

export {projects};