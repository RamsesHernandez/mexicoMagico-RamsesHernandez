import ItemDetail from "../ItemDetail/ItemDetail";
import Accordion from 'react-bootstrap/Accordion';

const ItemDetailContainer = ({detail}) => {
    return (
        <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Detalles</Accordion.Header>
          <Accordion.Body>
            <ItemDetail detail={detail}/>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    )
  }
  export default ItemDetailContainer