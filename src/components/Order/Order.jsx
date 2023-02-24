import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../store/modalDelivery/modalDeliverySlice.js';
import { orderRequestAsync } from '../../store/order/orderSlice.js';
import { OrderGoods } from '../OrderGoods/OrderGoods.jsx';
import st from './Order.module.css';

// const orderList = ['Супер сырный', 'Картошка фри', 'Жгучий хот-дог'];

export const Order = () => {
  const { totalPrice, totalCount, orderList, orderGoods } = useSelector(state => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderRequestAsync());
  }, [orderList.length])

  return (
    <div className={st.order}>
      <section className={st.wrapper}>
        <div className={st.header} tabIndex="0" role="button">
          <h2 className={st.title}>Корзина</h2>

          <span className={st.count}>{totalCount}</span>
        </div>

        <div className={st.wrap_list}>
          <ul className={st.list}>
            {orderGoods.map((item) => <OrderGoods key={item.id} {...item} />)}
          </ul>

          <div className={st.total}>
            <p>Итого</p>
            <p>
              <span className={st.amount}>{totalPrice}</span>
              <span className="currency">&nbsp;₽</span>
            </p>
          </div>

          <button
            className={st.submit}
            disabled={orderGoods.length === 0}
            onClick={() => {
              dispatch(openModal())
            }}>Оформить заказ</button>

          <div className={st.apeal}>
            <p className={st.text}>Бесплатная доставка</p>
            <button className={st.close}>Свернуть</button>
          </div>
        </div>
      </section>
    </div>
  )
};
