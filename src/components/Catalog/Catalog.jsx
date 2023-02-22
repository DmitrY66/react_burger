import { CatalogProduct } from "../CatalogProduct/CatalogProduct.jsx";
import { Container } from "../Container/Container.jsx";
import { Order } from "../Order/Order.jsx";
import st from './Catalog.module.css';

const goodsList = [
  { title: 'Мясная бомба' },
  { title: 'Супер сырный' },
  { title: 'Сытный' },
  { title: 'Итальянский' },
  { title: 'Вечная классика' },
  { title: 'Тяжелый удар' },
];

export const Catalog = () => {
  return (
    <section className={st.catalog}>
      <Container className={st.container}>

        <Order />

        <div className={st.wrapper}>
          <h2 className={st.title}>Бургеры</h2>

          <div className={st.wrap_list}>
            <ul className={st.list}>
              {goodsList.map((item, i) => (
                <li key={i} className={st.item}>
                  <CatalogProduct title={item.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>

      </Container>
    </section>
  )
};
