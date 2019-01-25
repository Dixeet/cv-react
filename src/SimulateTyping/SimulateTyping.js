import React, { Component } from 'react';
import { Wait } from '../Utils';

class SimulateTyping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registeredTexts: [],
      doNotGlitch: true,
      renderOnce: false,
    };
    this.registerText = this.registerText.bind(this);
    this.simulateTyping = this.simulateTyping.bind(this);
  }

  componentDidUpdate() {
    console.log('parent');
    if (!this.state.renderOnce) {
      this.simulateTyping();
    }
  }

  registerText(text, updateTextCb, showCaretCb) {
    this.setState((state => ({
      registeredTexts: state.registeredTexts.concat([{
        text: text,
        updateTextCb: updateTextCb,
        showCaretCb: showCaretCb,
      }]),
    })));
  }

  simulateTyping(){
    if (this.state.registeredTexts.length <= 0) {
      return;
    }
    this.state.registeredTexts[0].showCaretCb(true);
    Wait(1500).then(() => {
      const next = (counter) => {
        let regText = this.state.registeredTexts[counter];
        regText.showCaretCb(true);
        this.updateText(regText, 0, 75).then(() => {
          if(counter < this.state.registeredTexts.length - 1) {
            regText.showCaretCb(false);
            counter++;
            next(counter);
          }
          this.setState({
            doNotGlitch: false,
            renderOnce: true,
          });
        });
      };
      next(0);
    });
  }

  updateText(regText, i, minTimeout = 140) {
    return new Promise((resolve, reject) => {
      if (regText.text.length < i++) {
        regText.updateTextCb(regText.text);
        resolve();
        return;
      }
      regText.updateTextCb(regText.text.substring(0, i));
      const rand = Math.floor(Math.random() * (100)) + minTimeout;
      Wait(rand).then(() => this.updateText(regText, i, minTimeout)).then(() => resolve());
    })
  }


  render() {
    return (
      <React.Fragment>
        {this.props.render(this.registerText, this.state.doNotGlitch)}
      </React.Fragment>
    );
  }
}

export default SimulateTyping;
