import React, {Component} from 'react';

class ScramblingSentence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
    this.updateText = this.updateText.bind(this);
  }

  updateText(text) {
    this.setState({text: text});
  }

  componentDidMount() {
    this.props.register(this.props.children, this.updateText, this.showCaret);
  }

  render() {
    return (
      <span dangerouslySetInnerHTML={ {__html: this.state.text} }/>
    );
  }
}

export default ScramblingSentence;
