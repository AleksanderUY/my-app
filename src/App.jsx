import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Fold from './components/Fold';
import ItemListContainer from './components/ItemListContainer';
import Error404 from './components/Error404';
import Footer from './components/Footer';

function App() {
  return (

   <BrowserRouter> 
   <NavBar />
    <Routes>
    <Fold />
   <Route exact path={'/'} element= {<App />} />
   <Route exact path={'/category/:id'} element= {<ItemListContainer  />} />
   <Route exact path={'/producto/:id'} element= {<ItemListContainer  />} />
   <Route exact path={'*'} element= {<Error404  />} />
   <Footer />
   </Routes>
   </BrowserRouter>
  )
  }
export default App;