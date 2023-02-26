import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productReqestAsync } from "../../store/product/productSlice.js";
import { CatalogProduct } from "../CatalogProduct/CatalogProduct.jsx";
import { Container } from "../Container/Container.jsx";
import { Order } from "../Order/Order.jsx";
import st from './Catalog.module.css';

// const goodsList = [
//   { title: 'Мясная бомба' },
//   { title: 'Супер сырный' },
//   { title: 'Сытный' },
//   { title: 'Итальянский' },
//   { title: 'Вечная классика' },
//   { title: 'Тяжелый удар' },
// ];

export const Catalog = () => {
  const { products } = useSelector(state => state.product);
  const dispatch = useDispatch();
  const { category, activeCategory } = useSelector(state => state.category);

  useEffect(() => {
    if (category.length) {
      dispatch(productReqestAsync(category[activeCategory].title));
    }
  }, [category, activeCategory]);


  return (
    <section className={st.catalog}>
      <Container className={st.container}>

        <Order />

        <div className={st.wrapper}>
          <h2 className={st.title}>{category[activeCategory]?.rus}</h2>

          <div className={st.wrap_list}>
            {products.length ? (
              <ul className={st.list}>
                {products.map(item => (
                  <li key={item.id} className={st.item}>
                    <CatalogProduct item={item} />
                  </li>
                ))}
              </ul>
            ) : (
              <>
                <p>К нашему большому сожалению!</p>
                <p className={st.empty}>
                  Все товары данной категории временно отсутствуют!
                </p>
              </>
            )}
          </div>
        </div>

      </Container>
    </section>
  )
};
