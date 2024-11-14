import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Adjust path based on your folder structure

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Indian Supermarket</h1>
      <h3>Explore our product categories:</h3>
      <ul>
        <li><Link to="/products/biscuits-drinks-packaged-foods">Biscuits, Drinks & Packaged Foods</Link></li>
        <li><Link to="/products/fruits-vegetables">Fruits & Vegetables</Link></li>
        <li><Link to="/products/cooking-essentials">Cooking Essentials</Link></li>
        <li><Link to="/products/dairy-bakery">Dairy & Bakery</Link></li>
        <li><Link to="/products/personal-care">Personal Care</Link></li>
      </ul>
    </div>
  );
}

export default Dashboard;
