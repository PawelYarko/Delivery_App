import { useState } from 'react';
import {useEffect, useContext} from 'react';
import axiosApi from '../../service/api';
import {OrderContext} from '../../components/App/OrderContextProvider';
import s from './CardTemplate.module.css';

export default function CardTemplate({shopName}) {
    const [products, setProducts] = useState([]);
    const {data, updateData} = useContext(OrderContext);
    useEffect(() => {
        async function get() {
          try {
            const response = await axiosApi.get("products");
            setProducts(response.data);
          } catch (error) {
            console.log('error');
          }
        }
        get();
      }, []);

      function handleAddCard(product){
        const mas = [...data, product];
        updateData(mas);   
      }

      const templImg = 'https://img.freepik.com/free-photo/side-view-delicious-pizza-with-tomatoes-greens-stained-white-surface_179666-34033.jpg?w=900&t=st=1685899024~exp=1685899624~hmac=e573007cdb6acb8e4a8d7aba3c08cf08bd58e588a3a85e2f342c921f52f9eb55';

    return (
      <>
      <div className={s.container}>
        <ul className={s.list}>
            {products?.map((product) =>
                <li key={product._id} className={s.item}>
                  <div className={s.thumb}>
                    <img src={product.img ?? templImg} alt={product.productTitle} className={s.img}/>
                  </div>
                  <p className={s.name}>{product.productTitle ?? 'Product'}</p>
                  <p className={s.cost}>{product.price ?? '100'}</p>
                  <button onClick={() => handleAddCard(product)} className={s.btn}>Add to cart</button>
                </li>
            )}
        </ul>
      </div>
  
      </>
    );
  }