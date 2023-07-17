import { useState, useEffect, useRef } from 'react';
import * as categoriesAPI from '../../utilities/categories-api';
import PlushiesItem from '../../components/PlushesItem/PlushiesItem'
import '../PlushiesPage/PlushiesPage.scss';

export default function PlushiesPage() {
    const [items, setItems] = useState(null);

    useEffect(() => {
        async function getItems(){
            const card = await categoriesAPI.getSingle('Plushies');
            
            setItems(card.items); 
        }
        getItems();
    }, [])



    return (
      <main className="PlushiesList">
        
        {items && items.map(item =>
            <PlushiesItem
                
                key={item._id}
                menuItem={item}
            />
            )}
      </main>
    );
  }