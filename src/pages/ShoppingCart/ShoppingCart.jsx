import  { React, useState, useEffect } from 'react';
import * as usersAPI from '../../utilities/users-api';
import CardsItem from '../../components/CardsItem/CardsItem';

import './ShoppingCart.scss';

export default function ShoppingCart(props) {
    const { user } = props;

    const [ cart, setCart ] = useState([]);
    const userId = user._id;

    async function fetchAndSetCart(){
        const result = await usersAPI.getCart(userId);

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
            {cart.map((item) => (
                <div className="ShoppingCart__item" key={item._id}>
                    <CardsItem menuItem={item} options={['remove']} user={user} onRemove={fetchAndSetCart} />
                </div>
            ))}
        </div>
    )
}