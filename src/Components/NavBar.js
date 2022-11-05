import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function NavBar({ products }) {
  function price() {
    return products.map((item) => item.amount * item.price).reduce((item, acc) => item + acc, 0);
  }
  return (
    <>
      <nav className="nav">
        <h2>Project Shopping Cart</h2>
        <ul>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <NavLink to="/cart">
            <p className="cartText">
              Cart Items: {` ${products.length}`} | $ {price()}
            </p>
          </NavLink>
        </ul>
      </nav>
    </>
  );
}
export default NavBar;
