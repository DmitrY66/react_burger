import { useState } from 'react';
import st from './Count.module.css';

export const Count = (props) => {
  const [count, setCount] = useState(props.count);

  const addCount = () => {
    setCount(count + 1);
  };

  const remuveCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className={st.count}>
      <button className={st.minus} onClick={remuveCount} disabled={count === 1}>-</button>
      <p className={st.amount}>{count}</p>
      <button className={st.plus} onClick={addCount}>+</button>
    </div>
  );
};
