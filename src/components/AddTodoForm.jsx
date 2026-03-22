import { useState } from 'react';

function AddTodoForm({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите задачу"
        style={{
          padding: '8px',
          width: '70%',
          marginRight: '10px'
        }}
      />

      <button type="submit">
        Добавить
      </button>
    </form>
  );
}

export default AddTodoForm;