import React, { Component } from 'react';
import './App.css';
import SimulateTyping from '../SimulateTyping/SimulateTyping';
import SimulateTypingText from '../SimulateTyping/SimulateTypingText';
import GlitchingText from "../GlitchingText/GlitchingText";

class App extends Component {

  render() {
    return (
      <div className="App">
        <SimulateTyping render={(registerText, glitch) => (
          <div>
            <h1>
              <GlitchingText doNotGlitch={glitch} text="Robin Lebert">
                <SimulateTypingText register={registerText}>Robin Lebert</SimulateTypingText>
              </GlitchingText>
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
