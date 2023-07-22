import { useState, useEffect } from 'react';
import * as categoriesAPI from '../../utilities/categories-api';
import CardsItem from '../../components/CardsItem/CardsItem';
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
          <CardsItem
              key={item._id}
              menuItem={item}
              user={props.user}
          />
      ))}
    </main>
  );
}