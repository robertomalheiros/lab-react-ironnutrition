import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import Search from './components/Search';
import AllFoods from './foods.json';
import { Row, Divider, Button } from 'antd';
import { useState } from 'react';

function App() {
  const [foods, setFoods] = useState(AllFoods);
  return (
    <div className="App">
      <AddFoodForm foods={foods} setFoods={setFoods} />

      <Button> Hide Form / Add New Food </Button>

      <Search foods={foods} setFoods={setFoods} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foods.map((element) => {
          return <FoodBox food={element} foods={foods} setFoods={setFoods} />;
        })}{' '}
        />
      </Row>
    </div>
  );
}

export default App;
