import React from 'react'

const todoform = () => {
  return  <div className="todo-Form">
    <h2>Criar Tarefa:</h2>
    <form>
    <input type="text" placeholder="Descrição da tarefa" />
    <select>
    <option value="">Selecione uma Categoria</option>    
    <option value="Trabalho">Trabalho</option>    
    <option value="Pessoal">Pessoal</option>    
    <option value="Estudos">Estudos</option>    
    </select>
    <button type="submit">Adicionar Tarefa</button>
    </form>
  
  
  
  </div>
  
}

export default todoform