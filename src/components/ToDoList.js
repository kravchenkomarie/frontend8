import React, { useEffect, useState } from 'react';
import ListElement from './ListElement';

export default function ToDoList() {
  let [list, setList] = useState([]);
  let [newTask, setNewTask] = useState('');

  let newTaskWithoutSpaces = newTask.trim() == '';

  const getData = async () => {
    let data = await import('../dataBase.json');
    setList(Array.from(data));
  };

  useEffect(() => {
    getData();
  }, []);

  const addTask = () => {
    if (!newTaskWithoutSpaces) {
      setList([...list, { id: Math.random(), todo: newTask }]);
      setNewTask('');
    }
  };

  const deleteItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  return (
    <div className='todoList'>
      Список дел
      {list.map((item) => (
        <ListElement item={item} deleteItem={deleteItem}></ListElement>
      ))}
      <input
        className='input'
        type='text'
        value={newTask}
        onInput={(event) => {
          setNewTask(event.target.value);
        }}
      ></input>
      <button
        className='addTaskButton'
        onClick={addTask}
        disabled={!newTask || newTaskWithoutSpaces}
      >
        Добавить задачу
      </button>
    </div>
  );
}
