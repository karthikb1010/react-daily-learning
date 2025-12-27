import ToDoItem from "./ToDoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <ToDoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        ></ToDoItem>
      ))}
    </div>
  );
};

export default TodoItems;
