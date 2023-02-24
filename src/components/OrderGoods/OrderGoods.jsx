import st from './OrderGoods.module.css';
import { Count } from "../Count/Count.jsx";
import { API_URI } from '../../consts';

export const OrderGoods = ({
  title,
  price,
  image,
  count,
  id,
  weight
}) => {
  return (
    <li className={st.item}>
      <img className={st.image} src={`${API_URI}/${image}`} alt={title} />

      <div className={st.goods}>
        <h3 className={st.title}>{title}</h3>

        <p className={st.weight}>{weight}г</p>

        <p className={st.price}>{price}
          <span className="currency">&nbsp;₽</span>
        </p>
      </div>

      <Count count={count} id={id} />
    </li>
  )
};
