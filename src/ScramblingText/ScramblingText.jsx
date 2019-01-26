import React, {Component} from 'react';

class ScramblingText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registeredTexts: [],
      renderOnce: false,
    };
    this.chars = '!<>-_\\/[]{}—=+*^?#@%01________';
    this.oldPhrase = '';
    this.registerText = this.registerText.bind(this);
    this.update = this.update.bind(this);
    this.scrambleText = this.scrambleText.bind(this);
    this.scramble = this.scramble.bind(this);
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }

  scramble() {
    const next = (counter) => {
      this.scrambleText(this.state.registeredTexts[counter]).then(() => {
        counter++;
        if (counter < this.state.registeredTexts.length) {
          setTimeout(next(counter), 300);
        }
      });
    };
    next(0);
  }

  scrambleText(reg){
    const oldText = reg.text;
    const length = Math.max(oldText.length, reg.text.length);
    const promise = new Promise((resolve) => this.resolve = resolve);
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = reg.text[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({
        from,
        to,
        start,
        end,
      });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update(reg);
    return promise;
  }

  update(reg) {
    let output = '';
    this.oldPhrase = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let {from, to, start, end, char} = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span style="opacity: 0.25">${char}</span>`;
      } else {
        output += from;
      }
    }
    reg.updateTextCb(this.oldPhrase + output);
    if (complete === this.queue.length) {
      this.oldPhrase = this.oldPhrase + output;
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(() => setTimeout(() => this.update(reg), 0));
      this.frame++;
    }
  }

  registerText(text, updateTextCb) {
    this.setState((state => ({
      registeredTexts: state.registeredTexts.concat([{
        text: text,
        updateTextCb: updateTextCb,
      }]),
    })));
  }

  componentDidUpdate() {
    if (!this.state.renderOnce) {
      this.scramble();
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.props.render(this.registerText)}
      </React.Fragment>
    );
  }
}

export default ScramblingText;
