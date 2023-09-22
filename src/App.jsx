import { NavBar } from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemListContainer } from './components/itemListContainer';
import './App.css'
import ItemDetailContainer from './components/itemDetailContainer';
import { CartProvider } from './context/CartContext';






function App () {

  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element ={<ItemListContainer/>} />
            <Route path='/category/:categoryId' element ={<ItemListContainer/>} />
            <Route path='/item/:itemId' element ={<ItemDetailContainer/>} />
            <Route path='*' element ={ <h1>404 NOT FOUND</h1> } />
          </Routes>
        </CartProvider>
      </BrowserRouter>
      
      
    </div>
  );
}
export default App
