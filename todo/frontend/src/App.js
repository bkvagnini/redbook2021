/* 
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;

*/

import React, { Component } from 'react';

const list = [
  {
    "id": 1,
    "title": "Learn Django APIs",
    "body": "Go through the Redbook and learn how to make APIs using Django"
},
{
    "id": 2,
    "title": "Learn how to integrate React with Django",
    "body": "Use React as the FE and Django API as the BE - use the Redbook for this task"
},
{
    "id": 3,
    "title": "Get freelance work based on this new knowledge",
    "body": "Take profits from this and buy private island, sipping fruity drinks on the beach"
}
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { list };
  }
  render() {
    return (
      <div>
        {this.state.list.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
            </div>
        ))}
      </div>
    );
  }

}

export default App;