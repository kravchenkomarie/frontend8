import React from 'react';
import { footerConstants } from '../data/constants';

export default function Footer() {
  return (
    <ul className='footer'>
      {footerConstants.map((el) => (
        <li className='footer__item'>
          <a key={el.id}>{el.name}</a>
        </li>
      ))}
    </ul>
  );
}
