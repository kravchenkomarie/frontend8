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
  const [nameFilter, setNameFilter] = useState('');
  const [timeFilter, setTimeFilter] = useState('');
  const [deliveryFilter, setDeliveryFilter] = useState('');
  const [paymentFilter, setPaymentFilter] = useState('');

  const addNewStore = () => {
    setStoreData([...storeData, newStore]);
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Filters
        setTimeFilter={setTimeFilter}
        setNameFilter={setNameFilter}
        setDeliveryFilter={setDeliveryFilter}
        setPaymentFilter={setPaymentFilter}
      />
      <button className='addButton' onClick={openModal}>
        Добавить магазин
      </button>
      {isModalOpen && (
        <Modal
          addNewStore={addNewStore}
          newStore={newStore}
          setNewStore={setNewStore}
          handleModalClose={handleModalClose}
        />
      )}
      <TableStore
        storeData={storeData}
        newStore={newStore}
        timeFilter={timeFilter}
        nameFilter={nameFilter}
        deliveryFilter={deliveryFilter}
        paymentFilter={paymentFilter}
      />
    </div>
  );
}
