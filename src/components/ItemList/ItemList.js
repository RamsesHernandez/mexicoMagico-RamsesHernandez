import Item from '../Item/Item'

const ItemList = ({ productos }) => {
    return (
        <section className="items">
            {productos.map((producto) => {
                return <Item producto={producto}/>
            })}
        </section>
    )
}
export default ItemList