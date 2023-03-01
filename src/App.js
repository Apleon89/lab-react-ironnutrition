import foods from "./foods.json";
import './App.css';
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import { Divider, Row } from "antd";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";

function App() {

  const [ foodList, setFoodList ] = useState(foods)
  const [ filterFood, setFilterFood ] = useState(foods)

  const deleteFood = (foodName) => {

    const foodListClone = foodList.filter( each => each.name !== foodName)

    setFoodList(foodListClone)
    setFilterFood(foodListClone)
  }

  return (
    <div className="App">

      <AddFoodForm setFoodList={setFoodList} setFilterFood={setFilterFood}/>

      <Search  foodList={foodList} setFilterFood={setFilterFood}/>
      
      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>

        { filterFood.map( each => <FoodBox key={each.name} food={each} deleteFood={deleteFood}/>)}
      
      </Row>

    </div>
  );
}

export default App;
