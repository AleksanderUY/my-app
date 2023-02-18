import './App.css';
import NavBar from './components/NavBar';
import Fold from './components/Fold';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
   <BrowserRouter> <><><NavBar /><Fold /></><ItemListContainer greeting="Nuestros Productos" /></></BrowserRouter>
  )
}

export default App;
