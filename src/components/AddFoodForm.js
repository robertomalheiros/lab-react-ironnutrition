import { Divider, Input } from 'antd';

// Iteration 4
function AddFoodForm({ foods, setFood }) {
  function handleChange(e) {
    setFood({ ...foods, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={foods.name}
        name="name"
        type="text"
        onChange={handleChange}
      />

      <label>Image</label>
      <Input
        value={foods.image}
        name="image"
        type="text"
        onChange={handleChange}
      />

      <label>Calories</label>
      <Input
        value={foods.calories}
        name="calories"
        type="number"
        onChange={handleChange}
      />

      <label>Servings</label>
      <Input
        value={foods.servings}
        name="servings"
        type="number"
        onChange={handleChange}
      />

      <button type="submit" onClick={handleSubmit}>
        Create
      </button>
    </form>
  );
}

export default AddFoodForm;
