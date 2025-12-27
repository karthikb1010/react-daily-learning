//import React from "react"; //we should import this line and write React.Fragment or just use <> in place of React.Fragment
import "./App.css";
import Container from "./components/Container";
import ErrorMessage from "./components/ErrorMessage";
import FoodInput from "./components/FoodInput";
import FoodItems from "./components/FoodItems";

function App() {
  // let foodItems = [];
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Ragi Millet"];

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Foods</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput></FoodInput>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
      {/* <Container>
        <p>
          Above is the list of healthy foods that are good for your health and
          well being
        </p>
      </Container> */}
    </>
  );
}

export default App;
