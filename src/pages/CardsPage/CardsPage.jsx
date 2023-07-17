import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as categoriesAPI from '../../utilities/categories-api';
import CardsItem from '../../CardsItem/CardsItem';


export default function CardsPage() {
    const [items, setItems] = useState(null);

    useEffect(() => {
        async function getItems(){
            const card = await categoriesAPI.getSingle('Accessories');
            
            setItems(card.items); 
        }
        getItems();
    }, [])



    return (
      <main className="MenuList">
        
        {items && items.map(item =>
            <CardsItem
                
                key={item._id}
                menuItem={item}
            />
            )}
      </main>
    );
  }