export default function ShopsList() {
    const shops = [
        {title: 'Burgernaya'}, 
        {title: 'BurgCity'},
        {title: 'MegaBurg'},
        {title: 'RestBar'},
        {title: 'Dreamer'},
        {title: 'Family place'},
        {title: 'Tasty breakfast'}];

    return (
      <ul>
          {shops.map((shop, index) =>
            <li key={index}>{shop.title}</li>
          )}
      </ul> 
    );
  }