import React, { Component } from 'react';
import './App.css';
import SimulateTyping from '../SimulateTyping/SimulateTyping';
import SimulateTypingText from '../SimulateTyping/SimulateTypingText';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <SimulateTyping render={(registerText) => (
          <div>
            <h1>
              <SimulateTypingText register={registerText}>Robin Lebert</SimulateTypingText>
            </h1>
            <h2>
              <SimulateTypingText register={registerText}>Je suis un test</SimulateTypingText>
            </h2>
          </div>
        )}>
        </SimulateTyping>
      </div>
    );
  }
}

export default App;
