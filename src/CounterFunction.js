import { useEffect, useState } from 'react';

export const CounterFunction = ({ name, children }) => {
  if (!name) {
    name = 'default Name';
  }
  let [counter, setCounter] = useState(0);
  let [text, setText] = useState('');
  let [showInput, setShowInput] = useState(true);

  const handleInput = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    // заменяет методы:
    // componentDidMount
    // componentWillUnmount
    // componentDidUpdate
    // но жизненный цикл есть и в функциональном компоненте
    console.log('счетчик был увеличен');

    //функция очистки

    return () => {
      console.log('компонент размонтирован'); // если что-то нужно сделать после размонтирования компонента
    };
  }, [counter]);

  useEffect(() => {
    // if (a < b) return; // правильно
    // correct usege
  }, []);

  return (
    <div>
      <p>{counter}</p>
      <input type='text' onInput={(event) => handleInput(event)}></input>
      <button onClick={() => setCounter((counter += 1))}>click</button>
    </div>
  );
};
