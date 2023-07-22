import React, { useState } from 'react';
import * as cartAPI from '../../utilities/cart-api';

export default function CardsItem({ menuItem, cartItemId, user, onRemove, onEdit, options=[
  'add'
], baseQuantity=1 }) {
    const [quantity, setQuantity] = useState(baseQuantity);
    const userId = user._id;

    const addItem = async (id) => {
      await cartAPI.addItemToCart(userId, id, quantity);
    }

    const editItem = async () => {
      await cartAPI.editItemQuantity(cartItemId, quantity);
      if (typeof onEdit === 'function') {
        await onEdit();
      }
    }

    const removeItem = async () => {
      await cartAPI.removeItemFromCart(userId, cartItemId);
      if (typeof onRemove === 'function') {
        await onRemove();
      }
    }

    return (
      <div className="CardsListItem">
        <div className="image"><img src={menuItem.image} alt="" /></div>
        <div className="name">{menuItem.name}</div>
        <div className="buy">
          <span>${menuItem.price.toFixed(2)}</span>
          {}
          {options.includes('add') && (
            <div>
              <input value={quantity} onChange={(e) => setQuantity(e.target.value)} type="number" />
              <button className="btn-sm" onClick={() => addItem(menuItem._id)}>
                ADD
              </button>
            </div>
          )}
          {options.includes('edit') && (
            <div>
              <input value={quantity} onChange={(e) => setQuantity(e.target.value)} type="number" />
              <button className="btn-sm" onClick={() => editItem()}>
                EDIT
              </button>
            </div>
          )}
          {options.includes('remove') && (
            <button className="btn-rem" onClick={() => removeItem(menuItem._id)}>
              REMOVE
            </button>
          )}
        </div>
      </div>
    );
  }