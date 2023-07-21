import { useState, useEffect } from 'react';
import * as categoriesAPI from '../../utilities/categories-api';
import PlushiesItem from '../../components/PlushesItem/PlushiesItem'
import '../PlushiesPage/PlushiesPage.scss';

export default function CardsPage(props) {
  const [items, setItems] = useState(null);

  useEffect(() => {
      async function getItems(){
          const plush = await categoriesAPI.getSingle('Plushies');
          
          setItems(plush.items); 
      }
      getItems();
  }, [])


  return (
    <main className="PlushiesList">
      {items && items.map(item => (
          <PlushiesItem
              key={item._id}
              menuItem={item}
              user={props.user}
          />
      ))}
    </main>
  );
}