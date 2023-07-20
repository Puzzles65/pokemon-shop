import { useState, useEffect, useRef } from 'react';
import * as categoriesAPI from '../../utilities/categories-api';

import AccessoriesItem from '../../components/AccessoriesItem/AccesoriesItem';
import '../AccessoriesPage/AccessoriesPage.scss';


export default function AccessoriesPage({handleAddToOrder}) {
    const [items, setItems] = useState(null);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        async function getItems(){
            const card = await categoriesAPI.getSingle('Accessories');
            
            setItems(card.items); 
        }
        getItems();

    }, [])
    
    
   
    return (
      <main className="AccessoriesList">
        
        {items && items.map(item =>
            <AccessoriesItem
                
                key={item._id}
                menuItem={item}
                handleAddToOrder={handleAddToOrder}
            />
            )}
      </main>
    );
  }