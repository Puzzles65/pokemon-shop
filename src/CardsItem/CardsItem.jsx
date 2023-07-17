export default function CardsItem({ menuItem }) {
    return (
      <div className="MenuListItem">
        <div className="image"><img src={menuItem.image} alt="" /></div>
        <div className="name">{menuItem.name}</div>
        <div className="buy">
          <span>${menuItem.price.toFixed(2)}</span>
          <button className="btn-sm" onClick={() => console.log('clicked')}>
            ADD
          </button>
        </div>
      </div>
    );
  }