import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CartPage from './components/CartPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/cart-page' exact element={<CartPage />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
