function TodoFilters({ filter, onFilterChange, activeCount }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <p>Осталось задач: {activeCount}</p>

      <button onClick={() => onFilterChange('all')}>
        Все
      </button>

      <button onClick={() => onFilterChange('active')}>
        Активные
      </button>

      <button onClick={() => onFilterChange('completed')}>
        Выполненные
      </button>
    </div>
  );
}

export default TodoFilters;