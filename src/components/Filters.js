import React, { useState } from 'react';

export default function Filters({
  setNameFilter,
  setTimeFilter,
  setDeliveryFilter,
  setPaymentFilter,
}) {
  const [isNameClicked, setIsNameClicked] = useState(false);
  const [isTimeClicked, setIsTimeClicked] = useState(false);
  const [isDeliveryClicked, setIsDeliveryClicked] = useState(false);
  const [isPaymentClicked, setIsPaymentClicked] = useState(false);

  const filterNameClick = () => {
    setIsNameClicked(!isNameClicked);
  };
  const filterTimeClick = () => {
    setIsTimeClicked(!isTimeClicked);
  };
  const filterDeliveryClick = () => {
    setIsDeliveryClicked(!isDeliveryClicked);
  };
  const filterPaymentClick = () => {
    setIsPaymentClicked(!isPaymentClicked);
  };

  return (
    <div className='filters'>
      <h3>Фильтры</h3>
      {isNameClicked ? (
        <input
          type='text'
          onInput={(event) => setNameFilter(event.target.value)}
          placeholder='Введите название'
        ></input>
      ) : (
        <button onClick={filterNameClick}>По названию</button>
      )}
      {isTimeClicked ? (
        <input
          type='text'
          onInput={(event) => setTimeFilter(event.target.value)}
          placeholder='Введите время'
        ></input>
      ) : (
        <button onClick={filterTimeClick}>По времени открытия</button>
      )}
      {isDeliveryClicked ? (
        <input
          type='number'
          onInput={(event) => setDeliveryFilter(event.target.value)}
          placeholder='Введите расстояние в км'
        ></input>
      ) : (
        <button onClick={filterDeliveryClick}>По удаленности</button>
      )}
      {isPaymentClicked ? (
        <input
          type='text'
          onInput={(event) => setPaymentFilter(event.target.value)}
          placeholder='Введите метод оплаты'
        ></input>
      ) : (
        <button onClick={filterPaymentClick}>По методу оплаты</button>
      )}
    </div>
  );
}
