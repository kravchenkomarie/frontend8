import { headerConstants } from '../data/constants';

export default function Header() {
  return (
    <ul className='header'>
      {headerConstants.map((el) => (
        <li className='header__item'>
          <a key={el.id}>{el.name}</a>
        </li>
      ))}
    </ul>
  );
}
