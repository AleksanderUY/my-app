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
   <Fold />
   <ItemDetailContainer />
    <Routes>
    
   <Route exact path={'/'} element= {<ItemListContainer />} />
   <Route exact path={'/category/:id'} element= {<ItemListContainer  />} />
   <Route exact path={'/item/:id'} element= {<ItemDetailContainer  />} />
   <Route exact path={'*'} element= {<Error404  />} />
   
   </Routes>
   <Footer />
   </BrowserRouter>
  )
  }
export default App;