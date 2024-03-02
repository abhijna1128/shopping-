import React, { useState } from 'react';
import './App.css';

const products = [
  { id: 1, name: 'Titan watch', price: 50, rating: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQENEfayp68rWOW5yezDSmYeATNyNoNdvHqWA&usqp=CAU' },
  { id: 2, name: 'Floral dresses', price: 40, rating: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyRxleQwZytcvpzgxYAhd4psY6W8JfKnEsOQ&usqp=CAU' },
  { id: 3, name: 'Running Shoes', price: 90, rating: 3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-GvtosJ1ALrPQ7q_a_g1pLWSNh4alKyODDg&usqp=CAU' },
  { id: 4, name: 'hair straightner', price: 100, rating: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT38eSJ3B8WvEMTL7J7EX4Zm2qoJg34-XrXVg&usqp=CAU' },
  { id: 5, name: 'Earrings', price: 30, rating: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHxfgtRe8ywJ3kqtGYwGTKM3dUeIhRJQHXhg&usqp=CAU' },
  { id: 6, name: 'Hand bag', price: 30, rating: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZdfhR-L3bPkhcK2xo1NCUiqxvJYFfElRI-g&usqp=CAU' },
  { id: 7, name: 'womens footwear', price: 20, rating: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQElqEJmEYfexKne6aH_BYYceBmN8iG57uwpA&usqp=CAU' },
  { id: 8, name: 'Smartphone', price: 300, rating: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr5bGmM1PUnSe_Kx824CKd6WcILJctW8s2ow&usqp=CAU'},
  { id: 9, name: 'Wallet', price: 20, rating: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBDKcH1kqqWNPeEUxf-7aDvQblY0ob6cGX_g&usqp=CAU'},
];

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo">Shopping Cart</div>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
        </nav>
      </header>
      <main>
        <section className="product-list">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <div className="product-rating">Rating: {product.rating}/5</div>
              </div>
              <div className="product-actions">
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </section>
        <section className="cart">
          <h2>Shopping Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map(item => (
                <li key={item.id}>
                  {item.name} - ${item.price}
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
};

export default App;