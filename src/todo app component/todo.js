import { useEffect, useState } from "react";
import Todolist from "./todolist";
import axios from "axios";
import styles from "./todo.module.css";

const TodoComponent = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1/todos")
      .then((response) => {
        setTodos(response.data);
        console.log(response);
      });
  }, []);

  console.log(todos);

  const changeHandler = (event) => {
    setTask(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const todovalue = {
      completed: false,
      id: 1,
      title: task,
      userId: 1,
    };
    const newTodos = [...todos, todovalue];
    setTodos(newTodos);
    setTask("");
  };

  console.log(todos);

  return (
    <>
      <div className={styles.card}>
        <div className="card-body">
          <h2>Todo Management Application</h2>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              name="task"
              value={task}
              placeholder="Add task"
              onChange={changeHandler}
              className={styles.input}
            />{" "}
            &nbsp;&nbsp;
            <input type="submit" name="Add" value="+" className={styles.add} />
          </form>
          <Todolist
            todos={todos}
            setTodos={setTodos}
            className={styles.card1}
          />
        </div>
      </div>
    </>
  );
};
export default TodoComponent;
