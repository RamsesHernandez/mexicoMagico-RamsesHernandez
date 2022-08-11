import {Button, Card} from 'react-bootstrap';
import ImageList from '../ImageList/ImageList';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';



const IMAGES1 = [
  'https://i.ibb.co/JFFFzS6/cristalino-1800.jpg'
]

const IMAGES2 =[
  'https://i.ibb.co/p4B2Y0z/dobel-diamante.jpg'
]

const Item= () => {
  return (

    <div>
    <Card style={{ width: '18rem' }}>
      <ImageList source={IMAGES1} />
      <Card.Body>
        <Card.Title>1800 Cristalino</Card.Title>
        <Card.Text>
          <ItemDetailContainer detail={"Tequila 1800 Cristalino es un Añejo Cristalino que obtiene su transparencia y brillantez gracias al proceso de filtración en el que se extrae el color y notas amargas, conservando las características sensoriales de un tequila añejo."}/>
        </Card.Text>
        <Button variant="primary">Añadir a Carrito</Button>
      </Card.Body>
    </Card>

    <br />

    <Card style={{ width: '18rem' }}>
    <ImageList source={IMAGES2} />
    <Card.Body>
      <Card.Title>Maestro Dobel diamante</Card.Title>
      <Card.Text>
      <ItemDetailContainer detail={"El Maestro Dobel Diamante esta elaborado en el año de edad agave 8-10. Un tequila suave con notas a roble y vainilla de gran equilibrio que destaca su dulzor. Es la elección perfecta de los conocedores del buen tequila, quienes saben apreciar los sutiles tonos dulces, suavidad y equilibrio."}/>
      </Card.Text>
      <Button variant="primary">Añadir a Carrito</Button>
    </Card.Body>
  </Card>
  </div>
  );
}

export default Item;