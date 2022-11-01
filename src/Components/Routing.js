import Home from './Home';
import Shop from './Shop';

import { Routes, Route, NavLink } from 'react-router-dom';

function Routing() {
  return (
    <div className="App">
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
        </ul>
      </nav>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}
export default Routing;
