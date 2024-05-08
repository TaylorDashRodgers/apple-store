import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Phones from './components/Phones';
import Computers from './components/Computers';
import Accessories from './components/Accessories';
import OrderSummary from './components/OrderSummary';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/phones" element={<Phones />} />
        <Route path="/computers" element={<Computers />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/order-summary" element={<OrderSummary />} />
      </Routes>
    </Router>
  );
}

export default App;
