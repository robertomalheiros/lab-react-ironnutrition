import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import Search from './components/Search';
import AllFoods from './foods.json';
import { Row, Divider, Button } from 'antd';
import { useState } from 'react';

function App() {
  const [foods, setFoods] = useState(AllFoods);
  console.log(foods);
  return (
    <div className="App">
      <AddFoodForm />

      <Button> Hide Form / Add New Food </Button>

      <Search />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foods.map((element) => {
          return (
            <FoodBox
              image={element.image}
              name={element.name}
              calories={element.calories}
              servings={element.servings}
              key={element.name}
            />
          );
        })}{' '}
        />
      </Row>
    </div>
  );
}

export default App;
