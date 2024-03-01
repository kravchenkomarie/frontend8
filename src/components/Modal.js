import React, { useState } from 'react';

export default function Modal({
  addNewStore,
  setStoreName,
  setStoreTime,
  setStoreDelivery,
  setStorePayment,
}) {
  return (
    <div>
      <input
        type='text'
        onInput={(event) => setStoreName(event.target.value)}
        placeholder='Название магазина'
        required
      ></input>
      <input
        type='text'
        onInput={(event) => setStoreTime(event.target.value)}
        placeholder='Время работы'
        required
      ></input>
      <input
        type='number'
        onInput={(event) => setStoreDelivery(event.target.value)}
        placeholder='Удаленность'
        required
      ></input>
      <input
        type='text'
        onInput={(event) => setStorePayment(event.target.value)}
        placeholder='Метод оплаты'
        required
      ></input>
      <button onClick={addNewStore}>+</button>
    </div>
  );
}
