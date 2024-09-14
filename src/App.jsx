import React, { useState } from 'react';
import './App.css';

function App() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState('');

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!productName || !productPrice) {
      setError('Both fields are required');
      return;
    }

    const price = parseInt(productPrice);

    // Add new product to the list
    setProductList([...productList, { name: productName, price }]);

    // Clear input fields and error
    setProductName('');
    setProductPrice('');
    setError('');
  };

  // Calculate total price
  const totalPrice = productList.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className="container">
      <h1>Task Four</h1>
      <p>Storing the input data with Product Name and Product Price as an object into an array, displaying that list data, calculating total Product Price using javascript.</p>

      <form onSubmit={handleSubmit}>
        <label>
          Product Name *
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Product Price *
          <input
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />
        </label>
        {error && <p className="error">{error}</p>}
        <br />
        <button type="submit">Submit</button>
      </form>

      <div className="output">
        <h2>Output Result:</h2>
        <p>Sale Price</p>
        <ul>
          {productList.map((product, index) => (
            <li key={index}>
              {product.name} - {product.price}
            </li>
          ))}
        </ul>
        <p>Total Price: {totalPrice}</p>
      </div>
    </div>
  );
}

export default App;
