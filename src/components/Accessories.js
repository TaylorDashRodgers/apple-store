import React from 'react';

const accessoriesData = [
  { id: 1, name: 'AirPods Pro', price: '$249', image: 'https://via.placeholder.com/300' },
  { id: 2, name: 'Magic Keyboard', price: '$299', image: 'https://via.placeholder.com/300' },
  { id: 3, name: 'Apple Watch Series 7', price: '$399', image: 'https://via.placeholder.com/300' },
];

function Accessories() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Accessories</h2>
      <div className="row">
        {accessoriesData.map(accessory => (
          <div key={accessory.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <img src={accessory.image} className="card-img-top" alt={accessory.name} />
              <div className="card-body">
                <h5 className="card-title">{accessory.name}</h5>
                <p className="card-text">Price: {accessory.price}</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accessories;
