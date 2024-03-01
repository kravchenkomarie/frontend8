import React from 'react';
import { useState } from 'react';
import { TableStore } from './TableStore';
import Filters from './Filters';
import Modal from './Modal';
import { data } from '../data';

export default function Main() {
  const store = {
    storeName: '',
    storeTime: '',
    storeDelivery: '',
    storePayment: '',
  };

  const [storeData, setStoreData] = useState(data);
  const [newStore, setNewStore] = useState(store);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addNewStore = () => {
    setStoreData([...storeData, newStore]);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <Filters />
      <button onClick={openModal}>Добавить магазин</button>
      {isModalOpen && (
        <Modal
          addNewStore={addNewStore}
          newStore={newStore}
          setNewStore={setNewStore}
        />
      )}
      <TableStore storeData={storeData} newStore={newStore} />
    </div>
  );
}
