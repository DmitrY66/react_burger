import { useDispatch } from 'react-redux';
import { addProduct, removeProduct } from '../../store/order/orderSlice';
import st from './Count.module.css';

export const Count = ({ count, id }) => {
  const dispatch = useDispatch();

  const addCount = () => {
    dispatch(addProduct({ id }));
  };

  const removeCount = () => {
    dispatch(removeProduct({ id }));
  };

  return (
    <div className={st.count}>
      <button className={st.minus} onClick={removeCount}>-</button>
      <p className={st.amount}>{count}</p>
      <button className={st.plus} onClick={addCount}>+</button>
    </div>
  );
};
