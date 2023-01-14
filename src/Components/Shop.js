function Shop({ shopping, item }) {
  return (
    <div className="shop">
      <h1>Shop</h1>
      <div className="cart">
        <ul className="itemsCard">{shopping}</ul>
      </div>
    </div>
  );
}

export default Shop;
