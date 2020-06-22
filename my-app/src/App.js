import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Test} from './Test'
import {useState1} from './useMyState'

const com = {com: App}
export const Context = React.createContext({value: 0})
function App(props) {
  // const [state, setState] = useState1(com, 0)
   const [state, setState] = useState({value: 1})
   const [state1, setState1] = useState(1)
  // const [a, setA] = useState1(com, 'a')
  // const [b, setB] = useState1(com, 'b')
  // setMyState(1)
  console.log('render');
  return (
    <div className="App" onClick={() => {setState({})}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <Context.Provider value={state}>
        <Test />
      </Context.Provider>
      
    </div>
  );
}

export default App;
