import React from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types'
import './App.css';

function App(props: { children?: number[] | string[] }) {
  const {children} = props
  function warnUser(): void {
    console.log("This is my warning message");
}
let someValue: any = '11111'

let strLength: number = (someValue as string).length;

interface Point {
  readonly x?: number,
  readonly y: number,
  [propName: string]: any
}
let p : Point = {a: 6, y: 9}
p.a = 7
console.log(strLength);

interface fn {
  a(x: number, y: number) : object
}
let getXy : fn = {
  a: (x: number, y: number) =>{
    return {}
  }
}
class Animal {
  name: string | undefined;
}
class Dog extends Animal {
  breed: string | undefined;
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
interface NotOkay {
  [x: number]: Dog;
  [x: string]: Animal;
}

interface NumberDictionary {
  [name: string]: number;
  length: number;    // 可以，length是number类型
}

interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
  // a: number
}
interface ClockInterface {
  tick(): void ;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): void {
  // return new ctor(hour, minute);
}


var Car = /** @class */ (function () {
  // 构造函数 
  function Car(hour: number, minute: number) : Object {
    return {
    }
  }
  return Car
}());

// const a = new Car('hhhh');

class DigitalClock {
  a: number;
  b: number;
  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }
  tick() {
    console.log(this.a, this.b); 
  }
}

class AnalogClock {
  constructor() {
  }
  tick() {
      console.log("tick tock");
  }
}
const a : ClockConstructor = DigitalClock;
const b : ClockConstructor = AnalogClock;

new a(1, 2).tick();
new b(1, 2).tick();

  class MyClass {

  }

interface MyInterface {
    new () : MyClass;
}




let analog = createClock(AnalogClock, 7, 32);
const disct : NumberDictionary = {
  length: 7,
  name: 9,
  huu: 4545
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

