import React, { useState } from 'react';

export default function ListElement({ item, deleteItem }) {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className='listElement'>
      <input
        className='checkbox'
        type='checkbox'
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {isChecked ? <p className='checked'>{item.todo}</p> : <p>{item.todo}</p>}
      <button onClick={() => deleteItem(item.id)}>x</button>
    </div>
  );
}
