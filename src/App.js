import logo from './logo.svg';
 import Meal from './components/Meal';
 import './components/style.css';
 import {Routes,Route}  from 'react-router-dom';
 import Recipe from './components/Recipe';
function App() {
  return (
   <>
   <Routes>
   <Route path="/" element={ <Meal/>}/>
   <Route exact path="/:recipeId" element={<Recipe/>}/>

   </Routes>
  
     
    
   </>
  );
}


export default App;
