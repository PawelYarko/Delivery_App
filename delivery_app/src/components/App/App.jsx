import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from '../Layout/Layout';
import './App.css';

const Shop = lazy(() => import('../../views/Shop'));
const ShoppingCart = lazy(() => import('../../views/ShoppingCart'));

export const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Shop />} />
          <Route path="shoppingCart" element={<ShoppingCart />} />
          <Route path="*" element={<Shop />} />
        </Route>
    </Routes>
  );
}

export default App;
