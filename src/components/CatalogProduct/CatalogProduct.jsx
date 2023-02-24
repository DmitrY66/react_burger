import { useDispatch } from 'react-redux';
import { API_URI } from '../../consts';
import { addProduct } from '../../store/order/orderSlice.js';
import st from './CatalogProduct.module.css';

export const CatalogProduct = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <article className={st.product}>
      <img src={`${API_URI}/${item.image}`} alt={item.title} className={st.image} />

      <p className={st.price}>
        {item.price}<span className="currency">&nbsp;₽</span>
      </p>

      <h3 className={st.title}>
        <button className={st.detail}>{item.title}</button>
      </h3>

      <p className={st.weight}>{item.weight}г</p>

      <button
        className={st.add}
        type="button"
        onClick={() => {
          dispatch(addProduct({ id: item.id }));
        }}
      >Добавить</button>
    </article>
  )
};



