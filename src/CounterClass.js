import { Component } from 'react';

export default class CounterClass extends Component {
  state = {
    counter: 0,
    text: '',
  };

  increaseCounter = () => {
    this.setState({
      counter: this.state.counter + 1, // переписываем переменную каждый раз
    });
  };

  handleInput = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  componentDidMount() {
    //когда компонент появляется в доме
    //использовать для операций, которыеочень влияют на память и внутренние ресурсы
    //например, таймер
    //идеальный момент, где можно подтянуть информацию с бэка
    console.log('я родился');
    // this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    //когда компонент уходит из дома
    //закрыть модальное оно, например
    console.log('я ушел');
    clearInterval(this.timerID);
  }

  // tick() {
  //   this.setState({
  //     date
  //   });
  // }

  componentDidUpdate() {
    // вызывается после того, как отработала функция render в каждом цикле перерисовки
  }

  componentDidCatch() {
    // отлавливает ошибки в дочернем компоненте
  }

  render() {
    return (
      <div>
        <p>CounterClass</p>
        <p>{this.state.counter}</p>
        <button onClick={this.increaseCounter}>click</button>
        <input type='text' onInput={(event) => this.handleInput(event)}></input>
        {/* <p>{this.props.name}</p>
        <p>{this.props.children}</p>
        <p>{this.props.age}</p> */}
      </div>
    );
  }
}
CounterClass.defaultProps = { age: 'def age 29' };
