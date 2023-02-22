import st from './CatalogProduct.module.css';

export const CatalogProduct = (props) => {
  return (
    <article className={st.product}>
      <img src="img/photo-5.jpg" alt={props.title} className={st.image} />

      <p className={st.price}>689<span className="currency">₽</span></p>

      <h3 className={st.title}>
        <button className={st.detail}>{props.title}</button>
      </h3>

      <p className={st.weight}>520г</p>

      <button className={st.add} type="button">Добавить</button>
    </article>
  )
};



