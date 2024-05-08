import React from 'react';

const phonesData = [
  { id: 1, name: 'iPhone 13', price: '$999', image: 'https://via.placeholder.com/300' },
  { id: 2, name: 'iPhone 13 Pro', price: '$1299', image: 'https://via.placeholder.com/300' },
  { id: 3, name: 'iPhone 13 Pro Max', price: '$1399', image: 'https://via.placeholder.com/300' },
];

function Phones() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Phones</h2>
      <div className="row">
        {phonesData.map(phone => (
          <div key={phone.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <img src={phone.image} className="card-img-top" alt={phone.name} />
              <div className="card-body">
                <h5 className="card-title">{phone.name}</h5>
                <p className="card-text">Price: {phone.price}</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Phones;
