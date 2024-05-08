import React from 'react';

function OrderSummary() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Order Summary</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Your Order</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Product Name: iPhone 13</li>
            <li className="list-group-item">Price: $999</li>
            <li className="list-group-item">Quantity: 1</li>
            <li className="list-group-item">Total: $999</li>
          </ul>
          <div className="mt-3">
            <h5>Total: $999</h5>
            <button className="btn btn-primary">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
