import React from 'react';

function OrderSummary({ cart, setCart }) {
  const placeOrder = async () => {
    const confirmOrder = window.confirm('Do you want to place the order? The order will be saved in our database.');
    if (!confirmOrder) {
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          products: cart.map((item) => ({
            name: item.name,
            price: item.price,
            quantity: item.quantity || 1,
          })),
          total: cart.reduce(
            (sum, item) => sum + item.price * (item.quantity || 1),
            0
          ),
        }),
      });

      // Parse the JSON response
      const data = await response.json();
      console.log('Order placed:', data);

      // Reset the cart after placing the order
      setCart([]);

    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Order Summary</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Your Order</h5>
          <ul className="list-group list-group-flush">
            {cart.map((item, index) => (
              <li key={index} className="list-group-item">
                Product Name: {item.name} - Price: ${item.price} x {item.quantity || 1}
              </li>
            ))}
          </ul>
          <div className="mt-3">
            <h5>Total: ${cart.reduce(
              (total, item) => total + item.price * (item.quantity || 1),
              0
            ).toFixed(2)}</h5>
            <button onClick={placeOrder} className="btn btn-primary">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
