import { useState } from "react";
import "./App.css";
import Todo from "./components/todo";
import TodoForm from "./components/todoForm";

function App() {
  const [todos, setTodos] = useState([
  {
    id:1,
    text:"Criar funcionalidade X",
    category: "Trabalho",
    isCompleted: false,
  },
  {
    id:2,
    text:"Ir para a academia",
    category: "Pessoal",
    isCompleted: false,
  },
    {
    id:3,
    text:"Estudar React",
    category: "Estudo",
    isCompleted: false,
    },    

  ])

  const addTodo = (text, category) => {
    const newTodo = [
      ...todos,
      {
        id: Date.now(), // id único
        text: text?.trim() || "",
        category: category || "Geral",
        isCompleted: false,
      },
    ];
    setTodos(newTodo);
}

const removeTodo = (id) => {
  const filteredTodos = todos.filter(todo => todo.id !== id);
  setTodos(filteredTodos);
}

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>

      <div className="todo-list">
        
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} />
         ))}

      </div>

         <TodoForm addTodo={addTodo}/>

    </div>
  );
}

export default App
