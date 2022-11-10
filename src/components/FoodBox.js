import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox({ food, foods, setFoods }) {
  function handleDelete(name) {
    let filteredFoods = foods.filter((food) => {
      return food.name !== name;
    });
    setFoods(filteredFoods);
  }
  return (
    <Col>
      <Card
        key={food.name}
        title={food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.calories * food.servings} </b> kcal
        </p>
        <Button type="primary" onClick={() => handleDelete(food.name)}>
          Delete
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
