import { OrderGoods } from '../OrderGoods/OrderGoods.jsx';
import st from './Order.module.css';

const orderList = ['Супер сырный', 'Картошка фри', 'Жгучий хот-дог'];

export const Order = () => {
  return (
    <div className={st.order}>
      <section className={st.wrapper}>
        <div className={st.header} tabIndex="0" role="button">
          <h2 className={st.title}>Корзина</h2>

          <span className={st.count}>4</span>
        </div>

        <div className={st.wrap_list}>
          <ul className={st.list}>
            {orderList.map((item, i) => <OrderGoods key={i} item={item} />)}
          </ul>

          <div className={st.total}>
            <p>Итого</p>
            <p>
              <span className={st.amount}>1279</span>
              <span className="currency">₽</span>
            </p>
          </div>

          <button className={st.submit}>Оформить заказ</button>

          <div className={st.apeal}>
            <p className={st.text}>Бесплатная доставка</p>
            <button className={st.close}>Свернуть</button>
          </div>
        </div>
      </section>
    </div>
  )
};
