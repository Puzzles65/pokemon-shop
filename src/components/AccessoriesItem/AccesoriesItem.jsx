export default function AccessoriesItem({ menuItem, addToCart }) {
    return (
      <div className="AccessoriesListItem">
        <div className="image"><img src={menuItem.image} alt="" /></div>
        <div className="name">{menuItem.name}</div>
        <div className="buy">
          <span>${menuItem.price.toFixed(2)}</span>
          <button className="btn-sm" onClick={() => addToCart(menuItem)}>
            ADD
          </button>
        </div>
      </div>
    );
  }