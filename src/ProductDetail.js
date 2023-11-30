// ProductDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();

  // Fetch product data for the specified ID from your backend
  const product = { id: 1, name: 'Product 1', price: 10 };

  return (
    <div>
      <h2>Product Detail</h2>
      <p>Name: {product.name}</p>
      <p>Price: ${product.price}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ProductDetail;
