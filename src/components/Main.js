import React from 'react';
import { fruitsArray } from '../data/data';

export default function Main() {
  let result = fruitsArray.filter((e, i) => i % 2);

  return (
    <div className='main'>
      {result.map((el) => (
        <p
          key={el.id}
          className={el.name === 'Банан' ? 'banana main__item' : 'main__item'}
        >
          {el.name}
        </p>
      ))}
    </div>
  );
}
