import React from 'react';
import { useState } from 'react';
import { TableStore } from './TableStore';
import Filters from './Filters';
import Modal from './Modal';

export default function Main() {
  const [storeData, setStoreData] = useState([
    {
      id: 1,
      storeName: 'Детский мир',
      storeTime: '10:00',
      storeDelivery: '12km',
      storePayment: 'Cash, card',
    },
    {
      id: 2,
      storeName: 'Золотое яблоко',
      storeTime: '9:00',
      storeDelivery: '9km',
      storePayment: 'Cash, card',
    },
    {
      id: 3,
      storeName: 'Your balance',
      storeTime: '11:00',
      storeDelivery: '1km',
      storePayment: 'Cash',
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isStoreAdded, setIsStoreAdded] = useState(false);
  let [showInput, setShowInput] = useState(true);

  const [storeName, setStoreName] = useState('');
  const [storeTime, setStoreTime] = useState('');
  const [storeDelivery, setStoreDelivery] = useState('');
  const [storePayment, setStorePayment] = useState('');

  const addNewStore = () => {
    const newStore = {
      storeName: '',
      storeTime: '',
      storeDelivery: '',
      storePayment: '',
    };

    setStoreData([...storeData, newStore]);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <Filters />
      <button onClick={openModal}>Добавить магазин</button>
      {isModalOpen ? (
        <Modal
          setStoreName={setStoreName}
          setStoreTime={setStoreTime}
          setStoreDelivery={setStoreDelivery}
          setStorePayment={setStorePayment}
          addNewStore={addNewStore}
          setStoreData={setStoreData}
        />
      ) : (
        ''
      )}
      <TableStore
        storeData={storeData}
        isStoreAdded={isStoreAdded}
        storeName={storeName}
        storeTime={storeTime}
        storeDelivery={storeDelivery}
        storePayment={storePayment}
      />
    </div>
  );
}
