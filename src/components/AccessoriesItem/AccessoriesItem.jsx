import * as usersAPI from '../../utilities/users-api';

export default function AccessoriesItem({ menuItem, user, onRemove, options=[
  'add'
] }) {
    const userId = user._id;

    const addItem = (id) => {
      usersAPI.addItemToCart(userId, id);
    }

    const removeItem = async (id) => {
      await usersAPI.removeItemFromCart(userId, id);
      if (typeof onRemove === 'function') {
        await onRemove();
      }
    }

    return (
      <div className="AccessoriesListItem">
        <div className="image"><img src={menuItem.image} alt="" /></div>
        <div className="name">{menuItem.name}</div>
        <div className="buy">
          <span>${menuItem.price.toFixed(2)}</span>
          {}
          {options.includes('add') && (
            <button className="btn-sm" onClick={() => addItem(menuItem._id)}>
              ADD
            </button>
          )}
          {options.includes('remove') && (
            <button className="btn-sm" onClick={() => removeItem(menuItem._id)}>
              REMOVE
            </button>
          )}
        </div>
      </div>
    );
  }