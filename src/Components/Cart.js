import { useEffect } from 'react';
const Cart = ({ cartRender }) => {
  useEffect(() => {}, [cartRender()]);

  return (
    <div className="cart">
      <h1 className="Cart">Cart</h1>
      <ul className="itemsCard">{cartRender()}</ul>
      <button className="buy">Buy Items</button>
    </div>
  );
};
export default Cart;
