import React, { useState } from 'react';

function CreateProduct() {
  const [response, setResponse] = useState(null);

  const createProduct = () => {
    fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      body: JSON.stringify({
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronics', // Corrected the category spelling
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setResponse(json);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h2>Create Product</h2>
      <button onClick={createProduct}>Create Product</button>
      {response && (
        <div>
          <h3>Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default CreateProduct;
