import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import Search from './components/Search';
import AllFoods from './foods.json';
import { Row, Divider, Button } from 'antd';
import { useState } from 'react';
import 'antd/dist/antd.css';
import './App.css';

function App() {
  const [foods, setFoods] = useState(AllFoods);
  const [search, setSearch] = useState('');
  const [hidden, setHidden] = useState(true);
  return (
    <div className="App">
      {!hidden ? <AddFoodForm foods={foods} setFoods={setFoods} /> : null}

      {!hidden ? (
        <Button onClick={() => setHidden((s) => !s)}>Hide</Button>
      ) : null}

      {hidden ? (
        <Button onClick={() => setHidden((s) => !s)}>Add New Food</Button>
      ) : null}

      <Search search={search} setSearch={setSearch} />

      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foods
          .filter((food) => {
            return (
              food.name.toLocaleLowerCase().includes(search.toLowerCase()) ||
              String(food.calories).includes(search)
            );
          })
          .map((element) => {
            return (
              <FoodBox
                food={element}
                key={element.name}
                foods={foods}
                setFoods={setFoods}
              />
            );
          })}
      </Row>
    </div>
  );
}

export default App;
