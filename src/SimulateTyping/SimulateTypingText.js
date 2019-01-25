import React, { Component } from 'react';

class SimulateTypingText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      showCaret: false,
    };
    this.updateText = this.updateText.bind(this);
    this.showCaret = this.showCaret.bind(this);
  }

  updateText(text) {
    this.setState({text: text});
  }

  showCaret(value) {
    this.setState({showCaret: value});
  }

  componentDidMount() {
    this.props.register(this.props.children, this.updateText, this.showCaret);
  }

  render() {

    return (
      <React.Fragment>
        {this.state.text}
        {this.state.showCaret &&
          <span className="animated flash infinite slow">_</span>
        }
      </React.Fragment>
    );
  }
}

export default SimulateTypingText;
