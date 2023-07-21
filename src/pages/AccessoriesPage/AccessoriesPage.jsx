import { useState, useEffect } from 'react';
import * as categoriesAPI from '../../utilities/categories-api';
import AccessoriesItem from '../../components/AccessoriesItem/AccessoriesItem'
import '../AccessoriesPage/AccessoriesPage.scss'

export default function AccessoryPage(props) {
    const [items, setItems] = useState(null);

    useEffect(() => {
        async function getItems(){
            const accessory = await categoriesAPI.getSingle('Accessories');
            
            setItems(accessory.items); 
        }
        getItems();
    }, [])

    console.log({ items })

    return (
      <main className="AccessoriesList">
        {items && items.map(item => (
            <AccessoriesItem
                key={item._id}
                menuItem={item}
                user={props.user}
            />
        ))}
      </main>
    );
  }