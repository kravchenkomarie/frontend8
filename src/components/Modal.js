import React from 'react';

export default function Modal({
  addNewStore,
  setNewStore,
  newStore,
  handleModalClose,
}) {
  return (
    <div className='modalContainer' onClick={handleModalClose}>
      <div className='modal' onClick={(e) => e.stopPropagation()}>
        <input
          className='modalInput'
          type='text'
          onInput={(event) =>
            setNewStore({ ...newStore, storeName: event.target.value })
          }
          placeholder='Название магазина'
          required
        ></input>
        <input
          className='modalInput'
          type='text'
          onInput={(event) =>
            setNewStore({ ...newStore, storeTime: event.target.value })
          }
          placeholder='Время работы'
          required
        ></input>
        <input
          className='modalInput'
          type='number'
          onInput={(event) =>
            setNewStore({ ...newStore, storeDelivery: event.target.value })
          }
          placeholder='Удаленность'
          required
        ></input>
        <input
          className='modalInput'
          type='text'
          onInput={(event) =>
            setNewStore({ ...newStore, storePayment: event.target.value })
          }
          placeholder='Метод оплаты'
          required
        ></input>
        <button className='modalButton' onClick={addNewStore}>
          Добаввить магазин
        </button>
        <button className='modalButton' onClick={handleModalClose}>
          x
        </button>
      </div>
    </div>
  );
}
