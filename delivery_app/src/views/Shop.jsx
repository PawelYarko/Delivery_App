import { useState } from 'react';
// import { NavLink, useLocation } from 'react-router-dom'
import CardTemplate from '../components/CardTemplate/CardTemplate';
// import ShopsList from '../components/ShopsList/ShopsList';

import s from './Shop.module.css';

export default function Shop() {
  const[shopName, setShopName] = useState('');
  const shops = [
    {title: 'Burgernaya'}, 
    {title: 'Tasty breakfast'},
    {title: 'MegaBurg'},
    {title: 'RestBar'},
    {title: 'Dreamer'},
    {title: 'Family place'},
    {title: 'BurgCity'}];

    function onClickShop(e){
      setShopName(e.currentTarget.value);
    }
  return (
    <>
    <div className={s.container}>
      <div className={s.containerList}>
          <h3 className={s.title}>Shops: </h3>
          <ul className={s.list}>
              {shops.map((shop, index) =>
                <button key={index} onClick={onClickShop} value={shop.title} className={s.link}><li className={s.item}>{shop.title}</li></button>
              )}
          </ul> 
        </div>
      <CardTemplate shopName={shopName}/>
    </div>
    </>
  );
}
