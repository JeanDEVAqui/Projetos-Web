import {useState} from 'react'

const todoform = ({addTodo}) => {

  const [value, setValue] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value|| !category) return;
    addTodo (value, category);
    setValue('');
    setCategory('');

    console.log("Enviou o formulário")
  };

  return  <div className="todo-Form">
    <h2>Criar Tarefa:</h2>
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Descrição da tarefa" value={value}  onChange={(e) =>setValue(e.target.value)}/>
    <select value={category} onChange={(e) =>setCategory(e.target.value)}>
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