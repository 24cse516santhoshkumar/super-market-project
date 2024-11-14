import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/Dashboard';
import ProductsList from './components/ProductsList';
import Cart from './components/Cart';
import SignUp from './pages/Sign';
import Footer from './components/footer';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} /> 
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products/:category" element={<ProductsList />} />
          <Route path="/cart-summary" element={<Cart />} /> 
        </Routes>
        <br></br>
        <br></br>
        <br></br><br></br>       <br></br>
        <br></br><br></br>       <br></br>
        <br></br><br></br>       <br></br>
        <br></br><br></br>
        <br></br>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
