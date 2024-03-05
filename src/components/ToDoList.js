import React, { useEffect, useState } from 'react';
import ListElement from './ListElement';

export default function ToDoList() {
  let [list, setList] = useState([]);
  const getData = async () => {
    let data = await import('../dataBase.json');
    setList(Array.from(data));
  };
  useEffect(() => {
    getData();
  }, []);

  const deleteItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };
  return (
    <div>
      ToDoList
      {list.map((item) => (
        <ListElement item={item} deleteItem={deleteItem}></ListElement>
      ))}
      <input
        type='text'
        onInput={(event) => console.log(event.target.value)}
      ></input>
      <button>Добавить дело</button>
    </div>
  );
}
