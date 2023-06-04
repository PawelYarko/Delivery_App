import {useEffect, useContext, useState} from 'react';
import axiosApi from '../service/api';
import {OrderContext} from '../components/App/OrderContextProvider';
import s from './ShoppingCart.module.css';


export default function ShoppingCart() {
  const {data} = useContext(OrderContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [ammount, setAmmount] = useState(1);
  const [orderPack, setOrderPack] = useState([]);

useEffect(() => {
  async function postData() {
    try {
      await axiosApi.post("customers",{
        ...orderPack
      },
      )
      .then(res => console.log(res))
    } catch (error) {
      console.log('error');
    }
  }
  if(orderPack.name && orderPack.email && orderPack.phone && orderPack.address) {
    postData();
  }
  else {
    console.log('Invalid arguments provided to post method');
}
}, [orderPack]);

function formSubmit(e){
  e.preventDefault();
  setOrderPack({name, email, phone, address, orders:[...data]});
}
    return (
      <>
        <form action="" className={s.form} onSubmit={formSubmit}>
          <div className={s.container}>
            <div className={s.formInput}>
            <label className={s.label}>
                  Name:
                  <input 
                    type="text" 
                    name="name" 
                    id="" 
                    className={s.input}
                    value={name}
                    onChange={(e)=>setName(e.currentTarget.value)} 
                    required/>
              </label>
              <label className={s.label}>
                  Email:
                  <input 
                  type="text"
                  name="email" 
                  id=""
                  className={s.input}
                  value={email}
                  onChange={(e)=>setEmail(e.currentTarget.value)} 
                  required/>
              </label>
              <label className={s.label}>
                  Phone:
                  <input 
                  type="text" 
                  name="tel" 
                  className={s.input}
                  id=""
                  placeholder="+38(099)999-99-99"
                  value={phone}
                  onChange={(e)=>setPhone(e.currentTarget.value)} 
                  required/>
              </label>
              <label className={s.label}>
                  Address:
                  <input 
                  type="text" 
                  name="text"
                  className={s.input} 
                  id=""
                  value={address}
                  onChange={(e)=>setAddress(e.currentTarget.value)} 
                  required/>
              </label>
            </div>

              <ul className={s.list}>
                {data?.map((item) =>
                    <li key={item._id} className={s.item}>
                      <div className={s.thumb}>
                        <img src={item.img} alt={item.productTitle} className={s.img}/>
                      </div>
                      <div className={s.itemContainer}>
                        <p className={s.name}>{item.productTitle}</p>
                        <p className={s.cost}>{item.price}</p>
                        <input 
                          type="number" 
                          id={item._id} 
                          value={ammount}
                          className={s.inputAmmount}
                          onChange={()=>setAmmount(function increment(ammount){
                            return ammount += 1;
                          })} 
                          name="tentacles" 
                          step="1"
                          min="0" 
                          max="25"/>
                      </div>
                    </li>
                )}
              </ul>
            </div>

            <div className={s.totalContainer}>
              <p className={s.total}>Total:</p>
              <button type="submit" className={s.submit}>Submit</button>
            </div>
        </form>

      </>
    );
  }