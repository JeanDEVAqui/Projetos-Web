import React from 'react'

const todo = ({ todo, removeTodo }) => {
  return (
    <div className="todo">
            <div className="content">
              <p>Afazer: {todo.text}</p>
              <p className="category">Categoria: {todo.category} </p>
              <p className="status">Status: {todo.isCompleted ? "Concluído" : "Pendente"}</p>
            </div>
            <div>
            <button className="complete">Concluir</button>
            <button className="delete" onClick={() => removeTodo(todo.id)}>Excluir</button>
            </div>
          </div>  
  )
}

export default todo