import { useState, useEffect } from 'react';
import * as categoriesAPI from '../../utilities/categories-api';
import CardsItem from '../../components/CardsItem/CardsItem';
import '../CardsPage/CardsPage.scss'

export default function CardsPage(props) {
    const [items, setItems] = useState(null);

    useEffect(() => {
        async function getItems(){
            const card = await categoriesAPI.getSingle('Cards');
            
            setItems(card.items); 
        }
        getItems();
    }, [])

    console.log({ items })

    return (
      <main className="CardsList">
        {items && items.map(item => (
            <CardsItem
                key={item._id}
                menuItem={item}
                user={props.user}
            />
        ))}
      </main>
    );
  }