import classNames from 'classnames';
import { Container } from '../Container/Container.jsx';
import st from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={st.navigation}>
      <Container className={st.container}>
        {/* <div className={st.container}> */}
        <ul className={st.list}>
          <li className={st.item}>
            <button className={classNames(st.button, st.button_burger, st.button_active)}>Бургеры</button>
          </li>
          <li className={st.item}>
            <button className={classNames(st.button, st.button_snack)}>Закуски</button>
          </li>
          <li className={st.item}>
            <button className={classNames(st.button, st.button_hotdog)}>Хот-доги</button>
          </li>
          <li className={st.item}>
            <button className={classNames(st.button, st.button_combo)}>Комбо</button>
          </li>
          <li className={st.item}>
            <button className={classNames(st.button, st.button_shawarma)}>Шаурма</button>
          </li>
          <li className={st.item}>
            <button className={classNames(st.button, st.button_pizza)}>Пицца</button>
          </li>
          <li className={st.item}>
            <button className={classNames(st.button, st.button_wok)}>Вок</button>
          </li>
          <li className={st.item}>
            <button className={classNames(st.button, st.button_dessert)}>Десерты</button>
          </li>
          <li className={st.item}>
            <button className={classNames(st.button, st.button_sauce)}>Соусы</button>
          </li>
        </ul>
        {/* </div> */}
      </Container>
    </nav>
  )
};