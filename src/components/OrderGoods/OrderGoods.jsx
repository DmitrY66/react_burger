import st from './OrderGoods.module.css';
import { Count } from "../Count/Count.jsx";

export const OrderGoods = ({ item }) => {
  return (
    <li className={st.item}>
      <img className={st.image} src="img/burger_1.jpg" alt={item} />

      <div className={st.goods}>
        <h3 className={st.title}>{item}</h3>

        <p className={st.weight}>512г</p>

        <p className={st.price}>1279
          <span className="currency">₽</span>
        </p>
      </div>

      <Count count={1} />
    </li>
  )
};
