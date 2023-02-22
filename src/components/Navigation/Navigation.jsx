import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory } from '../../store/category/categorySlice.js';
import { Container } from '../Container/Container.jsx';
import st from './Navigation.module.css';

export const Navigation = () => {
  const { category, activeCategory } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  return (
    <nav className={st.navigation}>
      <Container className={st.container}>
        <ul className={st.list}>
          {category.map((item, i) =>
            <li key={i} className={st.item}>
              <button
                className={classNames(
                  st.button,
                  activeCategory === i ? st.button_active : '')}
                style={{ backgroundImage: `url(${item.image})` }}
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