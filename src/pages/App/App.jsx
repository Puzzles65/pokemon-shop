import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';

import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import CardsPage from '../CardsPage/CardsPage';
import AccessoriesPage from '../AccessoriesPage/AcessoriesPage';
import PlushiesPage from '../PlushiesPage/PlushiesPage';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

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
              <Route path="/cards" element={<CardsPage />} />
              <Route path="/accessories" element={<AccessoriesPage />} />
              <Route path="/plushies" element={<PlushiesPage />} />
              <Route path="/cart" element={<ShoppingCart />} />
              
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
