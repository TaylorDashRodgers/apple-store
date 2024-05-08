// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Phones from './components/Phones';
// import Computers from './components/Computers';
// import Accessories from './components/Accessories';
// import OrderSummary from './components/OrderSummary';

// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route path="/phones" element={<Phones />} />
//           <Route path="/computers" element={<Computers />} />
//           <Route path="/accessories" element={<Accessories />} />
//           <Route path="/order-summary" element={<OrderSummary />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Phones from './components/Phones';
import Computers from './components/Computers';
import Accessories from './components/Accessories';
import OrderSummary from './components/OrderSummary';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/phones" element={<Phones setCart={setCart} />} />
          <Route path="/computers" element={<Computers setCart={setCart} />} />
          <Route path="/accessories" element={<Accessories setCart={setCart} />} />
          <Route path="/order-summary" element={<OrderSummary cart={cart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
