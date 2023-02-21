import st from './Header.module.css';
import logo from '../../assets/img/logo.svg';
import { Container } from '../Container/Container.jsx';

export const Header = () => {
  return (
    <header className={st.header}>
      <Container>
        <div className={st.container}>
          <img className={st.logo} src={logo} alt="Логотип YourMeal" />

          <div className={st.wrapper}>
            <h1 className={st.title}>
              <span>Только самые</span>
              <span className={st.red}>сочные бургеры!</span>
            </h1>

            <p className={st.appeal}>Бесплатная доставка от 599₽</p>
          </div>
        </div>
      </Container>
    </header>
  )
};
