import { useState } from 'react';
import './App.css';
import CounterClass from './CounterClass';
import { CounterFunction } from './CounterFunction';

function App() {
  // let [counter, setCounter] = useState(0);
  let [showInput, setShowInput] = useState(true);
  let [text, setText] = useState(false);

  return (
    <div className='App'>
      <CounterClass name={'Max'}>
        Children props внутри тегов компонента
      </CounterClass>
      <CounterFunction />
    </div>
  );
}

export default App;
