import React, { Component } from 'react';
import './App.css';
import SimulateTyping from '../SimulateTyping/SimulateTyping';
import SimulateTypingText from '../SimulateTyping/SimulateTypingText';
import GlitchingText from "../GlitchingText/GlitchingText";
import ScramblingText from "../ScramblingText/ScramblingText";
import ScramblingSentence from "../ScramblingText/ScramblingSentence";

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

        <ScramblingText render={(registerText) => (
          <div>
            <p>
              <ScramblingSentence register={registerText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                lacinia egestas suscipit. Vestibulum leo arcu, porta sit amet pellentesque a, sodales sed elit. Sed vel
                rutrum velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                egestas. Pellentesque dictum vitae leo vitae euismod. Nam aliquam consequat mi, at volutpat nisi blandit
                eu. Aenean vel mi dolor. Sed in malesuada felis. Pellentesque odio urna, pulvinar sit amet turpis in,
                consequat consectetur elit. Sed eu faucibus arcu, et imperdiet turpis.</ScramblingSentence>
              <br/>
              <ScramblingSentence register={registerText}>Aenean suscipit vestibulum mollis. Etiam ut suscipit metus.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque
                magna nisl, vulputate nec luctus a, mattis et urna. Sed ac nisi vitae nulla placerat efficitur. Nam
                scelerisque ultricies ipsum, nec rhoncus enim pellentesque eu. Nam fermentum gravida faucibus.
                Suspendisse potenti. Fusce scelerisque sagittis tellus sed bibendum.</ScramblingSentence>
            </p>
            <p>
              <ScramblingSentence register={registerText}>Cras sit amet facilisis erat. Mauris egestas rhoncus sagittis.
                Quisque rhoncus eu dui non efficitur. Donec quam enim, posuere ut viverra in, varius id odio. Donec eget
                ultricies lectus, consectetur ullamcorper enim. Duis mattis, orci et fermentum porttitor, eros massa
                feugiat lacus, eu sagittis velit neque ac odio. Nam gravida sem vitae odio luctus lacinia. Aliquam sed
                rhoncus sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                Nam vitae blandit arcu. Mauris pulvinar nisi at velit bibendum, vitae suscipit mauris semper. Nulla ac
                ante sit amet enim hendrerit lacinia lacinia sit amet nunc. Proin ut maximus velit. Sed vel eros augue.
                Proin id ante ultricies, luctus lorem sed, finibus lectus. Mauris consectetur vulputate libero ac
                egestas.</ScramblingSentence>
            </p>
          </div>
        )}>
        </ScramblingText>
      </div>
    );
  }
}

export default App;
