import classNames from 'classnames';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_URI } from '../../consts.js';
import { categoryRequestAsync, changeCategory } from '../../store/category/categorySlice.js';
import { Container } from '../Container/Container.jsx';
import st from './Navigation.module.css';

export const Navigation = () => {
  const { category, activeCategory } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoryRequestAsync());
  }, [])

  return (
    <nav className={st.navigation}>
      <Container className={st.container}>
        <ul className={st.list}>
          {category.map((item, i) =>
            <li key={item.title} className={st.item}>
              <button
                className={classNames(
                  st.button,
                  activeCategory === i ? st.button_active : '')}
                style={{ backgroundImage: `url(${API_URI}/${item.image})` }}
                onClick={() => {
                  dispatch(changeCategory({ indexCategory: i }))
                }}
              >
                {item.rus}</button>
            </li>
          )}
        </ul>
      </Container>
    </nav>
  )
};