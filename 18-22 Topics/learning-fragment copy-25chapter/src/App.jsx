import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import ErrorMessage from "./components/ErrorMessage";
import FoodInput from "./components/FoodInput";
import FoodItems from "./components/FoodItems";

function App() {
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Ragi Millet"];

  // let textStateArr = useState("Food Item entered by User"); //whenevr we call useState ,it returns an array containing 2 values[one is current value and other is method to chnage it]
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];
  //above same can be written as
  let [textToShow, setTextState] = useState("Food Item entered by User");

  //or
  //let [textToShow, setTextState] = useState("");

  const handleOnChange = (event) => {
    console.log(event.target.value);
    setTextState(event.target.value);
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Foods</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <p>{textToShow}</p>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;
