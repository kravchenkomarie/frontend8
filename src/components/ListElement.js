import React from 'react';

export default function ListElement({ item, deleteItem, addItem }) {
  return (
    <div>
      {item.todo}
      <button onClick={() => deleteItem(item.id)}>x</button>
    </div>
  );
}
