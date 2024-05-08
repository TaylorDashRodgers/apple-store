import React, { useState, useEffect } from 'react';

function Phones({ setCart }) {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    // Fetch data from API when component mounts
    fetch('http://localhost:3001/api/phones')
      .then(response => response.json())
      .then(data => {
        // Set the fetched data to the phones state variable
        setPhones(data);
      })
      .catch(error => {
        console.error('Error fetching phones:', error);
      });
  }, []);

  const addToCart = (phone) => {
    setCart(prevCart => [...prevCart, phone]);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Phones</h2>
      <div className="row">
        {phones.map(phone => (
          <div key={phone._id} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <img src={phone.image} className="card-img-top" alt={phone.name} />
              <div className="card-body">
                <h5 className="card-title">{phone.name}</h5>
                <p className="card-text">Price: ${phone.price}</p>
                <button className="btn btn-primary" onClick={() => addToCart(phone)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Phones;
