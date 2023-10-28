import { useState } from "react";
import "./App.css";

function App() {
  const [inpValue, setInpValue] = useState("");
  const [todoData, setTodoData] = useState([]);

  // console.log(inpValue);

  const addTodoHandler = () => {
    inpValue
      ? setTodoData((prev) => [...prev, inpValue])
      : alert("You cant save empty todo");
    setInpValue("");
  };

  const deleteTodoHandler = (i) => {
    // console.log("Delete Todo Index >>> ", i);

    const filteredTodoData = todoData.filter((el, index) => index !== i);
    setTodoData(filteredTodoData);
  };

  const deleteAllTodoHandler = () => {
    setTodoData([]);
  };

  const editTodoHandler = (i) => {
    // console.log("Edit todo index >>> ", i);
    const todos = [...todoData];
    const editValue = prompt("Edit todo value", todoData[i]);
    // console.log(editValue);
    todos[i] = editValue;

    editValue ? setTodoData(todos) : alert("You cant save empty todo");
  };

  return (
    <div className="header">
      <input
        value={inpValue}
        type="text"
        placeholder="Enter Todo"
        onChange={(e) => setInpValue(e.target.value)}
      />
      <button className="btn btn-success" onClick={addTodoHandler}>
        Add
      </button>
      {todoData.length > 1 ? (
        <button className="btn btn-primary" onClick={deleteAllTodoHandler}>
          Delete All
        </button>
      ) : (
        <span></span>
      )}

      <ul>
        {todoData.length ? (
          todoData.map((el, i) => (
            <li key={i}>
              {el}
              <span>
                <button
                  className="btn btn-warning"
                  onClick={() => editTodoHandler(i)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodoHandler(i)}
                >
                  Delete
                </button>
              </span>
            </li>
          ))
        ) : (
          <h3>No data found...</h3>
        )}
      </ul>
    </div>
  );
}

export default App;
