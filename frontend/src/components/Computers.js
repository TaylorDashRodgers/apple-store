import React from 'react';

const computersData = [
  { id: 1, name: 'MacBook Air', price: '$999', image: 'https://via.placeholder.com/300' },
  { id: 2, name: 'MacBook Pro 13"', price: '$1299', image: 'https://via.placeholder.com/300' },
  { id: 3, name: 'MacBook Pro 16"', price: '$2399', image: 'https://via.placeholder.com/300' },
];

function Computers() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Computers</h2>
      <div className="row">
        {computersData.map(computer => (
          <div key={computer.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <img src={computer.image} className="card-img-top" alt={computer.name} />
              <div className="card-body">
                <h5 className="card-title">{computer.name}</h5>
                <p className="card-text">Price: {computer.price}</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Computers;
