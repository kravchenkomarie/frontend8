export const TableStore = ({ storeData }) => {
  return (
    <table className='table'>
      <thead className='table__head'>
        <td>Название магазина</td>
        <td>Время отрытия</td>
        <td>Удаленность от центра доставки</td>
        <td>Метод оплаты</td>
      </thead>
      <tbody>
        {storeData.map((store, index) => (
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
