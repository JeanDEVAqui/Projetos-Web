const Filter = ({ filter, setFilter, setSort, category, setCategory }) => {
  return (
    <div className="filter">
      <h2>Filtrar:</h2>

      <div className="filter-options">

        <div>
          <p>Status:</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">Todas</option>
            <option value="completed">Completas</option>
            <option value="incomplete">Incompletas</option>
          </select>
        </div>

        <div>
          <p>Categoria:</p>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="all">Todas</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudo">Estudo</option>
          </select>
        </div>

        <div>
          <p>Ordem Alfabética</p>
          <button onClick={() => setSort("A-Z")}>A-Z</button>
          <button onClick={() => setSort("Z-A")}>Z-A</button>
        </div>

      </div>
    </div>
  );
};

export default Filter;
