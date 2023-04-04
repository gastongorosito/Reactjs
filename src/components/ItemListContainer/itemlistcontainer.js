
const ItemListContainer = ({greeting}) => {
  return (
    <section className="item-list-container">
      <h2 className="item-list-container__title">Productos</h2>
      <greeting />
    </section>
  );
};

export default ItemListContainer;
