import ToDoItem from "./ToDoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <ToDoItem todoDate={item.dueDate} todoName={item.name}></ToDoItem>
      ))}
    </div>
  );
};

export default TodoItems;
