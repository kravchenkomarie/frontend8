import React from 'react';

export default function Modal({ addNewStore, setNewStore, newStore }) {
  return (
    <div>
      <input
        type='text'
        onInput={(event) =>
          setNewStore({ ...newStore, storeName: event.target.value })
        }
        placeholder='Название магазина'
        required
      ></input>
      <input
        type='text'
        onInput={(event) =>
          setNewStore({ ...newStore, storeTime: event.target.value })
        }
        placeholder='Время работы'
        required
      ></input>
      <input
        type='number'
        onInput={(event) =>
          setNewStore({ ...newStore, storeDelivery: event.target.value })
        }
        placeholder='Удаленность'
        required
      ></input>
      <input
        type='text'
        onInput={(event) =>
          setNewStore({ ...newStore, storePayment: event.target.value })
        }
        placeholder='Метод оплаты'
        required
      ></input>
      <button onClick={addNewStore}>+</button>
    </div>
  );
}
