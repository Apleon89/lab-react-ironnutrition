import { Card, Col, Button } from "antd";

function FoodBox(props) {

    const { name, calories, image, servings } = props.food
    const { deleteFood } = props 

    const deleteTransmitter = (name) => {
      deleteFood(name)
    }

  return (
    <Col>
      <Card
        title={name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings} </b> kcal
        </p>
        <Button type="primary" onClick={ () => deleteTransmitter(name)}> Delete </Button>
      </Card>
    </Col>
  )
}

export default FoodBox