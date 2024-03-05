export const TableStore = ({
  storeData,
  timeFilter,
  nameFilter,
  deliveryFilter,
  paymentFilter,
}) => {
  return (
    <table className='table'>
      <thead className='table__head'>
        <td>Название магазина</td>
        <td>Время отрытия</td>
        <td>Удаленность от центра доставки, км</td>
        <td>Метод оплаты</td>
      </thead>
      <tbody>
        {storeData
          .filter(
            (store) =>
              (!nameFilter ||
                store.storeName
                  .toLowerCase()
                  .includes(nameFilter.toLowerCase())) &&
              (!timeFilter || store.storeTime.includes(timeFilter)) &&
              (!deliveryFilter ||
                store.storeDelivery.includes(deliveryFilter)) &&
              store.storePayment
                .toLowerCase()
                .includes(paymentFilter.toLowerCase())
          )
          .map((store) => (
            <tr key={store.id}>
              <td>{store.storeName}</td>
              <td>{store.storeTime}</td>
              <td>{store.storeDelivery}</td>
              <td>{store.storePayment}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
