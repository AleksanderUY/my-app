import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Fold from './components/Fold';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error404 from './components/Error404';
import Footer from './components/Footer';


function App() {
  return (

   <BrowserRouter> 
   <NavBar />
    <Routes>
    <Route exact path={'/'} element= {<Fold />} />
   <Route exact path={'/productos'} element= {<ItemListContainer />} />
   <Route exact path={'/categoria/:index'} element= {<ItemListContainer  />} />
   <Route exact path={'/item/:index'} element= {<ItemDetailContainer  />} />
   <Route exact path={'*'} element= {<Error404  />} />
   
   </Routes>
   <Footer className={'Footer'} />
   </BrowserRouter>
  )
  }
export default App;