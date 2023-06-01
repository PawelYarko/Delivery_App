import s from './ShoppingCartForm.module.css';

export default function ShoppingCartForm() {

    return (
    <>
        <form action="" className={s.form}>
            <label>
                Name:
                <input type="text" name="name" id="" required/>
            </label>
            <label>
                Email:
                <input type="text" name="email" id="" required/>
            </label>
            <label>
                Phone:
                <input type="text" name="tel" id="" required/>
            </label>
            <label>
                Address:
                <input type="text" name="text" id="" required/>
            </label>
        </form>
    </>
    );
  }