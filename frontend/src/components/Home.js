import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to the Apple Store</h1>
        <p className="lead">Shop for the latest Apple products with ease.</p>
        <hr className="my-4" />
        <p>Choose from a wide range of iPhones, MacBooks, and accessories.</p>
        <p className="lead">
          <Link className="btn btn-primary btn-lg" to="/phones" role="button">Shop Now</Link>
        </p>
      </div>
    </div>
  );
}

export default Home;
