// import { useState, useEffect } from 'react'
// import { NavLink, useLocation } from 'react-router-dom'
import ShopsList from '../components/ShopsList/ShopsList';
// import s from './css/Home.module.css'

export default function Shop() {
  return (
    <>
    <ShopsList/>
    <ul>
        <li>
            <img src="" alt="img"/>
            <p>big burger</p>
            <button>Add to cart</button>
        </li>
    </ul>

    </>
  );
}
