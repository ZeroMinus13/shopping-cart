import { useState, createRef } from 'react';
function Shop() {
  const [amount, setAmount] = useState(0);
  let item = ['CPU', 'GPU'];
  function increment() {
    return setAmount((prevState) => {
      if (amount >= 99) {
        return 99;
      } else {
        return prevState + 1;
      }
    });
  }
  function decrement() {
    return setAmount((prevState) => {
      if (amount <= 0) {
        return 0;
      } else {
        return prevState - 1;
      }
    });
  }
  function handleChange(e) {
    let set = e.target.id;
    setAmount(e.target.value);
  }
  function test() {
    return item.map((item, i) => (
      <div key={i} className="items">
        {item}
        <button onClick={increment}>+</button>
        <input
          className="amount"
          maxLength={2}
          value={amount}
          placeholder={0}
          id={i}
          onChange={(e) => handleChange(e)}
          type="tel"
        />
        <button onClick={decrement}>-</button>
      </div>
    ));
  }
  return (
    <div className="shop">
      <h1>Shop e.target.value.replace(/\D/g, '')</h1>
      <div className="cart">{test()}</div>
    </div>
  );
}

export default Shop;
