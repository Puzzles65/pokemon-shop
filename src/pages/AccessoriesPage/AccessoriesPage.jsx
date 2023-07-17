import { useState, useEffect, useRef } from 'react';
import * as categoriesAPI from '../../utilities/categories-api';
import AccessoriesItem from '../../components/AccessoriesItem/AccesoriesItem';
import '../AccessoriesPage/AccessoriesPage.scss';


export default function PlushiesPage() {
    const [items, setItems] = useState(null);

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
            />
            )}
      </main>
    );
  }