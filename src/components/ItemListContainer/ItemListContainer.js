import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = ({ greetings }) => {
return(
    <container>
    <div>
        {
           <h1>{ greetings }</h1>
        }
    </div>
    <br />
    <br />
    <div>
        <ItemCount />
    </div>
    </container>
)
}

export default ItemListContainer