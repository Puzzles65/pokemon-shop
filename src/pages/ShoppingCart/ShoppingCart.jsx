import  { React, useState, useEffect } from 'react';
import * as cartAPI from '../../utilities/cart-api';
import CardsItem from '../../components/CardsItem/CardsItem';

import './ShoppingCart.scss';

export default function ShoppingCart(props) {
    const { user } = props;

    const [ cart, setCart ] = useState([]);
    const userId = user._id;

    async function fetchAndSetCart(){
        const result = await cartAPI.getCart(userId);

        if (result) {
            setCart(result);
        }
    }

    useEffect(() => {
        fetchAndSetCart();
    }, [userId]);

    return (
        <div className="ShoppingCart">
            <h1>ShoppingCart</h1>
            {cart.map(({ item, quantity, _id }) => (
                <div className="ShoppingCart__item" key={_id}>
                    <CardsItem 
                        menuItem={item} 
                        cartItemId={_id}
                        baseQuantity={quantity}
                        options={[
                            'remove',
                            'edit'
                        ]} 
                        user={user} 
                        onRemove={fetchAndSetCart} 
                        onEdit={fetchAndSetCart}
                    />
                </div>
            ))}
        </div>
    )
}