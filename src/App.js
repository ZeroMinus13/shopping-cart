import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Shop from './Components/Shop';
import Cart from './Components/Cart';
import NavBar from './Components/NavBar';
import items from './items';
import { useState } from 'react';

function App() {
  const [item, setItem] = useState(items);
  const [cart, setCart] = useState([]);

  function addtoCart(product) {
    if (cart.some((cartItem) => cartItem.id === product.id)) {
      setCart((cart) =>
        cart.map((cartItem) =>
          cartItem.id === product.id
            ? {
                ...cartItem,
                amount: cartItem.amount + 1,
              }
            : cartItem
        )
      );
      return;
    }
    setCart((cart) => [...cart, { ...product, amount: 1 }]);
  }

  function shopping() {
    return item.map((product, index) => (
      <li key={index}>
        <h2>{product.name}</h2>
        <img src={`${product.image}`} alt={product.name} />
        <div>
          <p>$ {product.price}</p>
          <button onClick={(e) => addtoCart(product)}>Add to Cart </button>
        </div>
      </li>
    ));
  }
  function cartRender() {
    return cart.map((product, i) => {
      if (product.amount <= 0) {
        return product;
      } else {
        return (
          <>
            <li key={i}>
              <h2>{product.name}</h2>
              <img src={`${product.image}`} alt={product.name} />
              <p>$ {product.price}</p>
              <div className="container">
                <button onClick={() => increment(product)}>+</button>
                <p>Amount: {product.amount}</p>
                <button onClick={() => decrement(product)}>-</button>
              </div>
            </li>
          </>
        );
      }
    });
  }

  function increment(product) {
    setCart(
      cart.map((prev) => {
        if (prev.id === product.id) {
          return { ...prev, amount: prev.amount + 1 };
        } else {
          return prev;
        }
      })
    );
  }
  function decrement(product) {
    setCart(
      cart.map((prev) => {
        if (prev.id === product.id) {
          return { ...prev, amount: prev.amount - 1 };
        } else {
          return prev;
        }
      })
    );
  }

  return (
    <>
      <NavBar products={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop shopping={shopping()} />} />
        <Route path="/cart" element={<Cart cartRender={cartRender} />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
