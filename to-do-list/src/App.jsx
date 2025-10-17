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

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>

      <div className="todo-list">
        
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
         ))}

      </div>

         <TodoForm />

    </div>
  );
}

export default App
