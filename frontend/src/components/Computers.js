// import React, { useState, useEffect } from 'react';

// function Computers() {
//   const [computers, setComputers] = useState([]);

//   useEffect(() => {
//     // Fetch data from API when component mounts
//     fetch('http://localhost:3001/api/computers')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to fetch computers data');
//         }
//         return response.json();
//       })
//       .then(data => {
//         // Set the fetched data to the computers state variable
//         setComputers(data);
//       })
//       .catch(error => {
//         console.error('Error fetching computers:', error);
//       });
//   }, []);

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4">Computers</h2>
//       <div className="row">
//         {computers.map(computer => (
//           <div key={computer._id} className="col-lg-4 col-md-6 mb-4">
//             <div className="card h-100">
//               <img src={computer.image} className="card-img-top" alt={computer.name} />
//               <div className="card-body">
//                 <h5 className="card-title">{computer.name}</h5>
//                 <p className="card-text">Price: ${computer.price}</p>
//                 <button className="btn btn-primary">Add to Cart</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Computers;

import React, { useState, useEffect } from 'react';

function Computers({ setCart }) {
  const [computers, setComputers] = useState([]);

  useEffect(() => {
    // Fetch data from API when component mounts
    fetch('http://localhost:3001/api/computers')
      .then(response => response.json())
      .then(data => {
        // Set the fetched data to the computers state variable
        setComputers(data);
      })
      .catch(error => {
        console.error('Error fetching computers:', error);
      });
  }, []);

  const addToCart = (computer) => {
    setCart(prevCart => [...prevCart, computer]);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Computers</h2>
      <div className="row">
        {computers.map(computer => (
          <div key={computer._id} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <img src={computer.image} className="card-img-top" alt={computer.name} />
              <div className="card-body">
                <h5 className="card-title">{computer.name}</h5>
                <p className="card-text">Price: ${computer.price}</p>
                <button onClick={() => addToCart(computer)} className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Computers;
