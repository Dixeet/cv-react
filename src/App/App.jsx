import React, { Component } from 'react';
import './App.css';
import SimulateTyping from '../SimulateTyping/SimulateTyping';
import SimulateTypingText from '../SimulateTyping/SimulateTypingText';
import GlitchingText from "../GlitchingText/GlitchingText";

class App extends Component {

  render() {
    return (
      <div className="App mx-auto max-width-4">
        <SimulateTyping render={(registerText, glitch) => (
          <div>
            <h1>
              <GlitchingText doNotGlitch={glitch} text="CURRICULUM VITAE">
                <SimulateTypingText register={registerText}>CURRICULUM VITAE</SimulateTypingText>
              </GlitchingText>
            </h1>
            <h2>
              <SimulateTypingText register={registerText}>de Robin Lebert</SimulateTypingText>
            </h2>
          </div>
        )}>
        </SimulateTyping>
      </div>
    );
  }
}

export default App;
