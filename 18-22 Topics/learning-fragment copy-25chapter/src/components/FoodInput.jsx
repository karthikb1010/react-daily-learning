import styles from "./FoodInput.module.css";

const FoodInput = ({ handleOnChange }) => {
  // const handleOnChange = (event) => {
  //   console.log(event.target.value);
  // };

  return (
    <input
      type="text"
      placeholder="Enter Food Item here"
      className={styles.input}
      onChange={handleOnChange}
    ></input>
  );
};
export default FoodInput;
