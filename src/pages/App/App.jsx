import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';

import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import CardsPage from '../CardsPage/CardsPage';
import AccessoriesPage from '../AccessoriesPage/AccessoriesPage';
import PlushiesPage from '../PlushiesPage/PlushiesPage';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

import AddNewItemPage from '../AddNewItemPage/AddNewItemPage';

import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              
              <Route path="/home" element={<HomePage />} />
              <Route path="/cards" element={<CardsPage user={user} />} />
              <Route path="/accessories" element={<AccessoriesPage user={user} />} />
              <Route path="/plushies" element={<PlushiesPage user={user} />} />
              <Route path="/new" element={<AddNewItemPage />} />
              
              <Route path="/cart" element={<ShoppingCart user={user} />} />
              
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
