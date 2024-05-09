import React, { useState, useEffect } from 'react';

function Accessories({ setCart }) {
  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    // Fetch data from API when component mounts
    fetch('http://localhost:3001/api/accessories')
      .then(response => response.json())
      .then(data => {
        // Set the fetched data to the accessories state variable
        setAccessories(data);
      })
      .catch(error => {
        console.error('Error fetching accessories:', error);
      });
  }, []);

  const addToCart = (phone) => {
    const confirmed = window.confirm(`Add ${phone.name} to cart?`);
    if (confirmed) {
      setCart(prevCart => [...prevCart, phone]);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Accessories</h2>
      <div className="row">
        {accessories.map(accessory => (
          <div key={accessory._id} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <img src={accessory.image} className="card-img-top" alt={accessory.name} />
              <div className="card-body">
                <h5 className="card-title">{accessory.name}</h5>
                <p className="card-text">Price: ${accessory.price}</p>
                <button onClick={() => addToCart(accessory)} className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accessories;
