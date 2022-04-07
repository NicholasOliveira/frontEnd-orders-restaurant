import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Product } from './@types';
import { Cooking } from './Pages/Cooking';
import { Home } from './Pages/Home';
import { GlobalStyle } from './styles/globalStyles'


function App() {
  const [orderItems, setOrderItems] = useState<Product[]>([] as Product[])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home
              orderItems={orderItems}
              setOrderItems={setOrderItems}
            />}
          />
          <Route
            path="/cooking"
            element={<Cooking
              orderItems={orderItems}
              setOrderItems={setOrderItems}
            />}
          />
        </Routes>
      </BrowserRouter>,
      <GlobalStyle />
    </>
  );
}

export default App;
