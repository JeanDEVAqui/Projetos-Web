import { useState } from "react";
import "./App.css";
import jsPDF from "jspdf";

import Todo from "./components/todo";
import TodoForm from "./components/todoForm";
import Search from "./components/search";
import Filter from "./components/Filter";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudo",
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("A-Z");
  const [category, setCategory] = useState("All");

  // ------------------------------
  // FUNÇÃO QUE RETORNA AS TAREFAS FILTRADAS
  // ------------------------------
  const getFilteredTodos = () => {
    return todos
      .filter((todo) =>
        filter === "all"
          ? true
          : filter === "completed"
          ? todo.isCompleted
          : !todo.isCompleted
      )
      .filter((todo) =>
        category === "All" ? true : todo.category === category
      )
      .filter((todo) =>
        todo.text.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) =>
        sort === "A-Z"
          ? a.text.localeCompare(b.text)
          : b.text.localeCompare(a.text)
      );
  };

  // ------------------------------
  // DOWNLOAD DA LISTA FILTRADA
  // ------------------------------
const downloadList = () => {
  const filtered = getFilteredTodos();

  const doc = new jsPDF();

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(18);
  doc.text("Lista de Tarefas", 14, 20);

  let y = 35;

  filtered.forEach((todo, index) => {
    const taskText = `${index + 1}. ${todo.text}`;
    const categoryText = `Categoria: ${todo.category}`;
    const statusText = `Status: ${todo.isCompleted ? "Completa" : "Incompleta"}`;

    const boxHeight = 32; // altura maior da caixa
    const checkSize = 10; // caixa da marcação dobrada

    // quebra de página
    if (y + boxHeight > 280) {
      doc.addPage();
      y = 20;
    }

    // Caixa grande da tarefa
    doc.setDrawColor(0);
    doc.setLineWidth(0.4);
    doc.rect(10, y, 190, boxHeight);

    // Checkbox do lado DIREITO
    doc.rect(190 - checkSize, y + 10, checkSize, checkSize);

    // Textos
    doc.setFontSize(12);
    doc.setFont("Helvetica", "bold");
    doc.text(taskText, 16, y + 13);

    doc.setFont("Helvetica", "normal");
    doc.text(categoryText, 16, y + 19);
    doc.text(statusText, 16, y + 25);

    y += boxHeight + 6;
  });

  doc.save("lista_de_tarefas.pdf");
};

  // ------------------------------
  // AÇÕES
  // ------------------------------
  const addTodo = (text, category) => {
    const newTodo = [
      ...todos,
      {
        id: Date.now(),
        text: text?.trim() || "",
        category: category || "Geral",
        isCompleted: false,
      },
    ];
    setTodos(newTodo);
  };

  const removeTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(newTodos);
  };

  // ------------------------------
  // RENDERIZAÇÃO
  // ------------------------------
  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>

      {/* BOTÃO PARA BAIXAR LISTA EXIBIDA */}
      <button onClick={downloadList} className="download-btn">
        Baixar Lista Exibida
      </button>

      <Search search={search} setSearch={setSearch} />
      <Filter
        filter={filter}
        setFilter={setFilter}
        setSort={setSort}
        category={category}
        setCategory={setCategory}
      />

      <div className="todo-list">
        {getFilteredTodos().map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
          />
        ))}
      </div>

      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
