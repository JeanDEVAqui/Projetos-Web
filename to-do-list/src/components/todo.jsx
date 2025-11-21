import React from 'react'

const todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
            <div className="content">
              <p>Afazer: {todo.text}</p>
              <p className="category">Categoria: {todo.category} </p>
              <p className="status">Status: {todo.isCompleted ? "Concluído" : "Pendente"}</p>
            </div>
            <div>
            <button className="complete" onClick={() => completeTodo(todo.id)}>Concluir</button>
            <button className="delete" onClick={() => removeTodo(todo.id)}>Excluir</button>
            </div>
          </div>  
  )
}

export default todo