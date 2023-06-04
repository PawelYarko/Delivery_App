import s from './ShopList.module.css';

export default function ShopsList() {
    const shops = [
        {title: 'Burgernaya'}, 
        {title: 'Tasty breakfast'},
        {title: 'MegaBurg'},
        {title: 'RestBar'},
        {title: 'Dreamer'},
        {title: 'Family place'},
        {title: 'BurgCity'}];

        function onClickShop(e){
          console.log(e.currentTarget.value)
        }

    return (
      <>
        <div className={s.container}>
          <h3 className={s.title}>Shops: </h3>
          <ul className={s.list}>
              {shops.map((shop, index) =>
                <button key={index} onClick={onClickShop} value={shop.title} className={s.link}><li className={s.item}>{shop.title}</li></button>
              )}
          </ul> 
        </div>
      </>
    );
  }